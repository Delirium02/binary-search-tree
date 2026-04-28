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

		let current = this.root;

		while (current) {
			if (current.data === value) return true;

			current =
				value < current.data ? current.left : current.right;
		}

		return false;
	}

	insert(value) {
		if (this.root === null) {
			this.root = new Node(value);
		}

		let current = this.root;

		while (current.data) {
			if (value === current.data) return;

			if (value < current.data) {
				if (current.left === null) {
					current.left = new Node(value);
					return;
				}
				current = current.left;
			} else {
				if (current.right === null) {
					currentl.right = new Node(value);
					return;
				}
				current = current.right;
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
		let current = this.root;

		while (current && current.data !== value) {
			parentNode = current;
			current = value < current.data ? current.left : current.right;
		}

		if (!current) return;

		// if the node being deleted has 0 or 1 child
		if (current.left === null || current.right === null) {
			let replacement = current.left ? current.left : current.right;

			if (!parentNode) {
				this.root = replacement;
			} else if (parentNode.left === current) {
				parentNode.left = replacement;
			} else {
				parentNode.right = replacement;
			}
		}

		// if the node being deleted has 2 children
		else {
			const successor = this.getSuccessor(current);
			const tempData = successor.data;
			this.deleteItem(successor.data);
			current.data = tempData;
		}
	}

	// opting to use iteration instead of recursion for the traverse methods
	levelOrderForEach(callback) {
		if (!this.root) return;
		if (!callback) throw new Error("A callback is required!");
		
		const queue = [this.root];

		while (queue.length > 0) {
			let current = queue.shift();
			callback(current);
			
			if (current.left !== null) queue.push(current.left);
			if (current.right !== null) queue.push(current.right);
		}
	}
	
	preOrderForEach(callback) {
		if (!this.root) return;
		if (!callback) throw new Error("A callback is required!");

		const queue = [this.root];

		while (queue.length > 0) {
			let current = queue.pop();
			callback(current);
			
			if (current.right !== null) queue.push(current.right);
			if (current.left !== null) queue.push(current.left);
		}
	}

	inOrderForEach(callback) {
		if (!this.root) return;
		if (!callback) throw new Error("A callback is required!");

		const stack = [];
		let current = this.root;

		while (stack.length > 0 || current !== null) {
			while (current !== null) {
				current = current.left;
			}

			current = stack.pop();
			callback(current);

			current = current.right;
		}
	}

	postOrderForEach(callback) {
		if (!this.root) return;
		if (!callback) throw new Error("A callback is required!");

		const stack = [this.root];
		const resultStack = [];

		while (stack.length > 0) {
			let node = stack.pop();
			resultStack.push(node);

			if (node.left) stack.push(node.left);
			if (node.right) stack.push(node.right);
		}

		while (resultStack.length > 0) {
			callback(resultStack.pop());
		}
	}

	height(value) {
		if (!this.root) return undefined;

		let targetNode = null;
		let current = this.root;

		while (current !== null) {
			if (value === current) {
				targetNode = current;
				break;
			}
			current = value < current.left ? current.left : current.right;
		}

		if (!targetNode) return undefined;

		let queue = [targetNode];
		let height = -1;

		while (queue.length > 0) {
			let levelSize = queue.length;
			height++;

			for (let i = 0; i < levelSize; i++) {
				let node = queue.shift();
				if (node.left) queue.push(node.left);
				if (node.right) queue.push(node.right);
			}
		}

		return height;
	}

	depth(value) {
		if (!this.root) return undefined;

		let current = this.root;
		let depth = 0;

		while (current && current.data !== value) {
			depth++;
			current = value < current.data ? current.left : current.right;
		}

		return current ? depth : undefined;
	}
}

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
console.log(tree);
