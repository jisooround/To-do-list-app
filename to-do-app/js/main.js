import createTodo from "./createTodo.js";
import getCalendar from "./getCalendar.js";
import getTodo from "./getTodo.js";
import renderTodo from "./renderTodo.js";

// 최초 호출
const date = new Date();
getCalendar(date);
const listDateEl = document.getElementById("list-date");
const inputEl = document.getElementById('todo-input');
const buttonEl = document.getElementById('todo-btn');
const todoEl = inputEl.value;
let todos = await getTodo(todoEl);
// const data = listDateEl.textContent;
// const adt = data.split('.').join(' ');

renderTodo(todos);

// 최초 날짜 표시
listDateEl.textContent = `${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`;


// const todoEl = inputEl.value;


// todo 입력
buttonEl.addEventListener("click", async (event) => {
  event.preventDefault();
  const todoEl = inputEl.value;
  if (todoEl === "") {
    alert('내용을 입력하세요');
  } else {
    // const data = listDateEl.textContent;
    // const adt = data.split('.').join(' ');
    // console.log(adt);

    const selectDay = listDateEl.textContent;
    const adt = selectDay.split('.').join('');
    // const jisoo = new Date(selectDay);
    // console.log(jisoo);
    console.log(adt);
    createTodo(todoEl, adt);
    // renderTodo(todos)
    // console.log(todoEl);
    const todos = await getTodo(todoEl);
    renderTodo(todos);
  }
});



// const selectDay = listDateEl.textContent
// selectDay.addEventListener("change", () => {
//   const jisoo = new Date(selectDay);
//   console.log(jisoo);
// })

// const selectDay = listDateEl.textContent;
// const jisoo = new Date(selectDay);
// console.log(jisoo);