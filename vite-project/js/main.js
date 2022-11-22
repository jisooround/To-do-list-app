import createTodo from "./createTodo.js"
import getCalendar from "./getCalendar.js"

// 최초 호출
// createTodo();
getCalendar();
const date = new Date();
const listDateEl = document.getElementById("list-date");

listDateEl.textContent = `${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`
