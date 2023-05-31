// Get input element and todo list container
const input = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

// Function to add a new todo item
function addTodo() {
  const todoText = input.value;
  if (todoText.trim() !== "") {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    todoItem.innerHTML = `
      <input type="checkbox">
      <span class="todo-text">${todoText}</span>
    `;
    todoList.appendChild(todoItem);
    input.value = "";
  }
}

// Function to clear all todo items
function clearAll() {
  todoList.innerHTML = "";
}