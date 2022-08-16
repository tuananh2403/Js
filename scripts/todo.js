import {todoLists} from '../models/User.js';
let input = document.getElementById("input-task");
let ul = document.getElementById("todo-list");
let btnAdd = document.getElementById("btn-add");
let inforLogin =JSON.parse(localStorage.getItem("InforLogin"));
if (inforLogin){
  let todos = JSON.parse(localStorage.getItem(inforLogin[0].username));
  if (todos) {
      todos.forEach((todo) => addTodo(todo));
  }

function addTodo(todo) {
  let li = document.createElement("li");

  li.setAttribute("class", todo.isDone ? "checked" : "");
  li.innerHTML = `
        <span>${todo.task}</span>
        <i class="close">x</i>
    `;

  li.addEventListener("click", function () {
    this.classList.toggle("checked");
    updateTodos();
  });

  li.querySelector("i").addEventListener("click", (e) => {
    e.target.parentElement.remove();
    updateTodos();
  });

  ul.appendChild(li);
  updateTodos();
}
btnAdd.addEventListener("click", () => {
  let task = input.value.trim();
  let todoList = new todoLists(task,'tuananh2403',false);
  task != "" ? addTodo(todoList) : undefined;
  input.value = "";
});
function updateTodos() {
  let list = document.querySelectorAll("#todo-list li");
  let todos = [];
  list.forEach((item) => {
    todos.push({
      task: item.querySelector("span").innerHTML,
      owner: inforLogin[0].username,
      isDone: item.classList.contains("checked")
    });
  });
  localStorage.setItem(inforLogin[0].username, JSON.stringify(todos));
}
}else{
  btnAdd.addEventListener("click", () => {
    alert("Please Login")
    input.value = "";
  })}