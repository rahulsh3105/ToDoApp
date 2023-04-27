// Select elements
const taskText = document.getElementById('taskText');
const addTaskBtn = document.getElementById('addTaskBtn');
const toDoList = document.getElementById('to-do-list');
const doingList = document.getElementById('doing-list');
const doneList = document.getElementById('done-list');
const trashList = document.getElementById('trash-list');
const emptyTrashBtn = document.getElementById('emptyTrashBtn');

// Add task
function addTask() {
  // Get task text
  const task = taskText.value;
  
  // Create task item
  const taskItem = document.createElement('li');
  taskItem.classList.add('task');
  taskItem.textContent = task;
  
  // Add task item to To Do list
  toDoList.appendChild(taskItem);
  
  // Clear task text input
  taskText.value = '';
}

// Move task to Doing list
function moveToDoing(e) {
  // Get task item
  const taskItem = e.target.closest('.task');
  
  // Move task item to Doing list
  doingList.appendChild(taskItem);
}

// Move task to Done list
function moveToDone(e) {
  // Get task item
  const taskItem = e.target.closest('.task');
  
  // Move task item to Done list
  doneList.appendChild(taskItem);
}

// Move task to Trash list
function moveToTrash(e) {
  // Get task item
  const taskItem = e.target.closest('.task');
  
  // Move task item to Trash list
  trashList.appendChild(taskItem);
}

// Remove all tasks from Trash list
function emptyTrash() {
  while (trashList.firstChild) {
    trashList.removeChild(trashList.firstChild);
  }
}

// Event listeners
addTaskBtn.addEventListener('click', addTask);
toDoList.addEventListener('click', moveToDoing);
doingList.addEventListener('click', moveToDone);
doneList.addEventListener('click', moveToTrash);
emptyTrashBtn.addEventListener('click', emptyTrash);
