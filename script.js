const arrayBtn = document.getElementById('array-btn');
const stackBtn = document.getElementById('stack-btn');
const queueBtn = document.getElementById('queue-btn');
const linkedListBtn = document.getElementById('linked-list-btn');
const binaryTreeBtn = document.getElementById('binary-tree-btn');

const arrayAddBtn = document.getElementById('array-add-btn');
const arrayRemoveBtn = document.getElementById('array-remove-btn');
const pushBtn = document.getElementById('push-btn');
const popBtn = document.getElementById('pop-btn');
const enqueueBtn = document.getElementById('enqueue-btn');
const dequeueBtn = document.getElementById('dequeue-btn');
const addNodeListBtn = document.getElementById('add-node-list-btn');
const removeNodeBtn = document.getElementById('remove-node-btn');
const addNodeTreeBtn = document.getElementById('add-node-tree-btn');
const traverseTreeBtn = document.getElementById('traverse-tree-btn');

const homeBtn = document.getElementById('home-btn');

let array = [];
let stack = [];
let queue = [];
let linkedList = [];
let binaryTree = null;

function showVisualization(type) {
    document.querySelectorAll('.visualization').forEach(div => div.style.display = 'none');
    document.querySelectorAll('.selector-button').forEach(btn => btn.style.display = 'none');
    document.getElementById(`${type}-visualization`).style.display = 'block';
    homeBtn.style.display = 'block';
    console.log('showing visualization');
}

arrayBtn.addEventListener("click" , () => {
    showVisualization('array');
});

stackBtn.addEventListener("click", () => {
    showVisualization('stack');
});

queueBtn.addEventListener('click', () => {
    showVisualization('queue');
});

linkedListBtn.addEventListener('click' , () => {
    showVisualization('linked-list');
});

binaryTreeBtn.addEventListener('click', () => {
    showVisualization('binary-tree');
});

function addToArray() {
    const value = prompt("ENter a value to add:");
    if (value) {
        array.push(value);
        updateArray();
    }
}

arrayAddBtn.addEventListener('click', addToArray);

function removeFromArray() {
    if (array.length > 0) {
        array.pop();
        updateArray();
    } else {
        alert('Array is empty!');
    }
}

arrayRemoveBtn.addEventListener('click', removeFromArray);

function updateArray() {
    const arrayDiv = document.getElementById('array');
    arrayDiv.innerHTML = array.map(item => `<div class="element">${item}</div>`).join('');
}

function pushToStack() {
    const value = prompt("Enter a value to push:");
    if (value) {
        stack.push(value);
        updateStack;
    }
}

pushBtn.addEventListener('click', pushToStack);

function popFromStack() {
    if (stack.length > 0) {
        stack.pop();
        updateStack();
    } else {
        alert('Stack is empty!');
    }
}

popBtn.addEventListener('click', popFromStack);

function updateStack() {
    const stackDiv = document.getElementById('stack');
    stackDiv.innerHtml = stack.map(item => `<div class = "element">${item}</div>`).reverse.join('');
}

function enqueue() {
    const value = prompt("Enter a value to enqueue:");
    if (value) {
        queue.push(value);
        updateQueue();
    }
}

enqueueBtn.addEventListener('click', enqueue);

function dequeue() {
    if (queue.length > 0) {
        queue.shift();
        updateQueue();
    } else {
        alert('Queue is empty!');
    }
}

dequeueBtn.addEventListener('click', dequeue);

function updateQueue() {
    const queueDiv = document.getElementById('queue');
    queueDiv.innerHtml = queue.map(item => `<div class = "element">${item}</div>`).join('');
}

class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function addNodeToList() {
    const value = promt("Enter a value to add to the linked list:");
    if (value) {
        const newNode = new LinkedListNode(value);
        if (!linkedList.length) {
            linkedList.push(newNode);
        } else {
            linkedList[linkedList.length - 1].next = newNode;
            linkedList.push(newNode);
        }
        updateLinkedList();
    }
}

addNodeListBtn.addEventListener('click', addNodeToList);

function removeNodeFromList() {
    if (linkedList.length > 0) {
        linkedList.pop();
        if (linkedList.length > 0) {
            linkedList[linkedList.length - 1].next = null;
        }
        updateLinkedList();
    } else {
        alert("Linked List is empty!");
    }
}

removeNodeBtn.addEventListener("click", removeNodeFromList);

function updateLinkedList() {
    const linkedListDiv = document.getElementById('linked-list');
    linkedListDiv.innerHtml = linkedList
        .map(node => `<div class="element">${node.value}</div>`)
        .join('<span>→</span>')
}

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function addNodeToTree() {
    const value = prompt("Enter a value to add to the binary tree:");
    if (value) {
        const newNode = new TreeNode(value);
        if (!binaryTree) {
            binaryTree = newNode;
        } else {
            insertIntoTree(binaryTree, newNode);
        }
        updateBinaryTree();
    }
}

addNodeTreeBtn.addEventListener("click", addNodeToTree);

function insertIntoTree(root, newNode) {
    if (newNode.value < root.value) {
        if (!root.left) {
            root.left = newNode;
        } else {
            insertIntoTree(root.left, newNode);
        }
    } else {
        if (!root.right) {
            root.right = newNode;
        } else {
            insertIntoTree(root.right, newNode);
        }
    }
}

function updateBinaryTree() {
    const binaryTreeDiv = document.getElementById('binary-tree');
    binaryTreeDiv.innerHTML = renderTree(binaryTree);
}

function renderTree(node) {
    if (!node) return '';
    return `
        <div class="tree-node">
            <div class="value">${node.value}</div>
            <div class="children">
                ${renderTree(node.left)}
                ${renderTree(node.right)}
            </div>    
        </div> 
    `;
}

function traverseTree() {
    if (!binaryTree) {
        alert("Binary Tree is empty!");
    } else {
        alerrt("Tree traversal visualization is still under construction!")
    }
}

traverseTreeBtn.addEventListener("click", traverseTree);

function goHome() {
    document.querySelectorAll(".visualization").forEach(div => div.style.display = "none");
    document.querySelectorAll(".selector-button").forEach(btn => btn.style.display = "block");
    homeBtn.style.display = "none";
    console.log("home button pressed");
}

homeBtn.addEventListener("click", goHome);