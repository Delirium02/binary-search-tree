Binary Search Tree

A custom JavaScript implementation of a Balanced Binary Search Tree (BST), designed to store and manage data with O(logn) efficiency for search, insertion, and deletion operations.
Key Features

    Initial Balancing: Automatically sorts and removes duplicates from input arrays to build a perfectly balanced tree from the start.

    Balance Monitoring: A recursive validation system that checks if the tree is height-balanced (ensuring subtrees differ by no more than one level).

    Manual Rebalancing: Provides a way to restructure skewed trees into a balanced state by flattening data and rebuilding the node hierarchy.

    Iterative Traversals: Uses manual stack and queue management for all traversal methods to ensure memory efficiency and avoid stack overflow.

Methods

    insert(value) / deleteItem(value): Add or remove data while maintaining the BST property (Left < Root < Right).

    includes(value): Search the tree for a specific value with logarithmic time complexity.

    height(node) / depth(node): Measure the distance from a node to its lowest leaf or back up to the root.

    isTreeBalanced(): Returns a boolean indicating if the tree’s current structure is efficient.

    Traversals: levelOrder, preOrder, inOrder, and postOrder for flexible data extraction.

Logic Overview

The tree utilizes In-Order Traversal to extract data in a sorted array format. During rebalancing, the middle element of the sorted data is selected as the root, and the process is applied recursively to the left and right halves. This ensures the maximum height of the tree remains log2​(n), preventing the structure from degenerating into a linked list.
