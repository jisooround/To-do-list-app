import createTodo from "./createTodo.js";
import getCalendar from "./getCalendar.js";
import getTodo from "./getTodo.js";
import renderTodo from "./renderTodo.js";

// 최초 선언 & 호출
const date = new Date();
const listDateEl = document.getElementById("list-date");
const inputEl = document.getElementById('todo-input');
const buttonEl = document.getElementById('todo-btn');
const todoEl = inputEl.value;
let todos = await getTodo(todoEl);

listDateEl.textContent = `${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`;

// todo 입력
buttonEl.addEventListener("click", async (event) => {
  try {
    event.preventDefault();
    const todoEl = inputEl.value;
    // 아무 내용도 입력하지 않을 경우
    if (todoEl === "") {
      alert('내용을 입력하세요');
    }
    // 입력
    else {
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
      inputEl.value = '';

      getCalendar(date, todos);
    }
  } catch {
    alert('할 일이 추가되지 않았습니다.');
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
getCalendar(date, todos);