// ============================================================================
// STATE MANAGEMENT (JSONBin cloud sync + localStorage fallback)
// ============================================================================
const JSONBIN_BIN_ID = '6a0cab446610dd3ae87035ea';
const JSONBIN_ACCESS_KEY = '$2a$10$SucCjUWz7GIQK5pCC03pROGVeRGkTdg0bsUZRB30lA63SoqB3la66';
const JSONBIN_API = `https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`;

const STORAGE_KEY = 'yashi-revision-tracker-v1';
const THEME_KEY = 'yashi-tracker-theme';
let state = {};
let isViewingSnapshot = false;
let isViewerMode = false;
let lastLocalEdit = 0;
let saveTimer = null;
let calYear = new Date().getFullYear();
let calMonth = new Date().getMonth();

function setSyncStatus(status, customText) {
  const el = document.getElementById('syncIndicator');
  const textEl = document.getElementById('syncText');
  if (!el) return;
  el.classList.remove('syncing', 'synced', 'error', 'offline');
  const labels = {
    syncing: 'Syncing…',
    synced: 'Synced',
    error: 'Sync error',
    offline: 'Offline',
    loading: 'Loading…',
  };
  if (status !== 'loading') el.classList.add(status);
  textEl.textContent = customText || labels[status] || status;
}

async function loadStateFromCloud() {
  try {
    setSyncStatus('syncing', 'Loading…');
    const r = await fetch(JSONBIN_API + '/latest', {
      headers: { 'X-Access-Key': JSONBIN_ACCESS_KEY },
    });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    const data = await r.json();
    state = (data.record && data.record.state) || {};
    setSyncStatus('synced');
    return true;
  } catch (e) {
    console.warn('Cloud load failed:', e);
    setSyncStatus('offline');
    return false;
  }
}

function loadStateFromLocal() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) state = JSON.parse(raw);
  } catch (e) { console.warn(e); }
}

function loadFromHashShare() {
  const hash = window.location.hash;
  if (!hash.startsWith('#share=')) return false;
  try {
    const encoded = hash.slice(7);
    state = JSON.parse(decodeURIComponent(atob(encoded)));
    isViewingSnapshot = true;
    document.getElementById('viewingBadge').style.display = '';
    document.getElementById('resetBtn').style.display = 'none';
    setSyncStatus('synced', 'Snapshot');
    showToast('Viewing shared snapshot');
    return true;
  } catch (e) {
    console.warn('Invalid share URL', e);
    return false;
  }
}

function saveState() {
  if (isViewingSnapshot || isViewerMode) return;
  lastLocalEdit = Date.now();
  // Always save to localStorage immediately (offline fallback)
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch (e) { console.warn('Local save failed:', e); }
  // Debounced cloud save
  setSyncStatus('syncing');
  clearTimeout(saveTimer);
  saveTimer = setTimeout(saveStateToCloud, 700);
}

async function saveStateToCloud() {
  try {
    const r = await fetch(JSONBIN_API, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Access-Key': JSONBIN_ACCESS_KEY,
      },
      body: JSON.stringify({ state, lastUpdated: new Date().toISOString() }),
    });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    setSyncStatus('synced');
  } catch (e) {
    console.warn('Cloud save failed:', e);
    setSyncStatus('error');
  }
}

function getSubtopicState(sectionKey, topicIdx, subIdx) {
  return state?.[sectionKey]?.[topicIdx]?.[subIdx] || { done: false, targetDate: null, revisionDate: null };
}

function setSubtopicState(sectionKey, topicIdx, subIdx, update) {
  if (!state[sectionKey]) state[sectionKey] = {};
  if (!state[sectionKey][topicIdx]) state[sectionKey][topicIdx] = {};
  if (!state[sectionKey][topicIdx][subIdx]) state[sectionKey][topicIdx][subIdx] = { done: false, targetDate: null, revisionDate: null };
  Object.assign(state[sectionKey][topicIdx][subIdx], update);
  saveState();
}

// Spaced repetition: when marked done, default next revision = +3 days
function defaultRevisionDate() {
  const d = new Date();
  d.setDate(d.getDate() + 3);
  return d.toISOString().split('T')[0];
}

