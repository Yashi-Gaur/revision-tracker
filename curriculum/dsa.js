const DSA_SECTION = {
  icon: "🧮",
  label: "DSA",
  color: "indigo",
  topics: [
    // ────────────────────────────────────────────────────────
    // 1. DYNAMIC PROGRAMMING (start here, hardest, most weighted)
    // ────────────────────────────────────────────────────────
    {
      name: "Dynamic Programming",
      emoji: "🧩",
      priority: "high",
      subtopics: [
        {
          name: "1D DP — Climbing/Robber/Coin patterns",
          problems: [
            { name: "Climbing Stairs", url: "https://leetcode.com/problems/climbing-stairs/" },
            { name: "House Robber", url: "https://leetcode.com/problems/house-robber/" },
            { name: "Coin Change", url: "https://leetcode.com/problems/coin-change/" },
            { name: "Longest Increasing Subsequence", url: "https://leetcode.com/problems/longest-increasing-subsequence/" },
          ],
        },
        {
          name: "2D DP — Grid & Pathing",
          problems: [
            { name: "Unique Paths", url: "https://leetcode.com/problems/unique-paths/" },
            { name: "Minimum Path Sum", url: "https://leetcode.com/problems/minimum-path-sum/" },
            { name: "Longest Common Subsequence", url: "https://leetcode.com/problems/longest-common-subsequence/" },
            { name: "Edit Distance", url: "https://leetcode.com/problems/edit-distance/" },
          ],
        },
        {
          name: "Knapsack patterns (0/1, Unbounded)",
          problems: [
            { name: "Partition Equal Subset Sum", url: "https://leetcode.com/problems/partition-equal-subset-sum/" },
            { name: "Target Sum", url: "https://leetcode.com/problems/target-sum/" },
            { name: "Coin Change II (unbounded)", url: "https://leetcode.com/problems/coin-change-ii/" },
            { name: "Ones and Zeroes", url: "https://leetcode.com/problems/ones-and-zeroes/" },
          ],
        },
        {
          name: "DP on Strings",
          problems: [
            { name: "Longest Palindromic Substring", url: "https://leetcode.com/problems/longest-palindromic-substring/" },
            { name: "Palindrome Partitioning II", url: "https://leetcode.com/problems/palindrome-partitioning-ii/" },
            { name: "Word Break", url: "https://leetcode.com/problems/word-break/" },
            { name: "Distinct Subsequences", url: "https://leetcode.com/problems/distinct-subsequences/" },
          ],
        },
        {
          name: "DP on Trees",
          problems: [
            { name: "House Robber III", url: "https://leetcode.com/problems/house-robber-iii/" },
            { name: "Binary Tree Maximum Path Sum", url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" },
            { name: "Diameter of Binary Tree", url: "https://leetcode.com/problems/diameter-of-binary-tree/" },
          ],
        },
        {
          name: "Bitmask / State Compression DP",
          problems: [
            { name: "Partition to K Equal Sum Subsets", url: "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/" },
            { name: "Shortest Path Visiting All Nodes", url: "https://leetcode.com/problems/shortest-path-visiting-all-nodes/" },
            { name: "Travelling Salesman (GfG)", url: "https://www.geeksforgeeks.org/travelling-salesman-problem-using-dynamic-programming/" },
          ],
        },
        {
          name: "Interval DP",
          problems: [
            { name: "Burst Balloons", url: "https://leetcode.com/problems/burst-balloons/" },
            { name: "Matrix Chain Multiplication (GfG)", url: "https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/" },
            { name: "Minimum Cost to Cut a Stick", url: "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/" },
          ],
        },
        {
          name: "Stocks & Game DP",
          problems: [
            { name: "Best Time to Buy and Sell Stock III", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/" },
            { name: "Best Time to Buy and Sell Stock IV", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/" },
            { name: "Stone Game", url: "https://leetcode.com/problems/stone-game/" },
          ],
        },
      ],
    },
    // ────────────────────────────────────────────────────────
    // 2. TREES
    // ────────────────────────────────────────────────────────
    {
      name: "Trees",
      emoji: "🌳",
      priority: "high",
      subtopics: [
        {
          name: "Traversals — Inorder, Preorder, Postorder, Level",
          problems: [
            { name: "Binary Tree Inorder Traversal", url: "https://leetcode.com/problems/binary-tree-inorder-traversal/" },
            { name: "Binary Tree Level Order Traversal", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
            { name: "Binary Tree Zigzag Level Order", url: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/" },
            { name: "Construct Tree from Pre+Inorder", url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" },
          ],
        },
        {
          name: "BST Operations",
          problems: [
            { name: "Validate Binary Search Tree", url: "https://leetcode.com/problems/validate-binary-search-tree/" },
            { name: "Kth Smallest in BST", url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
            { name: "Insert into BST", url: "https://leetcode.com/problems/insert-into-a-binary-search-tree/" },
            { name: "Delete Node in BST", url: "https://leetcode.com/problems/delete-node-in-a-bst/" },
          ],
        },
        {
          name: "Lowest Common Ancestor (LCA)",
          problems: [
            { name: "LCA of Binary Tree", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
            { name: "LCA of BST", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
            { name: "Distance Between Two Nodes (GfG)", url: "https://www.geeksforgeeks.org/find-distance-between-two-nodes-of-a-binary-tree/" },
          ],
        },
        {
          name: "Path Problems / Diameter",
          problems: [
            { name: "Diameter of Binary Tree", url: "https://leetcode.com/problems/diameter-of-binary-tree/" },
            { name: "Path Sum III", url: "https://leetcode.com/problems/path-sum-iii/" },
            { name: "Binary Tree Maximum Path Sum", url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" },
          ],
        },
        {
          name: "Serialize / Deserialize",
          problems: [
            { name: "Serialize and Deserialize Binary Tree", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" },
            { name: "Serialize and Deserialize BST", url: "https://leetcode.com/problems/serialize-and-deserialize-bst/" },
          ],
        },
        {
          name: "Tries (Prefix Trees)",
          problems: [
            { name: "Implement Trie", url: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
            { name: "Word Search II", url: "https://leetcode.com/problems/word-search-ii/" },
            { name: "Design Add and Search Words", url: "https://leetcode.com/problems/design-add-and-search-words-data-structure/" },
          ],
        },
        {
          name: "Segment Tree & Fenwick (BIT)",
          problems: [
            { name: "Range Sum Query — Mutable (Segment Tree)", url: "https://leetcode.com/problems/range-sum-query-mutable/" },
            { name: "Count of Smaller Numbers After Self (BIT)", url: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/" },
            { name: "Reverse Pairs", url: "https://leetcode.com/problems/reverse-pairs/" },
          ],
        },
      ],
    },
    // ────────────────────────────────────────────────────────
    // 3. GRAPHS
    // ────────────────────────────────────────────────────────
    {
      name: "Graphs",
      emoji: "🕸️",
      priority: "high",
      subtopics: [
        {
          name: "BFS & DFS — Foundations",
          problems: [
            { name: "Number of Islands", url: "https://leetcode.com/problems/number-of-islands/" },
            { name: "Clone Graph", url: "https://leetcode.com/problems/clone-graph/" },
            { name: "Rotting Oranges", url: "https://leetcode.com/problems/rotting-oranges/" },
            { name: "Word Ladder", url: "https://leetcode.com/problems/word-ladder/" },
          ],
        },
        {
          name: "Topological Sort",
          problems: [
            { name: "Course Schedule", url: "https://leetcode.com/problems/course-schedule/" },
            { name: "Course Schedule II", url: "https://leetcode.com/problems/course-schedule-ii/" },
            { name: "Alien Dictionary", url: "https://leetcode.com/problems/alien-dictionary/" },
          ],
        },
        {
          name: "Shortest Path — Dijkstra",
          problems: [
            { name: "Network Delay Time", url: "https://leetcode.com/problems/network-delay-time/" },
            { name: "Cheapest Flights Within K Stops", url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/" },
            { name: "Path With Minimum Effort", url: "https://leetcode.com/problems/path-with-minimum-effort/" },
          ],
        },
        {
          name: "Bellman-Ford & Floyd-Warshall",
          problems: [
            { name: "Bellman-Ford (GfG)", url: "https://www.geeksforgeeks.org/bellman-ford-algorithm-dp-23/" },
            { name: "Floyd-Warshall (GfG)", url: "https://www.geeksforgeeks.org/floyd-warshall-algorithm-dp-16/" },
            { name: "Find the City With the Smallest Number of Neighbors", url: "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/" },
          ],
        },
        {
          name: "Minimum Spanning Tree — Kruskal / Prim",
          problems: [
            { name: "Min Cost to Connect All Points", url: "https://leetcode.com/problems/min-cost-to-connect-all-points/" },
            { name: "Connecting Cities With Minimum Cost", url: "https://leetcode.com/problems/connecting-cities-with-minimum-cost/" },
            { name: "Kruskal (GfG)", url: "https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/" },
          ],
        },
        {
          name: "Bipartite & Cycle Detection",
          problems: [
            { name: "Is Graph Bipartite?", url: "https://leetcode.com/problems/is-graph-bipartite/" },
            { name: "Possible Bipartition", url: "https://leetcode.com/problems/possible-bipartition/" },
            { name: "Detect Cycle in Directed Graph (GfG)", url: "https://www.geeksforgeeks.org/detect-cycle-in-a-graph/" },
          ],
        },
        {
          name: "Strongly Connected Components",
          problems: [
            { name: "Tarjan's Algorithm (GfG)", url: "https://www.geeksforgeeks.org/tarjan-algorithm-find-strongly-connected-components/" },
            { name: "Critical Connections in a Network", url: "https://leetcode.com/problems/critical-connections-in-a-network/" },
            { name: "Kosaraju (GfG)", url: "https://www.geeksforgeeks.org/strongly-connected-components/" },
          ],
        },
      ],
    },
    // ────────────────────────────────────────────────────────
    // 4. UNION FIND (DSU)
    // ────────────────────────────────────────────────────────
    {
      name: "Union Find (DSU)",
      emoji: "🔗",
      priority: "high",
      subtopics: [
        {
          name: "Union by Rank + Path Compression",
          problems: [
            { name: "Number of Provinces", url: "https://leetcode.com/problems/number-of-provinces/" },
            { name: "Friend Circles (GfG)", url: "https://www.geeksforgeeks.org/friends-pairing-problem/" },
            { name: "DSU Tutorial (CP-Algorithms)", url: "https://cp-algorithms.com/data_structures/disjoint_set_union.html" },
          ],
        },
        {
          name: "DSU Applications",
          problems: [
            { name: "Redundant Connection", url: "https://leetcode.com/problems/redundant-connection/" },
            { name: "Accounts Merge", url: "https://leetcode.com/problems/accounts-merge/" },
            { name: "Number of Islands II", url: "https://leetcode.com/problems/number-of-islands-ii/" },
            { name: "Most Stones Removed", url: "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/" },
          ],
        },
      ],
    },
    // ────────────────────────────────────────────────────────
    // 5. HEAPS
    // ────────────────────────────────────────────────────────
    {
      name: "Heaps & Priority Queue",
      emoji: "⛰️",
      priority: "medium",
      subtopics: [
        {
          name: "Top K Patterns",
          problems: [
            { name: "Kth Largest Element in an Array", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
            { name: "Top K Frequent Elements", url: "https://leetcode.com/problems/top-k-frequent-elements/" },
            { name: "K Closest Points to Origin", url: "https://leetcode.com/problems/k-closest-points-to-origin/" },
          ],
        },
        {
          name: "Merge K Sorted",
          problems: [
            { name: "Merge K Sorted Lists", url: "https://leetcode.com/problems/merge-k-sorted-lists/" },
            { name: "Smallest Range Covering K Lists", url: "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/" },
            { name: "Find K Pairs with Smallest Sums", url: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/" },
          ],
        },
        {
          name: "Two Heaps — Median tracking",
          problems: [
            { name: "Find Median from Data Stream", url: "https://leetcode.com/problems/find-median-from-data-stream/" },
            { name: "Sliding Window Median", url: "https://leetcode.com/problems/sliding-window-median/" },
            { name: "IPO", url: "https://leetcode.com/problems/ipo/" },
          ],
        },
      ],
    },
    // ────────────────────────────────────────────────────────
    // 6. BINARY SEARCH
    // ────────────────────────────────────────────────────────
    {
      name: "Binary Search",
      emoji: "🔍",
      priority: "medium",
      subtopics: [
        {
          name: "Classic Binary Search",
          problems: [
            { name: "Binary Search", url: "https://leetcode.com/problems/binary-search/" },
            { name: "First and Last Position", url: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" },
            { name: "Search Insert Position", url: "https://leetcode.com/problems/search-insert-position/" },
          ],
        },
        {
          name: "Binary Search on Answer",
          problems: [
            { name: "Koko Eating Bananas", url: "https://leetcode.com/problems/koko-eating-bananas/" },
            { name: "Capacity to Ship Packages", url: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/" },
            { name: "Split Array Largest Sum", url: "https://leetcode.com/problems/split-array-largest-sum/" },
          ],
        },
        {
          name: "Rotated / 2D Arrays",
          problems: [
            { name: "Search in Rotated Sorted Array", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
            { name: "Find Minimum in Rotated Sorted Array", url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" },
            { name: "Median of Two Sorted Arrays", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
          ],
        },
      ],
    },
    // ────────────────────────────────────────────────────────
    // 7. LINKED LISTS
    // ────────────────────────────────────────────────────────
    {
      name: "Linked Lists",
      emoji: "🔗",
      priority: "medium",
      subtopics: [
        {
          name: "Reverse & Manipulate",
          problems: [
            { name: "Reverse Linked List", url: "https://leetcode.com/problems/reverse-linked-list/" },
            { name: "Reverse Nodes in k-Group", url: "https://leetcode.com/problems/reverse-nodes-in-k-group/" },
            { name: "Swap Nodes in Pairs", url: "https://leetcode.com/problems/swap-nodes-in-pairs/" },
          ],
        },
        {
          name: "Fast & Slow Pointers",
          problems: [
            { name: "Linked List Cycle", url: "https://leetcode.com/problems/linked-list-cycle/" },
            { name: "Linked List Cycle II", url: "https://leetcode.com/problems/linked-list-cycle-ii/" },
            { name: "Middle of the Linked List", url: "https://leetcode.com/problems/middle-of-the-linked-list/" },
          ],
        },
        {
          name: "Merge / Sort / Special",
          problems: [
            { name: "Merge Two Sorted Lists", url: "https://leetcode.com/problems/merge-two-sorted-lists/" },
            { name: "Copy List with Random Pointer", url: "https://leetcode.com/problems/copy-list-with-random-pointer/" },
            { name: "LRU Cache", url: "https://leetcode.com/problems/lru-cache/" },
          ],
        },
      ],
    },
    // ────────────────────────────────────────────────────────
    // 8. STACKS
    // ────────────────────────────────────────────────────────
    {
      name: "Stacks",
      emoji: "📚",
      priority: "medium",
      subtopics: [
        {
          name: "Basic Stack patterns",
          problems: [
            { name: "Valid Parentheses", url: "https://leetcode.com/problems/valid-parentheses/" },
            { name: "Min Stack", url: "https://leetcode.com/problems/min-stack/" },
            { name: "Evaluate Reverse Polish Notation", url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/" },
          ],
        },
        {
          name: "Monotonic Stack",
          problems: [
            { name: "Daily Temperatures", url: "https://leetcode.com/problems/daily-temperatures/" },
            { name: "Next Greater Element II", url: "https://leetcode.com/problems/next-greater-element-ii/" },
            { name: "Largest Rectangle in Histogram", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
            { name: "Trapping Rain Water", url: "https://leetcode.com/problems/trapping-rain-water/" },
          ],
        },
      ],
    },
    // ────────────────────────────────────────────────────────
    // 9. QUEUES & DEQUE
    // ────────────────────────────────────────────────────────
    {
      name: "Queues & Deque",
      emoji: "🚶",
      priority: "medium",
      subtopics: [
        {
          name: "Sliding Window with Deque",
          problems: [
            { name: "Sliding Window Maximum", url: "https://leetcode.com/problems/sliding-window-maximum/" },
            { name: "Shortest Subarray with Sum at Least K", url: "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/" },
            { name: "Open the Lock", url: "https://leetcode.com/problems/open-the-lock/" },
          ],
        },
      ],
    },
    // ────────────────────────────────────────────────────────
    // 10. SLIDING WINDOW
    // ────────────────────────────────────────────────────────
    {
      name: "Sliding Window",
      emoji: "🪟",
      priority: "high",
      subtopics: [
        {
          name: "Fixed Window",
          problems: [
            { name: "Maximum Average Subarray I", url: "https://leetcode.com/problems/maximum-average-subarray-i/" },
            { name: "Permutation in String", url: "https://leetcode.com/problems/permutation-in-string/" },
            { name: "Find All Anagrams in a String", url: "https://leetcode.com/problems/find-all-anagrams-in-a-string/" },
          ],
        },
        {
          name: "Variable Window",
          problems: [
            { name: "Longest Substring Without Repeating", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
            { name: "Minimum Window Substring", url: "https://leetcode.com/problems/minimum-window-substring/" },
            { name: "Longest Repeating Character Replacement", url: "https://leetcode.com/problems/longest-repeating-character-replacement/" },
          ],
        },
      ],
    },
    // ────────────────────────────────────────────────────────
    // 11. TWO POINTERS
    // ────────────────────────────────────────────────────────
    {
      name: "Two Pointers",
      emoji: "👉",
      priority: "high",
      subtopics: [
        {
          name: "Sum Patterns",
          problems: [
            { name: "Two Sum II — Sorted", url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" },
            { name: "3Sum", url: "https://leetcode.com/problems/3sum/" },
            { name: "3Sum Closest", url: "https://leetcode.com/problems/3sum-closest/" },
            { name: "4Sum", url: "https://leetcode.com/problems/4sum/" },
          ],
        },
        {
          name: "Container / Trapping",
          problems: [
            { name: "Container With Most Water", url: "https://leetcode.com/problems/container-with-most-water/" },
            { name: "Sort Colors", url: "https://leetcode.com/problems/sort-colors/" },
            { name: "Remove Duplicates from Sorted Array", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" },
          ],
        },
      ],
    },
    // ────────────────────────────────────────────────────────
    // 12. ARRAYS & STRINGS
    // ────────────────────────────────────────────────────────
    {
      name: "Arrays & Strings",
      emoji: "🔤",
      priority: "high",
      subtopics: [
        {
          name: "Prefix Sum & Kadane",
          problems: [
            { name: "Maximum Subarray (Kadane)", url: "https://leetcode.com/problems/maximum-subarray/" },
            { name: "Subarray Sum Equals K", url: "https://leetcode.com/problems/subarray-sum-equals-k/" },
            { name: "Continuous Subarray Sum", url: "https://leetcode.com/problems/continuous-subarray-sum/" },
            { name: "Product of Array Except Self", url: "https://leetcode.com/problems/product-of-array-except-self/" },
          ],
        },
        {
          name: "String Patterns",
          problems: [
            { name: "Group Anagrams", url: "https://leetcode.com/problems/group-anagrams/" },
            { name: "Longest Palindromic Substring", url: "https://leetcode.com/problems/longest-palindromic-substring/" },
            { name: "String to Integer (atoi)", url: "https://leetcode.com/problems/string-to-integer-atoi/" },
          ],
        },
      ],
    },
    // ────────────────────────────────────────────────────────
    // 13. GREEDY
    // ────────────────────────────────────────────────────────
    {
      name: "Greedy",
      emoji: "🎯",
      priority: "medium",
      subtopics: [
        {
          name: "Interval & Scheduling",
          problems: [
            { name: "Jump Game", url: "https://leetcode.com/problems/jump-game/" },
            { name: "Jump Game II", url: "https://leetcode.com/problems/jump-game-ii/" },
            { name: "Non-overlapping Intervals", url: "https://leetcode.com/problems/non-overlapping-intervals/" },
            { name: "Gas Station", url: "https://leetcode.com/problems/gas-station/" },
          ],
        },
        {
          name: "Classic Greedy",
          problems: [
            { name: "Task Scheduler", url: "https://leetcode.com/problems/task-scheduler/" },
            { name: "Partition Labels", url: "https://leetcode.com/problems/partition-labels/" },
            { name: "Candy", url: "https://leetcode.com/problems/candy/" },
          ],
        },
      ],
    },
    // ────────────────────────────────────────────────────────
    // 14. BACKTRACKING
    // ────────────────────────────────────────────────────────
    {
      name: "Backtracking",
      emoji: "🔙",
      priority: "medium",
      subtopics: [
        {
          name: "Permutations & Combinations",
          problems: [
            { name: "Permutations", url: "https://leetcode.com/problems/permutations/" },
            { name: "Combinations", url: "https://leetcode.com/problems/combinations/" },
            { name: "Subsets", url: "https://leetcode.com/problems/subsets/" },
            { name: "Combination Sum", url: "https://leetcode.com/problems/combination-sum/" },
          ],
        },
        {
          name: "Grid Backtracking",
          problems: [
            { name: "Word Search", url: "https://leetcode.com/problems/word-search/" },
            { name: "N-Queens", url: "https://leetcode.com/problems/n-queens/" },
            { name: "Sudoku Solver", url: "https://leetcode.com/problems/sudoku-solver/" },
          ],
        },
      ],
    },
    // ────────────────────────────────────────────────────────
    // 15. BIT MANIPULATION
    // ────────────────────────────────────────────────────────
    {
      name: "Bit Manipulation",
      emoji: "💡",
      priority: "low",
      subtopics: [
        {
          name: "Classic Bit Tricks",
          problems: [
            { name: "Single Number", url: "https://leetcode.com/problems/single-number/" },
            { name: "Number of 1 Bits", url: "https://leetcode.com/problems/number-of-1-bits/" },
            { name: "Counting Bits", url: "https://leetcode.com/problems/counting-bits/" },
            { name: "Reverse Bits", url: "https://leetcode.com/problems/reverse-bits/" },
          ],
        },
        {
          name: "Advanced Bitmask",
          problems: [
            { name: "Sum of Two Integers (no +)", url: "https://leetcode.com/problems/sum-of-two-integers/" },
            { name: "Maximum XOR of Two Numbers", url: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/" },
            { name: "Bitwise AND of Numbers Range", url: "https://leetcode.com/problems/bitwise-and-of-numbers-range/" },
          ],
        },
      ],
    },
    // ────────────────────────────────────────────────────────
    // 16. MATH & NUMBER THEORY
    // ────────────────────────────────────────────────────────
    {
      name: "Math & Number Theory",
      emoji: "🔢",
      priority: "low",
      subtopics: [
        {
          name: "GCD, LCM & Primes",
          problems: [
            { name: "Count Primes (Sieve of Eratosthenes)", url: "https://leetcode.com/problems/count-primes/" },
            { name: "Pow(x, n)", url: "https://leetcode.com/problems/powx-n/" },
            { name: "Sqrt(x)", url: "https://leetcode.com/problems/sqrtx/" },
            { name: "Fraction to Recurring Decimal", url: "https://leetcode.com/problems/fraction-to-recurring-decimal/" },
          ],
        },
      ],
    },
  ],
};
