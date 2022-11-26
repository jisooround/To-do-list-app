import deleteTodo from "./deleteTodo";
import getTodo from "./getTodo";

export default function renderTodo(todos) {
  const listEl = document.getElementById('list-wrap');
  listEl.innerHTML = '';
  for(let i = 0; i < todos.length ; i++){
    const contentEl = document.createElement('div');
    contentEl.className = 'content';
    const itemEl = document.createElement('div');
    itemEl.className = 'item'
    const checkEl = document.createElement('input');
    checkEl.type = "checkbox";
    checkEl.name = "todo";
    const pEl = document.createElement('p');
    pEl.className ='todo';
    pEl.textContent = `${todos[i].title}`;
    const delEl = document.createElement('p');
    delEl.className = 'delete-btn';
    delEl.textContent = 'Del'

    contentEl.append(checkEl);
    contentEl.append(pEl);
    itemEl.append(contentEl);
    itemEl.append(delEl);
    listEl.append(itemEl);

    const id = todos[i].id;
    delEl.addEventListener("click", async () => {
      await deleteTodo(id);
      const todos = await getTodo();
      renderTodo(todos);
      });
    };
  };