// Capture/restore expand/collapse UI state across full re-renders
function captureUiState() {
  const ui = { closedSections: [], openTopics: [] };
  document.querySelectorAll('.section[data-collapsed="true"]').forEach(el => {
    ui.closedSections.push(el.dataset.section);
  });
  document.querySelectorAll('.topic[data-collapsed="false"]').forEach(el => {
    ui.openTopics.push(`${el.dataset.section}:${el.dataset.topic}`);
  });
  return ui;
}
function restoreUiState(snap) {
  if (!snap) return;
  document.querySelectorAll('.section').forEach(el => {
    if (snap.closedSections.includes(el.dataset.section)) el.dataset.collapsed = 'true';
  });
  document.querySelectorAll('.topic').forEach(el => {
    if (snap.openTopics.includes(`${el.dataset.section}:${el.dataset.topic}`)) {
      el.dataset.collapsed = 'false';
    }
  });
}

// ============================================================================
// RENDERING
// ============================================================================
function calcSectionProgress(sectionKey) {
  const section = CURRICULUM[sectionKey];
  let done = 0, total = 0;
  section.topics.forEach((topic, ti) => {
    topic.subtopics.forEach((_, si) => {
      total++;
      if (getSubtopicState(sectionKey, ti, si).done) done++;
    });
  });
  return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
}

function calcTopicProgress(sectionKey, topicIdx) {
  const topic = CURRICULUM[sectionKey].topics[topicIdx];
  let done = 0;
  topic.subtopics.forEach((_, si) => {
    if (getSubtopicState(sectionKey, topicIdx, si).done) done++;
  });
  return { done, total: topic.subtopics.length, pct: topic.subtopics.length ? Math.round((done / topic.subtopics.length) * 100) : 0 };
}

function renderOverall() {
  let done = 0, total = 0;
  Object.keys(CURRICULUM).forEach(k => {
    const p = calcSectionProgress(k);
    done += p.done; total += p.total;
  });
  const pct = total ? Math.round((done / total) * 100) : 0;
  document.getElementById('overallPct').textContent = pct + '%';
  document.getElementById('overallText').textContent = `${done} of ${total} subtopics complete`;
  document.getElementById('overallBar').style.width = pct + '%';

  const sectionsEl = document.getElementById('overallSections');
  if (sectionsEl) {
    sectionsEl.innerHTML = Object.keys(CURRICULUM).map(key => {
      const s = CURRICULUM[key];
      const p = calcSectionProgress(key);
      return `
        <div class="overall-sec-item">
          <div class="overall-sec-label">
            <span>${s.icon}</span>
            <span class="overall-sec-name">${s.label}</span>
            <span class="overall-sec-pct">${p.pct}%</span>
          </div>
          <div class="progress-bar thin">
            <div class="progress-fill" style="width:${p.pct}%"></div>
          </div>
          <div class="overall-sec-count">${p.done} / ${p.total} subtopics</div>
        </div>
      `;
    }).join('');
  }
}

function dateStatus(dateStr, ignoreDoneCheck) {
  // ignoreDoneCheck: when called for target dates from a NOT-done subtopic,
  // pass false (default behavior). The previous gated-on-done logic only made
  // sense for revision dates; we now call this independently with the right flag.
  if (!dateStr) return '';
  const today = new Date(); today.setHours(0,0,0,0);
  const target = new Date(dateStr); target.setHours(0,0,0,0);
  const days = Math.round((target - today) / (1000*60*60*24));
  if (days < 0) return 'overdue';
  if (days <= 2) return 'due-soon';
  return '';
}

