const LLD_SECTION = {
  icon: "🧱",
  label: "Low-Level Design",
  color: "teal",
  topics: [
    {
      name: "OOP Fundamentals",
      emoji: "🧬",
      priority: "high",
      subtopics: [
        {
          name: "4 Pillars — Encapsulation, Abstraction, Inheritance, Polymorphism",
          problems: [
            { name: "OOP Concepts (GfG)", url: "https://www.geeksforgeeks.org/introduction-of-object-oriented-programming/" },
            { name: "Refactoring.Guru — OOP", url: "https://refactoring.guru/refactoring/what-is-refactoring" },
            { name: "Composition over Inheritance", url: "https://en.wikipedia.org/wiki/Composition_over_inheritance" },
          ],
        },
        {
          name: "Class Relationships — Association, Aggregation, Composition",
          problems: [
            { name: "UML Class Relationships (GfG)", url: "https://www.geeksforgeeks.org/association-composition-aggregation-java/" },
            { name: "Aggregation vs Composition", url: "https://stackoverflow.com/questions/885937/what-is-the-difference-between-association-aggregation-and-composition" },
          ],
        },
      ],
    },
    {
      name: "SOLID Principles",
      emoji: "🪨",
      priority: "high",
      subtopics: [
        {
          name: "Single Responsibility (SRP) & Open-Closed (OCP)",
          problems: [
            { name: "SOLID — Single Responsibility", url: "https://www.baeldung.com/solid-principles" },
            { name: "Open-Closed Principle (Refactoring.Guru)", url: "https://refactoring.guru/design-patterns/strategy" },
            { name: "SOLID Explained (FreeCodeCamp)", url: "https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/" },
          ],
        },
        {
          name: "Liskov, Interface Segregation, Dependency Inversion",
          problems: [
            { name: "Liskov Substitution (GfG)", url: "https://www.geeksforgeeks.org/liskov-substitution-principle/" },
            { name: "Interface Segregation", url: "https://www.geeksforgeeks.org/interface-segregation-principle/" },
            { name: "Dependency Inversion", url: "https://www.geeksforgeeks.org/dependecy-inversion-principle-solid/" },
          ],
        },
      ],
    },
    {
      name: "Creational Design Patterns",
      emoji: "🏭",
      priority: "high",
      subtopics: [
        {
          name: "Singleton, Factory, Abstract Factory",
          problems: [
            { name: "Singleton (Refactoring.Guru)", url: "https://refactoring.guru/design-patterns/singleton" },
            { name: "Factory Method (Refactoring.Guru)", url: "https://refactoring.guru/design-patterns/factory-method" },
            { name: "Abstract Factory (Refactoring.Guru)", url: "https://refactoring.guru/design-patterns/abstract-factory" },
          ],
        },
        {
          name: "Builder & Prototype",
          problems: [
            { name: "Builder (Refactoring.Guru)", url: "https://refactoring.guru/design-patterns/builder" },
            { name: "Prototype (Refactoring.Guru)", url: "https://refactoring.guru/design-patterns/prototype" },
            { name: "Builder vs Factory", url: "https://stackoverflow.com/questions/757743/what-is-the-difference-between-builder-design-pattern-and-factory-design-patte" },
          ],
        },
      ],
    },
    {
      name: "Structural Design Patterns",
      emoji: "🏛️",
      priority: "high",
      subtopics: [
        {
          name: "Adapter, Decorator, Proxy",
          problems: [
            { name: "Adapter (Refactoring.Guru)", url: "https://refactoring.guru/design-patterns/adapter" },
            { name: "Decorator (Refactoring.Guru)", url: "https://refactoring.guru/design-patterns/decorator" },
            { name: "Proxy (Refactoring.Guru)", url: "https://refactoring.guru/design-patterns/proxy" },
          ],
        },
        {
          name: "Facade, Composite, Bridge, Flyweight",
          problems: [
            { name: "Facade (Refactoring.Guru)", url: "https://refactoring.guru/design-patterns/facade" },
            { name: "Composite (Refactoring.Guru)", url: "https://refactoring.guru/design-patterns/composite" },
            { name: "Bridge (Refactoring.Guru)", url: "https://refactoring.guru/design-patterns/bridge" },
            { name: "Flyweight (Refactoring.Guru)", url: "https://refactoring.guru/design-patterns/flyweight" },
          ],
        },
      ],
    },
    {
      name: "Behavioral Design Patterns",
      emoji: "🎭",
      priority: "high",
      subtopics: [
        {
          name: "Observer, Strategy, Command",
          problems: [
            { name: "Observer (Refactoring.Guru)", url: "https://refactoring.guru/design-patterns/observer" },
            { name: "Strategy (Refactoring.Guru)", url: "https://refactoring.guru/design-patterns/strategy" },
            { name: "Command (Refactoring.Guru)", url: "https://refactoring.guru/design-patterns/command" },
          ],
        },
        {
          name: "State, Template Method, Chain of Responsibility",
          problems: [
            { name: "State (Refactoring.Guru)", url: "https://refactoring.guru/design-patterns/state" },
            { name: "Template Method", url: "https://refactoring.guru/design-patterns/template-method" },
            { name: "Chain of Responsibility", url: "https://refactoring.guru/design-patterns/chain-of-responsibility" },
          ],
        },
        {
          name: "Iterator, Mediator, Memento, Visitor",
          problems: [
            { name: "Iterator (Refactoring.Guru)", url: "https://refactoring.guru/design-patterns/iterator" },
            { name: "Mediator (Refactoring.Guru)", url: "https://refactoring.guru/design-patterns/mediator" },
            { name: "Memento (Refactoring.Guru)", url: "https://refactoring.guru/design-patterns/memento" },
            { name: "Visitor (Refactoring.Guru)", url: "https://refactoring.guru/design-patterns/visitor" },
          ],
        },
      ],
    },
    {
      name: "UML & Class Diagrams",
      emoji: "📐",
      priority: "medium",
      subtopics: [
        {
          name: "Class, Sequence & State Diagrams",
          problems: [
            { name: "UML Class Diagram Tutorial", url: "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-class-diagram-tutorial/" },
            { name: "Sequence Diagrams (GfG)", url: "https://www.geeksforgeeks.org/unified-modeling-language-uml-sequence-diagrams/" },
            { name: "PlantUML Quickstart", url: "https://plantuml.com/class-diagram" },
          ],
        },
      ],
    },
    {
      name: "Classic LLD Problems — Easy",
      emoji: "🎮",
      priority: "high",
      subtopics: [
        {
          name: "Parking Lot",
          problems: [
            { name: "Parking Lot LLD (GitHub)", url: "https://github.com/tssovi/grokking-the-object-oriented-design-interview/blob/master/object-oriented-design-case-studies/design-a-parking-lot.md" },
            { name: "Parking Lot LLD (LeetCode discuss)", url: "https://leetcode.com/discuss/general-discussion/1063454/system-design-design-a-parking-lot" },
            { name: "Walkthrough video (YouTube)", url: "https://www.youtube.com/results?search_query=parking+lot+low+level+design" },
          ],
        },
        {
          name: "Vending Machine",
          problems: [
            { name: "Vending Machine LLD (GitHub)", url: "https://github.com/tssovi/grokking-the-object-oriented-design-interview/blob/master/object-oriented-design-case-studies/design-a-vending-machine.md" },
            { name: "Vending Machine State Pattern", url: "https://www.geeksforgeeks.org/design-vending-machine/" },
          ],
        },
        {
          name: "Tic-Tac-Toe & Snake-Ladder",
          problems: [
            { name: "Tic-Tac-Toe LLD (GfG)", url: "https://www.geeksforgeeks.org/design-tic-tac-toe-game/" },
            { name: "Snake & Ladder LLD", url: "https://www.geeksforgeeks.org/snakes-ladders-problem-2/" },
            { name: "LeetCode 348 — Tic Tac Toe", url: "https://leetcode.com/problems/design-tic-tac-toe/" },
          ],
        },
        {
          name: "LRU / LFU Cache (as a class design)",
          problems: [
            { name: "LRU Cache", url: "https://leetcode.com/problems/lru-cache/" },
            { name: "LFU Cache", url: "https://leetcode.com/problems/lfu-cache/" },
            { name: "Design HashMap", url: "https://leetcode.com/problems/design-hashmap/" },
          ],
        },
      ],
    },
    {
      name: "Classic LLD Problems — Medium",
      emoji: "🎲",
      priority: "high",
      subtopics: [
        {
          name: "Library Management System",
          problems: [
            { name: "Library LLD (GitHub)", url: "https://github.com/tssovi/grokking-the-object-oriented-design-interview/blob/master/object-oriented-design-case-studies/design-a-library-management-system.md" },
            { name: "Library Management (GfG)", url: "https://www.geeksforgeeks.org/design-library-management-system/" },
          ],
        },
        {
          name: "Elevator System",
          problems: [
            { name: "Elevator LLD (GitHub)", url: "https://github.com/tssovi/grokking-the-object-oriented-design-interview/blob/master/object-oriented-design-case-studies/design-an-elevator-system.md" },
            { name: "Elevator Algorithm (LookUp)", url: "https://www.geeksforgeeks.org/design-data-structures-and-algorithms-for-in-memory-file-system/" },
            { name: "Multi-elevator scheduling", url: "https://www.codeproject.com/Articles/30529/A-Multi-Elevator-Algorithm" },
          ],
        },
        {
          name: "Splitwise / Expense Sharing",
          problems: [
            { name: "Splitwise LLD (GitHub)", url: "https://github.com/anomaly2104/splitwise-low-level-system-design" },
            { name: "Splitwise design walkthrough", url: "https://medium.com/@adityashete009/system-design-of-splitwise-app-2af56e8fe19c" },
          ],
        },
        {
          name: "Logger & Rate Limiter (class design)",
          problems: [
            { name: "Design Logger", url: "https://leetcode.com/problems/logger-rate-limiter/" },
            { name: "Hit Counter", url: "https://leetcode.com/problems/design-hit-counter/" },
            { name: "Token Bucket implementation", url: "https://en.wikipedia.org/wiki/Token_bucket" },
          ],
        },
      ],
    },
    {
      name: "Classic LLD Problems — Hard",
      emoji: "🏆",
      priority: "medium",
      subtopics: [
        {
          name: "Chess Game",
          problems: [
            { name: "Chess LLD (GitHub)", url: "https://github.com/tssovi/grokking-the-object-oriented-design-interview/blob/master/object-oriented-design-case-studies/design-chess.md" },
            { name: "Chess Game LLD walkthrough", url: "https://medium.com/swlh/design-chess-game-using-oop-3ee0a45a8b34" },
          ],
        },
        {
          name: "Ride Sharing (Uber / Ola)",
          problems: [
            { name: "Uber LLD (GitHub)", url: "https://github.com/tssovi/grokking-the-object-oriented-design-interview/blob/master/object-oriented-design-case-studies/design-uber-backend.md" },
            { name: "Uber System Design (Educative)", url: "https://www.educative.io/courses/grokking-the-system-design-interview/B8LjwAknR8r" },
          ],
        },
        {
          name: "Pub-Sub System",
          problems: [
            { name: "Design Pub-Sub", url: "https://medium.com/double-pointer/system-design-interview-publish-subscribe-or-pub-sub-architecture-design-with-pros-cons-1d62147f3e1a" },
            { name: "Observer pattern foundation", url: "https://refactoring.guru/design-patterns/observer" },
          ],
        },
        {
          name: "In-Memory File System",
          problems: [
            { name: "Design In-Memory File System", url: "https://leetcode.com/problems/design-in-memory-file-system/" },
            { name: "File System (GfG)", url: "https://www.geeksforgeeks.org/design-data-structures-and-algorithms-for-in-memory-file-system/" },
          ],
        },
        {
          name: "BookMyShow / Movie Ticket Booking",
          problems: [
            { name: "BookMyShow LLD (GitHub)", url: "https://github.com/tssovi/grokking-the-object-oriented-design-interview/blob/master/object-oriented-design-case-studies/design-movie-ticket-booking-system.md" },
            { name: "Concurrency in ticket booking", url: "https://medium.com/double-pointer/system-design-interview-bookmyshow-d030f97b29a6" },
          ],
        },
      ],
    },
  ],
};
