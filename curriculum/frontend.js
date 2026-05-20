const FRONTEND_SECTION = {
  icon: "🎨",
  label: "Frontend",
  color: "pink",
  topics: [
    {
      name: "HTML & Semantic Markup",
      emoji: "📄",
      priority: "medium",
      subtopics: [
        {
          name: "Semantic Elements & Document Structure",
          problems: [
            { name: "MDN — Semantic HTML", url: "https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html" },
            { name: "web.dev — Document structure", url: "https://web.dev/learn/html/document-structure/" },
            { name: "Frontend Masters — HTML Forms", url: "https://frontendmasters.com/courses/web-forms/" },
          ],
        },
        {
          name: "Forms & Input Validation",
          problems: [
            { name: "MDN — HTML Forms", url: "https://developer.mozilla.org/en-US/docs/Learn/Forms" },
            { name: "Constraint Validation API", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation" },
          ],
        },
      ],
    },
    {
      name: "CSS Fundamentals",
      emoji: "🎨",
      priority: "high",
      subtopics: [
        {
          name: "Box Model, Positioning, Specificity",
          problems: [
            { name: "MDN — Box Model", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model" },
            { name: "CSS Specificity (CSS-Tricks)", url: "https://css-tricks.com/specifics-on-css-specificity/" },
            { name: "Stacking Context", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/The_stacking_context" },
          ],
        },
        {
          name: "Flexbox",
          problems: [
            { name: "Flexbox Froggy (game)", url: "https://flexboxfroggy.com/" },
            { name: "CSS-Tricks — Flexbox Guide", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
          ],
        },
        {
          name: "Grid",
          problems: [
            { name: "Grid Garden (game)", url: "https://cssgridgarden.com/" },
            { name: "CSS-Tricks — Grid Guide", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" },
          ],
        },
        {
          name: "Responsive Design & Media Queries",
          problems: [
            { name: "Responsive Web Design (web.dev)", url: "https://web.dev/learn/design/" },
            { name: "Container Queries", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries" },
          ],
        },
      ],
    },
    {
      name: "CSS Advanced",
      emoji: "✨",
      priority: "medium",
      subtopics: [
        {
          name: "Animations & Transitions",
          problems: [
            { name: "MDN — CSS Animations", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations" },
            { name: "Animation performance (web.dev)", url: "https://web.dev/articles/animations-guide" },
          ],
        },
        {
          name: "CSS-in-JS, Modules, Tailwind",
          problems: [
            { name: "Why Tailwind?", url: "https://tailwindcss.com/docs/utility-first" },
            { name: "Styled Components vs Emotion vs CSS Modules", url: "https://css-tricks.com/a-thorough-analysis-of-css-in-js/" },
          ],
        },
      ],
    },
    {
      name: "JavaScript Core",
      emoji: "🟨",
      priority: "high",
      subtopics: [
        {
          name: "Closures, Scope, Hoisting",
          problems: [
            { name: "JavaScript.info — Closures", url: "https://javascript.info/closure" },
            { name: "Var/Let/Const Hoisting", url: "https://developer.mozilla.org/en-US/docs/Glossary/Hoisting" },
            { name: "Common JS Interview Q — Closures (GfG)", url: "https://www.geeksforgeeks.org/closure-in-javascript/" },
          ],
        },
        {
          name: "Promises, async/await, Event Loop",
          problems: [
            { name: "JavaScript Visualizer (event loop)", url: "https://www.jsv9000.app/" },
            { name: "JavaScript.info — Promise chaining", url: "https://javascript.info/promise-chaining" },
            { name: "Tasks, microtasks, queues", url: "https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/" },
          ],
        },
        {
          name: "this binding, call/apply/bind",
          problems: [
            { name: "MDN — this", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this" },
            { name: "Function.prototype.bind", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind" },
          ],
        },
        {
          name: "Prototypes & Inheritance",
          problems: [
            { name: "JavaScript.info — Prototypal inheritance", url: "https://javascript.info/prototype-inheritance" },
            { name: "MDN — Object prototypes", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes" },
          ],
        },
      ],
    },
    {
      name: "JavaScript Advanced",
      emoji: "⚡",
      priority: "medium",
      subtopics: [
        {
          name: "Iterators, Generators, Symbols",
          problems: [
            { name: "JavaScript.info — Generators", url: "https://javascript.info/generators" },
            { name: "MDN — Iteration protocols", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols" },
          ],
        },
        {
          name: "Modules (ESM, CJS)",
          problems: [
            { name: "ESM vs CJS — Node docs", url: "https://nodejs.org/api/esm.html" },
            { name: "JavaScript.info — Modules", url: "https://javascript.info/modules-intro" },
          ],
        },
        {
          name: "Memory Management & GC",
          problems: [
            { name: "MDN — Memory management", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management" },
            { name: "JS Memory leaks (Auth0)", url: "https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/" },
          ],
        },
      ],
    },
    {
      name: "TypeScript",
      emoji: "🔷",
      priority: "high",
      subtopics: [
        {
          name: "Types, Interfaces, Type Aliases",
          problems: [
            { name: "TS Handbook — Everyday Types", url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html" },
            { name: "type vs interface", url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces" },
          ],
        },
        {
          name: "Generics & Utility Types",
          problems: [
            { name: "TS — Generics", url: "https://www.typescriptlang.org/docs/handbook/2/generics.html" },
            { name: "Utility Types (Partial, Pick, Omit)", url: "https://www.typescriptlang.org/docs/handbook/utility-types.html" },
            { name: "Type Challenges (GitHub)", url: "https://github.com/type-challenges/type-challenges" },
          ],
        },
        {
          name: "Type Narrowing & Discriminated Unions",
          problems: [
            { name: "TS — Narrowing", url: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html" },
          ],
        },
      ],
    },
    {
      name: "React Core",
      emoji: "⚛️",
      priority: "high",
      subtopics: [
        {
          name: "Components, Props, State",
          problems: [
            { name: "React Docs — Learn React", url: "https://react.dev/learn" },
            { name: "Thinking in React", url: "https://react.dev/learn/thinking-in-react" },
          ],
        },
        {
          name: "useState, useEffect, Lifecycle",
          problems: [
            { name: "React Docs — useEffect", url: "https://react.dev/reference/react/useEffect" },
            { name: "You Might Not Need an Effect", url: "https://react.dev/learn/you-might-not-need-an-effect" },
          ],
        },
        {
          name: "Lists, Keys, Reconciliation",
          problems: [
            { name: "React Docs — Rendering Lists", url: "https://react.dev/learn/rendering-lists" },
            { name: "Why keys matter (Kent C. Dodds)", url: "https://kentcdodds.com/blog/understanding-reacts-key-prop" },
          ],
        },
      ],
    },
    {
      name: "React Hooks (Advanced)",
      emoji: "🪝",
      priority: "high",
      subtopics: [
        {
          name: "useMemo, useCallback, React.memo",
          problems: [
            { name: "useMemo & useCallback (Kent C. Dodds)", url: "https://kentcdodds.com/blog/usememo-and-usecallback" },
            { name: "React Docs — useMemo", url: "https://react.dev/reference/react/useMemo" },
          ],
        },
        {
          name: "useReducer & useContext",
          problems: [
            { name: "useReducer", url: "https://react.dev/reference/react/useReducer" },
            { name: "useContext", url: "https://react.dev/reference/react/useContext" },
            { name: "How to use React Context effectively", url: "https://kentcdodds.com/blog/how-to-use-react-context-effectively" },
          ],
        },
        {
          name: "useRef, Forward Refs, Portals",
          problems: [
            { name: "useRef", url: "https://react.dev/reference/react/useRef" },
            { name: "forwardRef", url: "https://react.dev/reference/react/forwardRef" },
            { name: "createPortal", url: "https://react.dev/reference/react-dom/createPortal" },
          ],
        },
        {
          name: "Custom Hooks",
          problems: [
            { name: "Reusing Logic with Custom Hooks", url: "https://react.dev/learn/reusing-logic-with-custom-hooks" },
            { name: "useHooks.com — examples", url: "https://usehooks.com/" },
          ],
        },
      ],
    },
    {
      name: "React Advanced",
      emoji: "🚀",
      priority: "medium",
      subtopics: [
        {
          name: "Reconciliation & Virtual DOM",
          problems: [
            { name: "React Internals (Acdlite)", url: "https://github.com/acdlite/react-fiber-architecture" },
            { name: "Render and Commit", url: "https://react.dev/learn/render-and-commit" },
          ],
        },
        {
          name: "Suspense, Concurrent Rendering, Server Components",
          problems: [
            { name: "React 19 features", url: "https://react.dev/blog/2024/12/05/react-19" },
            { name: "Server Components (Next.js)", url: "https://nextjs.org/docs/app/building-your-application/rendering/server-components" },
          ],
        },
        {
          name: "Error Boundaries & Suspense Boundaries",
          problems: [
            { name: "Error Boundaries", url: "https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary" },
          ],
        },
      ],
    },
    {
      name: "State Management",
      emoji: "🗂️",
      priority: "high",
      subtopics: [
        {
          name: "Context API & Reducers",
          problems: [
            { name: "Scaling up with Reducer & Context", url: "https://react.dev/learn/scaling-up-with-reducer-and-context" },
          ],
        },
        {
          name: "Redux, Zustand, Jotai",
          problems: [
            { name: "Redux Toolkit", url: "https://redux-toolkit.js.org/tutorials/quick-start" },
            { name: "Zustand", url: "https://github.com/pmndrs/zustand" },
            { name: "Jotai", url: "https://jotai.org/docs/introduction" },
          ],
        },
        {
          name: "Server State — React Query / SWR",
          problems: [
            { name: "TanStack Query (React Query)", url: "https://tanstack.com/query/latest/docs/framework/react/overview" },
            { name: "SWR", url: "https://swr.vercel.app/" },
          ],
        },
      ],
    },
    {
      name: "Performance & Optimization",
      emoji: "🏎️",
      priority: "medium",
      subtopics: [
        {
          name: "Code Splitting & Lazy Loading",
          problems: [
            { name: "React.lazy & Suspense", url: "https://react.dev/reference/react/lazy" },
            { name: "Code splitting (web.dev)", url: "https://web.dev/articles/reduce-javascript-payloads-with-code-splitting" },
          ],
        },
        {
          name: "Web Vitals (LCP, INP, CLS)",
          problems: [
            { name: "Core Web Vitals", url: "https://web.dev/articles/vitals" },
            { name: "Optimize LCP", url: "https://web.dev/articles/optimize-lcp" },
          ],
        },
        {
          name: "Bundle Analysis",
          problems: [
            { name: "webpack-bundle-analyzer", url: "https://github.com/webpack-contrib/webpack-bundle-analyzer" },
            { name: "Tree Shaking", url: "https://webpack.js.org/guides/tree-shaking/" },
          ],
        },
      ],
    },
    {
      name: "Build Tools",
      emoji: "🔧",
      priority: "low",
      subtopics: [
        {
          name: "Vite, Webpack, Turbopack",
          problems: [
            { name: "Vite — Why?", url: "https://vitejs.dev/guide/why" },
            { name: "Webpack Concepts", url: "https://webpack.js.org/concepts/" },
          ],
        },
        {
          name: "ESLint, Prettier, Husky",
          problems: [
            { name: "ESLint Configuration", url: "https://eslint.org/docs/latest/use/configure/" },
          ],
        },
      ],
    },
    {
      name: "Testing",
      emoji: "🧪",
      priority: "medium",
      subtopics: [
        {
          name: "Unit Tests — Jest / Vitest",
          problems: [
            { name: "Vitest Docs", url: "https://vitest.dev/guide/" },
            { name: "Jest Docs", url: "https://jestjs.io/docs/getting-started" },
          ],
        },
        {
          name: "Component Tests — React Testing Library",
          problems: [
            { name: "Testing Library — Common Mistakes", url: "https://kentcdodds.com/blog/common-mistakes-with-react-testing-library" },
            { name: "Queries cheatsheet", url: "https://testing-library.com/docs/queries/about" },
          ],
        },
        {
          name: "E2E — Cypress / Playwright",
          problems: [
            { name: "Playwright Docs", url: "https://playwright.dev/docs/intro" },
            { name: "Cypress vs Playwright", url: "https://www.browserstack.com/guide/cypress-vs-playwright" },
          ],
        },
      ],
    },
    {
      name: "Accessibility (a11y)",
      emoji: "♿",
      priority: "medium",
      subtopics: [
        {
          name: "ARIA, Roles, Keyboard Navigation",
          problems: [
            { name: "MDN — ARIA", url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA" },
            { name: "WCAG Quick Reference", url: "https://www.w3.org/WAI/WCAG21/quickref/" },
            { name: "Practical accessibility (web.dev)", url: "https://web.dev/learn/accessibility/" },
          ],
        },
      ],
    },
    {
      name: "Browser & Web APIs",
      emoji: "🌐",
      priority: "low",
      subtopics: [
        {
          name: "Storage APIs (localStorage, IndexedDB)",
          problems: [
            { name: "MDN — Web Storage", url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API" },
            { name: "IndexedDB", url: "https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API" },
          ],
        },
        {
          name: "Service Workers & PWAs",
          problems: [
            { name: "Service Worker Cookbook", url: "https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API" },
            { name: "PWA on web.dev", url: "https://web.dev/explore/progressive-web-apps" },
          ],
        },
        {
          name: "Fetch, WebSockets, SSE",
          problems: [
            { name: "MDN — Fetch", url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" },
            { name: "MDN — WebSockets", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" },
            { name: "Server-Sent Events", url: "https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events" },
          ],
        },
      ],
    },
  ],
};