function renderAll() {
  const container = document.getElementById('sections');
  container.innerHTML = '';

  Object.keys(CURRICULUM).forEach(sectionKey => {
    const section = CURRICULUM[sectionKey];
    const prog = calcSectionProgress(sectionKey);

    const sectionEl = document.createElement('div');
    sectionEl.className = 'section';
    sectionEl.dataset.collapsed = 'false';
    sectionEl.dataset.section = sectionKey;
    sectionEl.style.setProperty('--section-color', `var(--${sectionKey})`);
    sectionEl.style.setProperty('--section-bg', `var(--${sectionKey}-bg)`);

    sectionEl.innerHTML = `
      <div class="section-header">
        <div class="section-icon">${section.icon}</div>
        <div class="section-title">
          <h2>${section.label}</h2>
          <div class="section-meta">
            <div class="section-progress-wrapper">
              <div class="progress-bar thin" style="flex:1">
                <div class="progress-fill" style="width:${prog.pct}%"></div>
              </div>
              <div class="section-progress-text">${prog.done}/${prog.total} · ${prog.pct}%</div>
            </div>
          </div>
        </div>
        <span class="chevron">▾</span>
      </div>
      <div class="section-body"></div>
    `;

    sectionEl.querySelector('.section-header').addEventListener('click', () => {
      sectionEl.dataset.collapsed = sectionEl.dataset.collapsed === 'true' ? 'false' : 'true';
    });

    const body = sectionEl.querySelector('.section-body');
    section.topics.forEach((topic, ti) => body.appendChild(renderTopic(sectionKey, ti)));
    container.appendChild(sectionEl);
  });

  renderOverall();
  renderCalendar();
}

function renderTopic(sectionKey, ti) {
  const topic = CURRICULUM[sectionKey].topics[ti];
  const prog = calcTopicProgress(sectionKey, ti);

  const el = document.createElement('div');
  el.className = 'topic';
  el.dataset.collapsed = 'true';
  el.dataset.section = sectionKey;
  el.dataset.topic = ti;
  el.innerHTML = `
    <div class="topic-header">
      <span class="topic-emoji">${topic.emoji}</span>
      <div class="topic-name">
        ${topic.name}
        <span class="priority-badge priority-${topic.priority}">${topic.priority}</span>
      </div>
      <div class="topic-progress">
        <div class="topic-mini-bar"><div style="width:${prog.pct}%"></div></div>
        <span class="pct">${prog.done}/${prog.total}</span>
      </div>
      <span class="chevron">▾</span>
    </div>
    <div class="topic-body"></div>
  `;
  el.querySelector('.topic-header').addEventListener('click', (e) => {
    // Don't toggle if clicking inside a subtopic or any input/button
    if (e.target.closest('.subtopic, input, button, a, label')) return;
    el.dataset.collapsed = el.dataset.collapsed === 'true' ? 'false' : 'true';
  });

  const body = el.querySelector('.topic-body');
  topic.subtopics.forEach((sub, si) => body.appendChild(renderSubtopic(sectionKey, ti, si)));
  return el;
}

