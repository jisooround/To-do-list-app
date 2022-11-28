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

// renderTodo(todos);
// 최초 날짜 표시
listDateEl.textContent = `${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`;

// todo 입력
buttonEl.addEventListener("click", async (event) => {
  event.preventDefault();
  const todoEl = inputEl.value;
  if (todoEl === "") {
    alert('내용을 입력하세요');
  } else {
    const selectDay = listDateEl.textContent;
    console.log(selectDay);

    // 한자리 수 두자리로 만들기
    const km = selectDay.split('.');
    console.log(km);
    if (km[1].length < 2) {
      km[1] = '0' + km[1];
      console.log(km);
    }
    if (km[2].length < 2) {
      km[2] = '0' + km[2];
      console.log(km);
    }
    const adt = km.join('');

    console.log(adt);
    createTodo(todoEl, adt);

    const todos = await getTodo(todoEl);
    renderTodo(todos, adt);
  }
});

const selectDay = listDateEl.textContent;
console.log(selectDay);

// // 한자리 수 두자리로 만들기
// const km = selectDay.split('.');
// console.log(km);
// if (km[1].length < 2) {
//   km[1] = '0' + km[1];
//   console.log(km);
// }
// if (km[2].length < 2) {
//   km[2] = '0' + km[2];
//   console.log(km);
// }
// const adt = km.join('');

// console.log(adt);
// renderTodo(todos, adt);

// 한자리 수 두자리로 만들기
const km = selectDay.split('.');
console.log(km);
if (km[1].length < 2) {
  km[1] = '0' + km[1];
  console.log(km);
}
if (km[2].length < 2) {
  km[2] = '0' + km[2];
  console.log(km);
}
const adt = km.join('');

console.log(adt);
renderTodo(todos, adt);