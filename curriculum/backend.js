const BACKEND_SECTION = {
  icon: "⚙️",
  label: "Backend",
  color: "green",
  topics: [
    {
      name: "HTTP & REST",
      emoji: "🌍",
      priority: "high",
      subtopics: [
        {
          name: "HTTP Methods, Status Codes, Headers",
          problems: [
            { name: "MDN — HTTP", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP" },
            { name: "HTTP status codes", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status" },
            { name: "REST API Tutorial", url: "https://restfulapi.net/" },
          ],
        },
        {
          name: "CORS, Caching, Compression",
          problems: [
            { name: "MDN — CORS", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" },
            { name: "HTTP Caching (web.dev)", url: "https://web.dev/articles/http-cache" },
          ],
        },
      ],
    },
    {
      name: "API Design",
      emoji: "🧾",
      priority: "high",
      subtopics: [
        {
          name: "REST best practices",
          problems: [
            { name: "Microsoft — REST API guidelines", url: "https://github.com/microsoft/api-guidelines" },
            { name: "API versioning patterns", url: "https://restfulapi.net/versioning/" },
            { name: "Pagination strategies", url: "https://nordicapis.com/everything-you-need-to-know-about-api-pagination/" },
          ],
        },
        {
          name: "GraphQL Basics",
          problems: [
            { name: "GraphQL — Learn", url: "https://graphql.org/learn/" },
            { name: "Apollo — When to use GraphQL", url: "https://www.apollographql.com/blog/when-to-use-graphql" },
          ],
        },
        {
          name: "gRPC & WebSockets",
          problems: [
            { name: "gRPC Concepts", url: "https://grpc.io/docs/what-is-grpc/core-concepts/" },
            { name: "REST vs gRPC vs GraphQL", url: "https://www.redhat.com/en/topics/api/grpc-vs-rest" },
          ],
        },
      ],
    },
    {
      name: "Python — FastAPI",
      emoji: "🐍",
      priority: "high",
      subtopics: [
        {
          name: "FastAPI Core",
          problems: [
            { name: "FastAPI Tutorial", url: "https://fastapi.tiangolo.com/tutorial/" },
            { name: "Pydantic v2", url: "https://docs.pydantic.dev/latest/" },
            { name: "Dependency Injection in FastAPI", url: "https://fastapi.tiangolo.com/tutorial/dependencies/" },
          ],
        },
        {
          name: "Background Tasks, WebSockets, Streaming",
          problems: [
            { name: "Background Tasks", url: "https://fastapi.tiangolo.com/tutorial/background-tasks/" },
            { name: "WebSockets in FastAPI", url: "https://fastapi.tiangolo.com/advanced/websockets/" },
          ],
        },
      ],
    },
    {
      name: "Node.js — Express / Nest",
      emoji: "🟢",
      priority: "medium",
      subtopics: [
        {
          name: "Express Routing & Middleware",
          problems: [
            { name: "Express — Middleware", url: "https://expressjs.com/en/guide/using-middleware.html" },
            { name: "Node.js Best Practices (GitHub)", url: "https://github.com/goldbergyoni/nodebestpractices" },
          ],
        },
        {
          name: "NestJS Architecture",
          problems: [
            { name: "NestJS — First Steps", url: "https://docs.nestjs.com/first-steps" },
          ],
        },
      ],
    },
    {
      name: "SQL Databases (PostgreSQL)",
      emoji: "🐘",
      priority: "high",
      subtopics: [
        {
          name: "Joins, Indexes, Transactions",
          problems: [
            { name: "Use The Index, Luke!", url: "https://use-the-index-luke.com/" },
            { name: "PostgreSQL — Transactions", url: "https://www.postgresql.org/docs/current/tutorial-transactions.html" },
            { name: "SQL Joins explained", url: "https://www.geeksforgeeks.org/sql-join-set-1-inner-left-right-and-full-joins/" },
          ],
        },
        {
          name: "ACID, Isolation Levels, Locks",
          problems: [
            { name: "Postgres MVCC", url: "https://www.postgresql.org/docs/current/mvcc-intro.html" },
            { name: "Transaction Isolation Levels (GfG)", url: "https://www.geeksforgeeks.org/transaction-isolation-levels-dbms/" },
          ],
        },
        {
          name: "Query Optimization",
          problems: [
            { name: "EXPLAIN ANALYZE", url: "https://www.postgresql.org/docs/current/using-explain.html" },
            { name: "Slow query analysis", url: "https://www.crunchydata.com/blog/get-started-with-postgresql-query-tuning" },
          ],
        },
      ],
    },
    {
      name: "NoSQL (MongoDB, Redis)",
      emoji: "🍃",
      priority: "medium",
      subtopics: [
        {
          name: "MongoDB Document Modeling",
          problems: [
            { name: "MongoDB — Data Modeling", url: "https://www.mongodb.com/docs/manual/data-modeling/" },
            { name: "Aggregation Pipeline", url: "https://www.mongodb.com/docs/manual/aggregation/" },
          ],
        },
        {
          name: "Redis Patterns (Caching, Locks, Streams)",
          problems: [
            { name: "Redis Use Cases", url: "https://redis.io/learn/use-cases/" },
            { name: "Distributed Locks with Redlock", url: "https://redis.io/docs/latest/develop/use/patterns/distributed-locks/" },
          ],
        },
      ],
    },
    {
      name: "ORMs & Migrations",
      emoji: "🔄",
      priority: "medium",
      subtopics: [
        {
          name: "SQLAlchemy & Alembic",
          problems: [
            { name: "SQLAlchemy 2.0 Tutorial", url: "https://docs.sqlalchemy.org/en/20/tutorial/" },
            { name: "Alembic Migrations", url: "https://alembic.sqlalchemy.org/en/latest/tutorial.html" },
          ],
        },
        {
          name: "Prisma / TypeORM",
          problems: [
            { name: "Prisma Getting Started", url: "https://www.prisma.io/docs/getting-started" },
          ],
        },
      ],
    },
    {
      name: "Authentication & Authorization",
      emoji: "🔐",
      priority: "high",
      subtopics: [
        {
          name: "JWT, Sessions, OAuth 2.0",
          problems: [
            { name: "Auth0 — JWT explained", url: "https://jwt.io/introduction" },
            { name: "OAuth 2.0 Simplified", url: "https://www.oauth.com/" },
            { name: "Session vs JWT", url: "https://supertokens.com/blog/are-you-using-jwts-for-user-sessions-in-the-correct-way" },
          ],
        },
        {
          name: "RBAC, Permissions, Password Hashing",
          problems: [
            { name: "RBAC vs ABAC (Auth0)", url: "https://auth0.com/intro-to-iam/what-is-role-based-access-control-rbac" },
            { name: "bcrypt vs Argon2", url: "https://crackstation.net/hashing-security.htm" },
          ],
        },
      ],
    },
    {
      name: "Caching",
      emoji: "💾",
      priority: "high",
      subtopics: [
        {
          name: "Cache Strategies & Invalidation",
          problems: [
            { name: "Caching strategies (AWS)", url: "https://aws.amazon.com/builders-library/caching-challenges-and-strategies/" },
            { name: "Cache patterns (Redis blog)", url: "https://redis.io/learn/howtos/solutions/caching-architecture/common-caching-patterns" },
          ],
        },
      ],
    },
    {
      name: "Message Queues",
      emoji: "📬",
      priority: "medium",
      subtopics: [
        {
          name: "Kafka, RabbitMQ, SQS",
          problems: [
            { name: "Kafka Quickstart", url: "https://kafka.apache.org/quickstart" },
            { name: "RabbitMQ Tutorials", url: "https://www.rabbitmq.com/getstarted.html" },
            { name: "Kafka vs RabbitMQ", url: "https://www.confluent.io/learn/rabbitmq-vs-apache-kafka/" },
          ],
        },
        {
          name: "Pub/Sub & Event-Driven Architecture",
          problems: [
            { name: "Event-Driven Architecture (AWS)", url: "https://aws.amazon.com/event-driven-architecture/" },
            { name: "Outbox Pattern", url: "https://microservices.io/patterns/data/transactional-outbox.html" },
          ],
        },
      ],
    },
    {
      name: "Concurrency",
      emoji: "🧵",
      priority: "medium",
      subtopics: [
        {
          name: "Async I/O, Threads, Processes",
          problems: [
            { name: "Python asyncio", url: "https://docs.python.org/3/library/asyncio.html" },
            { name: "GIL explained", url: "https://realpython.com/python-gil/" },
            { name: "Node.js event loop", url: "https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick" },
          ],
        },
        {
          name: "Race Conditions, Deadlocks, Locks",
          problems: [
            { name: "Race conditions (GfG)", url: "https://www.geeksforgeeks.org/race-condition-in-multi-threading/" },
          ],
        },
      ],
    },
    {
      name: "Testing (Backend)",
      emoji: "🔬",
      priority: "medium",
      subtopics: [
        {
          name: "Unit, Integration, Contract Tests",
          problems: [
            { name: "Pytest Docs", url: "https://docs.pytest.org/en/stable/" },
            { name: "Testing Microservices (Martin Fowler)", url: "https://martinfowler.com/articles/microservice-testing/" },
          ],
        },
      ],
    },
    {
      name: "Deployment & DevOps",
      emoji: "🚢",
      priority: "medium",
      subtopics: [
        {
          name: "Docker",
          problems: [
            { name: "Docker — Getting Started", url: "https://docs.docker.com/get-started/" },
            { name: "Dockerfile best practices", url: "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/" },
          ],
        },
        {
          name: "Kubernetes basics",
          problems: [
            { name: "Kubernetes Tutorial (official)", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/" },
            { name: "Kubernetes for Developers (free book)", url: "https://kubernetesbyexample.com/" },
          ],
        },
        {
          name: "CI/CD Pipelines",
          problems: [
            { name: "GitHub Actions", url: "https://docs.github.com/en/actions/learn-github-actions" },
            { name: "CI/CD Concepts (Atlassian)", url: "https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment" },
          ],
        },
      ],
    },
    {
      name: "Observability",
      emoji: "📊",
      priority: "medium",
      subtopics: [
        {
          name: "Logging, Metrics, Tracing",
          problems: [
            { name: "Three Pillars (Honeycomb)", url: "https://www.honeycomb.io/blog/three-pillars-with-zero-answers-towards-observability" },
            { name: "Prometheus basics", url: "https://prometheus.io/docs/introduction/overview/" },
            { name: "OpenTelemetry", url: "https://opentelemetry.io/docs/what-is-opentelemetry/" },
          ],
        },
      ],
    },
    {
      name: "Security",
      emoji: "🛡️",
      priority: "high",
      subtopics: [
        {
          name: "OWASP Top 10",
          problems: [
            { name: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" },
            { name: "SQL Injection (PortSwigger)", url: "https://portswigger.net/web-security/sql-injection" },
            { name: "XSS (PortSwigger)", url: "https://portswigger.net/web-security/cross-site-scripting" },
          ],
        },
        {
          name: "HTTPS, TLS, CSRF",
          problems: [
            { name: "TLS Explained", url: "https://howhttps.works/" },
            { name: "CSRF (PortSwigger)", url: "https://portswigger.net/web-security/csrf" },
          ],
        },
      ],
    },
  ],
};