function renderSubtopic(sectionKey, ti, si) {
  const sub = CURRICULUM[sectionKey].topics[ti].subtopics[si];
  const st = getSubtopicState(sectionKey, ti, si);

  const targetStatus = !st.done ? dateStatus(st.targetDate) : 'done-color';
  const reviseStatus = dateStatus(st.revisionDate);

  const el = document.createElement('div');
  el.className = 'subtopic' + (st.done ? ' done' : '');
  el.dataset.section = sectionKey;
  el.dataset.topic = ti;
  el.dataset.sub = si;
  el.innerHTML = `
    <div class="subtopic-head">
      <input type="checkbox" class="subtopic-checkbox" ${st.done ? 'checked' : ''} ${isViewingSnapshot ? 'disabled' : ''}>
      <div class="subtopic-name">${sub.name}</div>
      <div class="date-controls">
        <div class="date-pill target-pill ${targetStatus}">
          <label>🎯 Target:</label>
          <input type="date" class="target-date-input" value="${st.targetDate || ''}" ${isViewingSnapshot ? 'disabled' : ''}>
          <button class="btn-clear-date" title="Clear target date" style="${st.targetDate && !isViewingSnapshot ? '' : 'display:none'}">✕</button>
        </div>
        <div class="date-pill revise-pill ${reviseStatus}" style="${st.done ? '' : 'display:none'}">
          <label>🔁 Revise:</label>
          <input type="date" class="revise-date-input" value="${st.revisionDate || ''}" ${isViewingSnapshot ? 'disabled' : ''}>
        </div>
      </div>
      <button class="notes-btn${st.notes ? ' has-notes' : ''}" title="${st.notes ? 'Edit note' : 'Add note'}" ${isViewingSnapshot ? 'disabled' : ''}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        Notes
      </button>
    </div>
    <div class="problem-links">
      ${sub.problems.map(p => `<a class="problem-link" href="${p.url}" target="_blank" rel="noopener">${p.name} ↗</a>`).join('')}
    </div>
    <div class="notes-section${st.notes ? ' open' : ''}">
      <textarea class="notes-textarea" placeholder="Add your notes here…" ${isViewingSnapshot ? 'readonly' : ''}>${st.notes || ''}</textarea>
    </div>
  `;

  const checkbox = el.querySelector('.subtopic-checkbox');
  const targetInput = el.querySelector('.target-date-input');
  const reviseInput = el.querySelector('.revise-date-input');
  const clearBtn = el.querySelector('.btn-clear-date');
  const notesBtn = el.querySelector('.notes-btn');
  const notesSection = el.querySelector('.notes-section');
  const notesTxt = el.querySelector('.notes-textarea');

  checkbox.addEventListener('change', () => {
    const done = checkbox.checked;
    const cur = getSubtopicState(sectionKey, ti, si);
    const updates = { done };
    if (done && !cur.revisionDate) updates.revisionDate = defaultRevisionDate();
    setSubtopicState(sectionKey, ti, si, updates);
    // Targeted updates only — don't rebuild DOM
    updateSubtopicVisuals(sectionKey, ti, si);
    updateTopicProgress(sectionKey, ti);
    updateSectionProgress(sectionKey);
    renderOverall();
  });

  targetInput.addEventListener('change', () => {
    setSubtopicState(sectionKey, ti, si, { targetDate: targetInput.value || null });
    updateSubtopicVisuals(sectionKey, ti, si);
  });

  reviseInput.addEventListener('change', () => {
    setSubtopicState(sectionKey, ti, si, { revisionDate: reviseInput.value || null });
    updateSubtopicVisuals(sectionKey, ti, si);
  });

  clearBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    setSubtopicState(sectionKey, ti, si, { targetDate: null });
    updateSubtopicVisuals(sectionKey, ti, si);
  });

  notesBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    notesSection.classList.toggle('open');
    if (notesSection.classList.contains('open')) notesTxt.focus();
  });

  let notesTimer;
  notesTxt.addEventListener('input', () => {
    clearTimeout(notesTimer);
    notesTimer = setTimeout(() => {
      const val = notesTxt.value.trim() || null;
      setSubtopicState(sectionKey, ti, si, { notes: val });
      notesBtn.classList.toggle('has-notes', !!val);
      notesBtn.title = val ? 'Edit note' : 'Add note';
    }, 400);
  });

  return el;
}

// ============================================================================
// TARGETED IN-PLACE UPDATES — keeps expand/collapse state intact
// ============================================================================
function updateSubtopicVisuals(sectionKey, ti, si) {
  const el = document.querySelector(
    `.subtopic[data-section="${sectionKey}"][data-topic="${ti}"][data-sub="${si}"]`
  );
  if (!el) return;
  const st = getSubtopicState(sectionKey, ti, si);

  // Done styling
  el.classList.toggle('done', !!st.done);
  el.querySelector('.subtopic-checkbox').checked = !!st.done;

  // Target pill: color class + clear button visibility + input value
  const targetPill = el.querySelector('.target-pill');
  const targetStatus = !st.done ? dateStatus(st.targetDate) : 'done-color';
  targetPill.className = 'date-pill target-pill ' + targetStatus;
  const targetInput = el.querySelector('.target-date-input');
  if (targetInput.value !== (st.targetDate || '')) targetInput.value = st.targetDate || '';
  const clearBtn = el.querySelector('.btn-clear-date');
  clearBtn.style.display = (st.targetDate && !isViewingSnapshot) ? '' : 'none';

  // Revise pill: visibility + color + input value
  const revisePill = el.querySelector('.revise-pill');
  revisePill.style.display = st.done ? '' : 'none';
  revisePill.className = 'date-pill revise-pill ' + dateStatus(st.revisionDate);
  const reviseInput = el.querySelector('.revise-date-input');
  if (reviseInput.value !== (st.revisionDate || '')) reviseInput.value = st.revisionDate || '';

  // Notes button indicator
  const notesBtn = el.querySelector('.notes-btn');
  if (notesBtn) {
    notesBtn.classList.toggle('has-notes', !!st.notes);
    notesBtn.title = st.notes ? 'Edit note' : 'Add note';
  }

  renderCalendar();
}

