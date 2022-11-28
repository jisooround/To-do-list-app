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
    const dateArr = selectDay.split('.');
    console.log(dateArr);
    if (dateArr[1].length < 2) {
      dateArr[1] = '0' + dateArr[1];
      console.log(dateArr);
    }
    if (dateArr[2].length < 2) {
      dateArr[2] = '0' + dateArr[2];
      console.log(dateArr);
    }
    const changeToSix = dateArr.join('');

    console.log(changeToSix);
    await createTodo(todoEl, changeToSix);

    const todos = await getTodo(todoEl);
    renderTodo(todos, changeToSix);
  }
});

const selectDay = listDateEl.textContent;
console.log(selectDay);

// 한자리 수 두자리로 만들기
const dateArr = selectDay.split('.');
console.log(dateArr);
if (dateArr[1].length < 2) {
  dateArr[1] = '0' + dateArr[1];
  console.log(dateArr);
}
if (dateArr[2].length < 2) {
  dateArr[2] = '0' + dateArr[2];
  console.log(dateArr);
}
const changeToSix = dateArr.join('');

console.log(changeToSix);
renderTodo(todos, changeToSix);