export default async function deleteTodo(id) {
  await fetch(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${id}`,{
    method: "DELETE",
    headers: {
      'content-type': 'application/json',
      'apikey': 'FcKdtJs202209',
      'username': 'KDT3_WooJiSoo'
  }});
};