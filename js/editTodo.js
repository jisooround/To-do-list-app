export default async function editTodo(editContent, id, order, done) {
  const res = await fetch(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${id}`, {
    method: "PUT",
    headers: {
      'content-type': 'application/json',
      'apikey': 'FcKdtJs202209',
      'username': 'KDT3_WooJiSoo'
    },
    body: JSON.stringify({
      title: `${editContent}`,
      done: done,
      order: `${order}`
    })
  });
  const todos = await res.json(editContent);

  return todos;
};