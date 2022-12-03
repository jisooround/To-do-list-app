import { API_url, headers } from '../store/index.js';

// 추가
export async function createTodo(todoEl, resDate) {
  const res = await fetch(API_url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      title: `${todoEl}`,
      order: resDate,
    })
  });
  const todos = await res.json();
  return todos;
}

// 불러오기
export async function getTodo(todoEl) {
  const res = await fetch(API_url, {
    method: "GET",
    headers: headers,
  });
  const todos = await res.json(todoEl);
  return todos;
};

// 수정
export async function editTodo(editContent, id, order, done) {
  const res = await fetch(API_url + `${id}`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify({
      title: `${editContent}`,
      done: done,
      order: `${order}`
    })
  });
  const todos = await res.json(editContent);
  return todos;
};

// 삭제
export async function deleteTodo(id) {
  await fetch(API_url + `${id}`, {
    method: "DELETE",
    headers: headers
  });
};