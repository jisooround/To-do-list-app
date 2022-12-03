import getCalendar from "./getCalendar.js";
import renderTodo from "./renderTodo.js";
import convertDate from "./convertDate.js";
import { state } from "../store/index.js"
import { createTodo, getTodo } from "./todoAPI.js";

const listDateEl = document.getElementById("list-date");
const inputEl = document.getElementById('todo-input');
const buttonEl = document.getElementById('todo-btn');
const todoEl = inputEl.value;

// To do 날짜 초기 값
const date = new Date();
listDateEl.textContent = `${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`;

// 새로고침 시 실행
window.addEventListener("DOMContentLoaded", async () => {
  let todos = await getTodo(todoEl);

  // 날짜 초기 값 한자리 수 두자리로 만들기
  const selectDate = listDateEl.textContent;
  const resDate = convertDate(selectDate);

  renderTodo(todos, resDate);
  getCalendar(date, todos);
});

// To do 입력
buttonEl.addEventListener("click", async (event) => {
  try {
    event.preventDefault();

    // input창에 입력
    const todoEl = inputEl.value;

    // 아무 내용도 입력하지 않을 경우
    if (todoEl === "") {
      alert('내용을 입력하세요');
      return;
    };

    // To do에 표시된 날짜
    const selectDate = listDateEl.textContent;

    // 날짜 한자리 수 두자리로 만들기
    const resDate = convertDate(selectDate);

    // 입력 내용 API 추가
    await createTodo(todoEl, resDate);

    // 새로 render
    const todos = await getTodo(todoEl);
    renderTodo(todos, resDate);
    getCalendar(state.selectedDate, todos);

    // Input창 초기화
    inputEl.value = '';

  } catch (error) {
    // 실패 처리
    alert('다시 시도해주세요.');
  }
});

// Enter키 입력시 button Click 이벤트
inputEl.addEventListener('keydown', () => {
  if (event.keyCode === 13) {
    buttonEl.click();
  }
});
