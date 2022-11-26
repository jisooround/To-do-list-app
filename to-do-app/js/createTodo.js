
export default async function createTodo(todoEl) {
  const date = new Date();
  const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'apikey': 'FcKdtJs202209',
      'username': 'KDT3_WooJiSoo'
    },
    body: JSON.stringify({
      title: `${todoEl}`,
      updatedAt: `${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`,
    })
  });
  const todos = await res.json();
  console.log(todos.title);
  console.log(todos);
  return todos;
}