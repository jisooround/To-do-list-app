export default async function createTodo(todoEl, adt) {
  // const date = new Date(jisoo);
  console.log('createTodo'+adt);
  // console.log('ㄸㄷ'+date);
  const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'apikey': 'FcKdtJs202209',
      'username': 'KDT3_WooJiSoo'
    },
    body: JSON.stringify({
      title: `${todoEl}`,
      order: adt,
    })
  });
  const todos = await res.json();
  console.log(todos.title);
  console.log(todos);
  return todos;
}