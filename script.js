const arrayBtn = document.getElementById('array-btn');
const stackBtn = document.getElementById('stack-btn');
const queueBtn = document.getElementById('stack-btn');
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

