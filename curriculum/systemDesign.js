const SYSTEM_DESIGN_SECTION = {
  icon: "🏗️",
  label: "System Design",
  color: "amber",
  topics: [
    {
      name: "Networking Basics",
      emoji: "🌐",
      priority: "high",
      subtopics: [
        {
          name: "DNS, TCP, UDP, HTTP/1.1/2/3",
          problems: [
            { name: "How DNS works (comic)", url: "https://howdns.works/" },
            { name: "HTTP/2 vs HTTP/3 (Cloudflare)", url: "https://www.cloudflare.com/learning/performance/http2-vs-http3/" },
            { name: "TCP vs UDP", url: "https://www.cloudflare.com/learning/ddos/glossary/user-datagram-protocol-udp/" },
          ],
        },
        {
          name: "Load Balancers — L4 vs L7",
          problems: [
            { name: "Load balancing concepts (NGINX)", url: "https://www.nginx.com/resources/glossary/load-balancing/" },
            { name: "L4 vs L7 (Cloudflare)", url: "https://www.cloudflare.com/learning/cdn/glossary/layer-4-load-balancer/" },
          ],
        },
      ],
    },
    {
      name: "Scalability Fundamentals",
      emoji: "📈",
      priority: "high",
      subtopics: [
        {
          name: "Vertical vs Horizontal, Stateless",
          problems: [
            { name: "Scalability primer (Highscalability)", url: "http://highscalability.com/all-time-favorites/" },
            { name: "ByteByteGo — System Design Primer", url: "https://github.com/donnemartin/system-design-primer" },
          ],
        },
        {
          name: "Sharding & Partitioning",
          problems: [
            { name: "Database Sharding (MongoDB)", url: "https://www.mongodb.com/features/database-sharding-explained" },
            { name: "Consistent Hashing", url: "https://www.toptal.com/big-data/consistent-hashing" },
          ],
        },
      ],
    },
    {
      name: "Reliability & Availability",
      emoji: "🛟",
      priority: "high",
      subtopics: [
        {
          name: "Replication, Failover, Backups",
          problems: [
            { name: "Designing Data-Intensive Apps — Ch 5 Notes", url: "https://github.com/keyvanakbary/learning-notes/blob/master/books/designing-data-intensive-applications.md#replication" },
            { name: "Database replication patterns", url: "https://www.educative.io/courses/grokking-the-system-design-interview/B1AKwM8wKWv" },
          ],
        },
      ],
    },
    {
      name: "Consistency Models",
      emoji: "⚖️",
      priority: "high",
      subtopics: [
        {
          name: "CAP, PACELC, ACID vs BASE",
          problems: [
            { name: "CAP Theorem Explained", url: "https://www.ibm.com/topics/cap-theorem" },
            { name: "PACELC", url: "https://en.wikipedia.org/wiki/PACELC_theorem" },
            { name: "Strong vs Eventual Consistency", url: "https://www.scylladb.com/glossary/eventual-consistency/" },
          ],
        },
      ],
    },
    {
      name: "Caching Strategies",
      emoji: "🔥",
      priority: "high",
      subtopics: [
        {
          name: "Cache-Aside, Write-Through, Write-Back",
          problems: [
            { name: "Caching strategies (AWS)", url: "https://aws.amazon.com/builders-library/caching-challenges-and-strategies/" },
            { name: "Cache patterns explained (Educative)", url: "https://www.educative.io/courses/grokking-the-system-design-interview/m2YDVZnQ8lG" },
          ],
        },
        {
          name: "LRU, LFU, TTL Eviction",
          problems: [
            { name: "LRU Cache (LeetCode)", url: "https://leetcode.com/problems/lru-cache/" },
            { name: "LFU Cache (LeetCode)", url: "https://leetcode.com/problems/lfu-cache/" },
          ],
        },
        {
          name: "CDN & Edge Caching",
          problems: [
            { name: "What is a CDN? (Cloudflare)", url: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/" },
          ],
        },
      ],
    },
    {
      name: "Database Scaling",
      emoji: "📦",
      priority: "high",
      subtopics: [
        {
          name: "Read Replicas, Master-Slave",
          problems: [
            { name: "Postgres replication overview", url: "https://www.postgresql.org/docs/current/high-availability.html" },
            { name: "Read replicas (AWS RDS)", url: "https://aws.amazon.com/rds/features/read-replicas/" },
          ],
        },
        {
          name: "Indexing Strategy",
          problems: [
            { name: "Use The Index, Luke (full book)", url: "https://use-the-index-luke.com/" },
            { name: "B-Tree vs Hash Indexes", url: "https://www.postgresql.org/docs/current/indexes-types.html" },
          ],
        },
      ],
    },
    {
      name: "Async Communication",
      emoji: "📡",
      priority: "medium",
      subtopics: [
        {
          name: "Pub/Sub, Event Sourcing, CQRS",
          problems: [
            { name: "Event Sourcing (Martin Fowler)", url: "https://martinfowler.com/eaaDev/EventSourcing.html" },
            { name: "CQRS (Martin Fowler)", url: "https://martinfowler.com/bliki/CQRS.html" },
          ],
        },
      ],
    },
    {
      name: "Rate Limiting",
      emoji: "🚦",
      priority: "medium",
      subtopics: [
        {
          name: "Token Bucket, Leaky Bucket, Sliding Window",
          problems: [
            { name: "Rate Limiting Algorithms (Kong)", url: "https://konghq.com/blog/engineering/how-to-design-a-scalable-rate-limiting-algorithm" },
            { name: "Rate Limiting (Cloudflare)", url: "https://www.cloudflare.com/learning/bots/what-is-rate-limiting/" },
          ],
        },
      ],
    },
    {
      name: "Microservices",
      emoji: "🧩",
      priority: "medium",
      subtopics: [
        {
          name: "Service Discovery, Service Mesh",
          problems: [
            { name: "Microservices.io — patterns", url: "https://microservices.io/patterns/index.html" },
            { name: "Istio basics", url: "https://istio.io/latest/about/service-mesh/" },
          ],
        },
        {
          name: "API Gateway",
          problems: [
            { name: "API Gateway pattern", url: "https://microservices.io/patterns/apigateway.html" },
          ],
        },
      ],
    },
    {
      name: "Classic Design Problems",
      emoji: "📐",
      priority: "high",
      subtopics: [
        {
          name: "URL Shortener (TinyURL/bit.ly)",
          problems: [
            { name: "Design URL Shortener (HighScalability)", url: "https://highscalability.com/design-of-a-modern-cache/" },
            { name: "TinyURL System Design (Educative)", url: "https://www.educative.io/courses/grokking-the-system-design-interview/m2ygV4E81AR" },
          ],
        },
        {
          name: "Rate Limiter Design",
          problems: [
            { name: "Designing a Rate Limiter (ByteByteGo)", url: "https://blog.bytebytego.com/p/rate-limiter-for-the-real-world" },
          ],
        },
        {
          name: "Chat System (WhatsApp / Slack)",
          problems: [
            { name: "Design WhatsApp (HiredInTech)", url: "https://www.educative.io/courses/grokking-the-system-design-interview/NE5LpPrWrKv" },
          ],
        },
        {
          name: "Newsfeed (Twitter / Instagram)",
          problems: [
            { name: "Design Twitter (Educative)", url: "https://www.educative.io/courses/grokking-the-system-design-interview/m2yDVZnQ8lG" },
          ],
        },
        {
          name: "Parking Lot — OOP Design",
          problems: [
            { name: "Parking Lot Design (LeetCode discuss)", url: "https://leetcode.com/discuss/general-discussion/1063454/system-design-design-a-parking-lot" },
          ],
        },
        {
          name: "File Storage (Dropbox / Google Drive)",
          problems: [
            { name: "Design Dropbox (ByteByteGo)", url: "https://blog.bytebytego.com/p/ep37-design-a-cloud-file-storage" },
          ],
        },
      ],
    },
  ],
};