function updateTopicProgress(sectionKey, ti) {
  const prog = calcTopicProgress(sectionKey, ti);
  const el = document.querySelector(`.topic[data-section="${sectionKey}"][data-topic="${ti}"]`);
  if (!el) return;
  const bar = el.querySelector('.topic-mini-bar > div');
  const pct = el.querySelector('.topic-progress .pct');
  if (bar) bar.style.width = prog.pct + '%';
  if (pct) pct.textContent = `${prog.done}/${prog.total}`;
}

function updateSectionProgress(sectionKey) {
  const prog = calcSectionProgress(sectionKey);
  const el = document.querySelector(`.section[data-section="${sectionKey}"]`);
  if (!el) return;
  const fill = el.querySelector('.progress-fill');
  const text = el.querySelector('.section-progress-text');
  if (fill) fill.style.width = prog.pct + '%';
  if (text) text.textContent = `${prog.done}/${prog.total} · ${prog.pct}%`;
}

// ============================================================================
// CALENDAR
// ============================================================================
function getAllDeadlines() {
  const map = {};
  Object.keys(CURRICULUM).forEach(sectionKey => {
    CURRICULUM[sectionKey].topics.forEach((topic, ti) => {
      topic.subtopics.forEach((sub, si) => {
        const st = getSubtopicState(sectionKey, ti, si);
        if (st.targetDate) {
          if (!map[st.targetDate]) map[st.targetDate] = [];
          map[st.targetDate].push({ sectionKey, name: sub.name, done: st.done });
        }
      });
    });
  });
  return map;
}

function renderCalendar() {
  const grid = document.getElementById('calGrid');
  if (!grid) return;

  const deadlines = getAllDeadlines();
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const firstDay = new Date(calYear, calMonth, 1);
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const startDow = firstDay.getDay();

  const MONTHS = ['January','February','March','April','May','June',
                  'July','August','September','October','November','December'];
  const SHORT_DAYS = ['Su','Mo','Tu','We','Th','Fr','Sa'];

  document.getElementById('calMonthYear').textContent = `${MONTHS[calMonth]} ${calYear}`;

  grid.innerHTML = '';

  SHORT_DAYS.forEach(d => {
    const h = document.createElement('div');
    h.className = 'cal-day-hdr';
    h.textContent = d;
    grid.appendChild(h);
  });

  for (let i = 0; i < startDow; i++) {
    const blank = document.createElement('div');
    blank.className = 'cal-day';
    grid.appendChild(blank);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${calYear}-${String(calMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const cellDate = new Date(calYear, calMonth, d);
    const items = deadlines[dateStr] || [];

    const cell = document.createElement('div');
    cell.className = 'cal-day' +
      (cellDate.getTime() === today.getTime() ? ' today' : '') +
      (cellDate < today ? ' past' : '') +
      (items.length ? ' has-items' : '');

    const num = document.createElement('span');
    num.className = 'cal-date-num';
    num.textContent = d;
    cell.appendChild(num);

    if (items.length) {
      const dotsEl = document.createElement('div');
      dotsEl.className = 'cal-dots';
      const visible = items.slice(0, 4);
      visible.forEach(item => {
        const dot = document.createElement('span');
        dot.className = `cal-dot cal-dot-${item.sectionKey}${item.done ? ' done' : ''}`;
        dotsEl.appendChild(dot);
      });
      if (items.length > 4) {
        const more = document.createElement('span');
        more.className = 'cal-more-dot';
        more.textContent = `+${items.length - 4}`;
        dotsEl.appendChild(more);
      }
      cell.appendChild(dotsEl);

      const tip = document.createElement('div');
      tip.className = 'cal-tooltip';
      const fmt = cellDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
      tip.innerHTML = `<div class="cal-tt-date">${fmt}</div>` +
        items.map(item =>
          `<div class="cal-tt-item${item.done ? ' done' : ''}">` +
          `<span class="cal-tt-dot cal-dot-${item.sectionKey}"></span>${item.name}</div>`
        ).join('');
      cell.appendChild(tip);
    }

    grid.appendChild(cell);
  }
}

document.getElementById('calPrev').addEventListener('click', () => {
  calMonth--;
  if (calMonth < 0) { calMonth = 11; calYear--; }
  renderCalendar();
});
document.getElementById('calNext').addEventListener('click', () => {
  calMonth++;
  if (calMonth > 11) { calMonth = 0; calYear++; }
  renderCalendar();
});

// ============================================================================
// SHARE FEATURE
// ============================================================================
function generateShareUrl() {
  const encoded = btoa(encodeURIComponent(JSON.stringify(state)));
  const baseUrl = window.location.href.split('#')[0];
  return baseUrl + '#share=' + encoded;
}

document.getElementById('shareBtn').addEventListener('click', () => {
  const url = generateShareUrl();
  document.getElementById('shareUrl').value = url;
  document.getElementById('shareModal').classList.add('open');
});
document.getElementById('closeShareModal').addEventListener('click', () => {
  document.getElementById('shareModal').classList.remove('open');
});
document.getElementById('copyShareUrl').addEventListener('click', async () => {
  const url = document.getElementById('shareUrl').value;
  try {
    await navigator.clipboard.writeText(url);
    showToast('Share URL copied to clipboard ✨');
  } catch (e) {
    document.getElementById('shareUrl').select();
    showToast('Select-all done — press Ctrl+C to copy');
  }
});
document.getElementById('shareModal').addEventListener('click', (e) => {
  if (e.target.id === 'shareModal') document.getElementById('shareModal').classList.remove('open');
});

// ============================================================================
// RESET
// ============================================================================
document.getElementById('resetBtn').addEventListener('click', () => {
  if (confirm('Reset ALL progress? This cannot be undone.')) {
    state = {};
    saveState();
    renderAll();
    showToast('Progress reset.');
  }
});

// ============================================================================
// THEME
// ============================================================================
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.getElementById('themeBtn').textContent = theme === 'dark' ? '☀️' : '🌙';
  try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
}
document.getElementById('themeBtn').addEventListener('click', () => {
  const cur = document.documentElement.dataset.theme || 'light';
  applyTheme(cur === 'dark' ? 'light' : 'dark');
});

function initTheme() {
  let theme = 'light';
  try { theme = localStorage.getItem(THEME_KEY) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); } catch (e) {}
  applyTheme(theme);
}

