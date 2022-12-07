import { getTodo, editTodo, deleteTodo } from "./todoAPI.js";
import { state } from "../store/index.js"
import getCalendar from "./getCalendar";

export default function renderTodo(todos, resDate) {
  const listEl = document.getElementById('list-wrap');
  listEl.innerHTML = '';

  // To do list 랜더
  for (let i = 0; i < todos.length; i++) {
    const contentEl = document.createElement('div');
    contentEl.className = 'content';

    const itemEl = document.createElement('div');
    itemEl.className = 'item'

    const checkEl = document.createElement('input');
    checkEl.type = "checkbox";
    checkEl.name = "todo";
    let done = false;
    if (todos[i].done) {
      checkEl.checked = true;
    }

    const pEl = document.createElement('p');
    pEl.className = 'todo';
    pEl.textContent = `${todos[i].title}`;
    pEl.contentEditable = "false";

    const delEl = document.createElement('p');
    delEl.className = 'delete-btn';
    delEl.textContent = 'Del'

    contentEl.append(checkEl);
    contentEl.append(pEl);
    itemEl.append(contentEl);
    itemEl.append(delEl);
    listEl.append(itemEl);

    // 삭제
    let deleting = false;
    const id = todos[i].id;
    delEl.addEventListener("click", async () => {
      event.preventDefault();
      try {
        if (deleting) return;
        deleting = true;
        await deleteTodo(id);
        const todos = await getTodo();
        renderTodo(todos, resDate);
        getCalendar(state.selectedDate, todos);
      } catch (error) {
        deleting = false;
        alert('삭제 실패. 다시 시도해주세요.')
      } finally {
        deleting = false;
      }
    });

    // 표시된 날짜와 같은 날의 목록만 노출
    if (todos[i].order == resDate) {} else {
      itemEl.classList.add('none');
    };

    // Done 버튼
    checkEl.addEventListener('change', () => {
      const id = `${todos[i].id}`;
      const order = `${todos[i].order}`;
      const editContent = pEl.textContent;
      editTodo(editContent, id, order, done);
    })

    // To do 수정
    itemEl.addEventListener("click", () => {
      const id = `${todos[i].id}`;
      const order = `${todos[i].order}`;
      pEl.contentEditable = "true";
      checkEl.checked ? done = true : done = false;
      itemEl.addEventListener('keydown', (event) => {
        try {
          if (event.keyCode === 13) {
            pEl.contentEditable = "false";
            const editContent = pEl.textContent;
            editTodo(editContent, id, order, done);
          }
        } catch (error) {
          alert('수정 실패. 다시 시도해주세요.')
        }
      })
    })
  }
};