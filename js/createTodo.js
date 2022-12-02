export default async function createTodo(todoEl, resDate) {
  const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'apikey': 'FcKdtJs202209',
      'username': 'KDT3_WooJiSoo'
    },
    body: JSON.stringify({
      title: `${todoEl}`,
      order: resDate,
    })
  });
  const todos = await res.json();

  return todos;
}