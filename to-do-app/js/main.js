import createTodo from "./createTodo.js"
import getCalendar from "./getCalendar.js"
import getTodo from "./getTodo.js";
import renderTodo from "./renderTodo.js";

// 최초 호출
getCalendar();
const date = new Date();
const listDateEl = document.getElementById("list-date");
const inputEl = document.getElementById('todo-input');
const buttonEl = document.getElementById('todo-btn');
const todoEl = inputEl.value;
let todos = await getTodo(todoEl);
renderTodo(todos);
// const todoEl = inputEl.value;


// todo 입력
buttonEl.addEventListener("click", async (event) => {
  event.preventDefault();
  const todoEl = inputEl.value;
  if(todoEl === ""){
    alert('내용을 입력하세요');
  } else {
  await createTodo(todoEl);
  // renderTodo(todos)
  // console.log(todoEl);
  const todos = await getTodo(todoEl);
  renderTodo(todos);
} 
});

// 날짜 표시
listDateEl.textContent = `${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`