// ============================================================================
// TOAST
// ============================================================================
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => t.classList.remove('show'), 2600);
}

// ============================================================================
// INIT (async — load cloud, optional viewer mode polling)
// ============================================================================
async function init() {
  initTheme();

  // Viewer mode (?view=1) — read-only, polls cloud
  const params = new URLSearchParams(location.search);
  if (params.get('view') === '1') {
    isViewerMode = true;
    document.getElementById('viewingBadge').style.display = '';
    document.getElementById('viewingBadge').textContent = 'Live View';
    document.getElementById('resetBtn').style.display = 'none';
    showToast('Live view — auto-refreshes every 15s');
  }

  // Hash share takes precedence (frozen snapshot, no cloud)
  if (loadFromHashShare()) {
    renderAll();
    return;
  }

  // Fast path: render from localStorage first to avoid blank flash
  loadStateFromLocal();
  renderAll();

  // Then refresh from cloud
  const cloudOk = await loadStateFromCloud();
  if (cloudOk) {
    const ui = captureUiState();
    renderAll();
    restoreUiState(ui);
  }

  // Refresh on tab focus (only if no recent local edit)
  document.addEventListener('visibilitychange', async () => {
    if (document.hidden) return;
    if (isViewingSnapshot) return;
    if (Date.now() - lastLocalEdit < 3000) return; // skip if we just edited
    const before = JSON.stringify(state);
    await loadStateFromCloud();
    if (JSON.stringify(state) !== before) {
      const ui = captureUiState();
      renderAll();
      restoreUiState(ui);
    }
  });

  // Live polling for viewer mode
  if (isViewerMode) {
    setInterval(async () => {
      const before = JSON.stringify(state);
      await loadStateFromCloud();
      if (JSON.stringify(state) !== before) {
        const ui = captureUiState();
        renderAll();
        restoreUiState(ui);
      }
    }, 15000);
  }
}

init();
