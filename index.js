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
}

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
console.log(tree);
