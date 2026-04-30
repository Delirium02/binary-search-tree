Binary Search Tree (BST) Implementation

A JavaScript implementation of a Balanced Binary Search Tree. This project focuses on efficient data management, utilizing both recursive and iterative approaches to handle tree traversal and structural integrity.
Key Features

    Self-Balancing: Includes a rebalance method that transforms an unbalanced structure into a perfectly balanced tree using sorted array reconstruction.

    Dynamic Operations: Supports insert, deleteItem, and includes while maintaining BST properties.

    Comprehensive Traversal: Implements Level-Order, Pre-Order, In-Order, and Post-Order traversals using iterative stack/queue management.

    Structural Metrics: Methods to calculate height, depth, and verify tree balance via a recursive height-check algorithm with a O(n) "poison pill" flag.

Core Logic Overview

    Reconstruction: The tree is initially built from a sorted, unique array to ensure an O(logn) search time.

    Balancing Check: Employs a recursive isBalanced check that calculates heights and identifies imbalances (difference >1) by propagating a -1 signal up the call stack.

    Iterative Traversals: Opts for manual stack management for traversals to avoid stack overflow on deep trees and to demonstrate control over memory pointers.

Technical Reflection

    This project was a deep dive into the "recursion wall." It bridges the gap between high-level abstract logic (recursive tree building) and low-level mechanical execution (iterative stack manipulation).
