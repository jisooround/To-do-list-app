import createTodo from "./createTodo.js";
import getCalendar from "./getCalendar.js";
import getTodo from "./getTodo.js";
import renderTodo from "./renderTodo.js";
import convertDate from "./convertDate.js";
import { state } from "../store/index.js"

// 최초 선언 & 호출
const date = new Date();
const listDateEl = document.getElementById("list-date");
const inputEl = document.getElementById('todo-input');
const buttonEl = document.getElementById('todo-btn');
const todoEl = inputEl.value;
let todos = await getTodo(todoEl);

listDateEl.textContent = `${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`;

// To do 입력
buttonEl.addEventListener("click", async (event) => {
  try {
    event.preventDefault();
    const todoEl = inputEl.value;
    // 아무 내용도 입력하지 않을 경우
    if (todoEl === "") {
      alert('내용을 입력하세요');
      return
    }
    // 입력
    const selectDate = listDateEl.textContent;
    event.preventDefault();
    // 한자리 수 두자리로 만들기
    const resDate = convertDate(selectDate);

    await createTodo(todoEl, resDate);

    const todos = await getTodo(todoEl);
    renderTodo(todos, resDate);
    inputEl.value = '';

    getCalendar(state.selectedDate, todos);
    console.log(state.selectedDate)
  } catch (error) {
    alert('다시 시도해주세요.');
  }
});

// Enter키 입력시 button Click 이벤트
inputEl.addEventListener('keydown', () => {
  if (event.keyCode === 13) {
    buttonEl.click();
  }
});

const selectDate = listDateEl.textContent;

// 한자리 수 두자리로 만들기
const resDate = convertDate(selectDate);

renderTodo(todos, resDate);
getCalendar(date, todos);