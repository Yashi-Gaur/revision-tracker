# Yashi's SWE Revision Tracker

A personal study tracker for software engineering interview prep — covering DSA, Frontend, Backend, Low-Level Design, and System Design. Built as a single-page app with no framework dependencies.

## Features

- **Progress tracking** — check off subtopics as you complete them; progress bars update live across subtopics, topics, sections, and the overall view
- **Deadline management** — set a target date per subtopic; overdue and due-soon dates are highlighted automatically
- **Spaced repetition** — marking a subtopic done auto-sets a revision date 3 days out; revision dates are tracked separately
- **Notes** — each subtopic has an expandable notes panel that saves as you type
- **Calendar** — a monthly calendar sits beside the overall progress card, showing all your deadlines as colour-coded dots with a hover tooltip. Navigate months with ‹ / ›
- **Cloud sync** — state is persisted to JSONBin and falls back to `localStorage` when offline; syncs on tab focus
- **Share / live view** — the Share button generates a read-only snapshot URL (`#share=…`). Adding `?view=1` opens a live-polling read-only view that refreshes every 15 s
- **Dark mode** — toggle with the 🌙 button; preference is saved to `localStorage`

## Curriculum

| Section | Topics |
|---|---|
| 🧮 DSA | DP, Trees, Graphs, Union Find, Heaps, Binary Search, Linked Lists, Stacks, Queues, Sliding Window, Two Pointers, Arrays & Strings, Greedy, Backtracking, Bit Manipulation, Math |
| 🎨 Frontend | HTML, CSS (Fundamentals + Advanced), JavaScript (Core + Advanced), TypeScript, React (Core + Hooks + Advanced), State Management, Performance, Build Tools, Testing, a11y, Browser APIs |
| ⚙️ Backend | HTTP & REST, API Design, FastAPI, Node/Express/Nest, PostgreSQL, NoSQL, ORMs, Auth, Caching, Message Queues, Concurrency, Testing, DevOps, Observability, Security |
| 🧱 Low-Level Design | OOP, SOLID, Creational / Structural / Behavioral patterns, UML, Classic LLD problems (easy → hard) |
| 🏗️ System Design | Networking, Scalability, Reliability, Consistency, Caching, DB Scaling, Async Communication, Rate Limiting, Microservices, Classic design problems |

## File Structure

```
revision-tracker/
├── index.html            # HTML shell — layout and DOM skeleton
├── styles.css            # All styles (themes, components, calendar, notes)
├── app.js                # State management, rendering, event handlers, cloud sync
└── curriculum/
    ├── index.js          # Assembles all sections into the CURRICULUM object
    ├── dsa.js            # DSA section data
    ├── frontend.js       # Frontend section data
    ├── backend.js        # Backend section data
    ├── lld.js            # Low-Level Design section data
    └── systemDesign.js   # System Design section data
```

## Running Locally

No build step needed. Open `index.html` directly in a browser, or serve with any static file server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Cloud Sync Setup

State is synced to [JSONBin](https://jsonbin.io). The bin ID and access key are defined at the top of `app.js`:

```js
const JSONBIN_BIN_ID    = '...';
const JSONBIN_ACCESS_KEY = '...';
```

To use your own bin: create a free JSONBin account, create a bin with `{"state":{}}` as initial content, and replace both values.

## Customising the Curriculum

Each section lives in its own file inside `curriculum/`. To add a subtopic, open the relevant file and append to the `subtopics` array of any topic:

```js
{
  name: "My New Subtopic",
  problems: [
    { name: "Resource name", url: "https://..." },
  ],
}
```

To add a whole new section:

1. Create `curriculum/mySection.js` following the pattern of any existing file:
   ```js
   const MY_SECTION = {
     icon: "🚀",
     label: "My Section",
     color: "violet",
     topics: [ ... ],
   };
   ```
2. Register it in `curriculum/index.js`:
   ```js
   const CURRICULUM = {
     ...
     mySection: MY_SECTION,
   };
   ```
3. Add a `<script src="curriculum/mySection.js">` tag in `index.html` (before `curriculum/index.js`).
4. Add a matching CSS colour token pair in `styles.css`:
   ```css
   --mySection: #7c3aed;
   --mySection-bg: #ede9fe;
   ```
