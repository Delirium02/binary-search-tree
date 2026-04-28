class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class Tree {
	constructor(array) {
		const sortedArray = [...new Set(array)].sort((a, b) => a - b);
		this.root = this.buildTree(sortedArray);
	}

	buildTree(array) {
		if (array.length === 0) return;

		const mid = Math.floor(array.length / 2);
		const node = new Node(array[mid]);

		node.left = this.buildTree(array.slice(0, mid));
		node.right = this.buildTree(array.slice(mid + 1));

		return node;
	}

	includes(value) {
		if (this.data === value) return true;

		let currentNode = this.root;

		while (currentNode) {
			if (currentNode.data === value) return true;

			currentNode =
				value < currentNode.data ? currentNode.left : currentNode.right;
		}

		return false;
	}

	insert(value) {
		if (this.root === null) {
			this.root = new Node(value);
		}

		let currentNode = this.root;

		while (currentNode.data) {
			if (value === currentNode.data) return;

			if (value < currentNode.data) {
				if (currentNode.left === null) {
					currentNode.left = new Node(value);
					return;
				}
				currentNode = currentNode.left;
			} else {
				if (currentNode.right === null) {
					currentNodel.right = new Node(value);
					return;
				}
				currentNode = currentNode.right;
			}
		}
	}

	// helper function for the deleteItem method
	getSuccessor(node) {
		node = node.right;
		while (node.left !== null && node !== null) {
			node = node.left;
		}
		return node;
	}

	deleteItem(value) {
		let parentNode = null;
		let currentNode = this.root;

		while (currentNode && currentNode.data !== value) {
			parentNode = currentNode;
			currentNode = value < currentNode.data ? currentNode.left : currentNode.right;
		}

		if (!currentNode) return;

		// if the node being deleted has 0 or 1 child
		if (currentNode.left === null || currentNode.right === null) {
			let replacement = currentNode.left ? currentNode.left : currentNode.right;

			if (!parentNode) {
				this.root = replacement;
			} else if (parentNode.left === currentNode) {
				parentNode.left = replacement;
			} else {
				parentNode.right = replacement;
			}
		}

		// if the node being deleted has 2 children
		else {
			const successor = this.getSuccessor(currentNode);
			const tempData = successor.data;
			this.deleteItem(successor.data);
			currentNode.data = tempData;
		}
	}

	levelOrderForEach(callback) {
		if (!this.root) return;
		if (!callback) throw new Error("A callback is required!");
		
		const queue = [this.root];

		while (queue.length > 0) {
			let currentNode = queue.shift();
			callback(currentNode);
			
			if (currentNode.left !== null) queue.push(currentNode.left);
			if (currentNode.right !== null) queue.push(currentNode.right);
		}
	}
	
	preOrderForEach(callback) {
		if (!callback) throw new Error("A callback is required!");

		const traverse = (node) => {
			if (!node) return;

			callback(node);

			traverse(node.left);
			traverse(node.right);
		}

		traverse(this.root);
	}
}

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
console.log(tree);
