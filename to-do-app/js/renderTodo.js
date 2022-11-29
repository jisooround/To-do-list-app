import deleteTodo from "./deleteTodo";
import editTodo from "./editTodo";
import getTodo from "./getTodo";

export default function renderTodo(todos, changeToSix) {
  const listEl = document.getElementById('list-wrap');
  listEl.innerHTML = '';
  for (let i = 0; i < todos.length; i++) {
    const contentEl = document.createElement('div');
    contentEl.className = 'content';
    const itemEl = document.createElement('div');
    itemEl.className = 'item'
    const checkEl = document.createElement('input');
    checkEl.type = "checkbox";
    checkEl.name = "todo";
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

    // 삭제 버튼 클릭 이벤트
    const id = todos[i].id;
    delEl.addEventListener("click", async () => {
      await deleteTodo(id);
      const todos = await getTodo();
      renderTodo(todos, changeToSix);
    });

    // 표시된 날짜와 같은 날의 목록만 노출
    if (todos[i].order == changeToSix) {
      // console.log('같다');
    } else {
      // console.log('다르다');
      itemEl.classList.add('none');
    };

    // 수정
    itemEl.addEventListener("click", () => {
      pEl.contentEditable = "true";
      const id = `${todos[i].id}`;
      const order = `${todos[i].order}`
      console.log('수정시도 ' + `${todos[i].title}`);
      itemEl.addEventListener('keydown', (event) => {
        try {
          if (event.keyCode === 13) {
            pEl.contentEditable = "false";
            console.log('수정 끝');
            const editContent = pEl.textContent;
            editTodo(editContent, id, order);
            console.log(editContent);
          }
        } catch {

        }
      })
    })
  }
};