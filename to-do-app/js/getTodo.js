export default async function getTodo(todoEl) {
  const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos', {
    method: "GET",
    headers: {
      'content-type': 'application/json',
      'apikey': 'FcKdtJs202209',
      'username': 'KDT3_WooJiSoo'
    },
  });
  const todos = await res.json(todoEl);

  console.log(todos);
  return todos;
};