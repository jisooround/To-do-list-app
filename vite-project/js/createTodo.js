export default async function createTodo() {
  const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'apikey': 'FcKdtJs202209',
      'username': 'KDT3_WooJiSoo'
    },
    body: JSON.stringify({
      title: [
        {
          "id": "mnIwaAPIAE1ayQmqekiR",
          "order": 0,
          "title": [
            {
              "id": "mnIwaAPIAE1ayQmqekiR",
              "order": 0,
              "title": "JS 공부하기",
              "done": false,
              "createdAt": "2021-10-28T05:18:51.868Z",
              "updatedAt": "2021-10-28T05:18:51.868Z"
            },
            {
              "id": "tMzPImGoWtRdJ6yyVv2y",
              "order": 1,
              "title": "과제 PullRequest(PR) 생성",
              "done": true,
              "createdAt": "2021-10-28T04:16:53.980Z",
              "updatedAt": "2021-10-28T09:40:17.955Z"
            },
            {
              "id": "Rq8BebKihCgteHHhMIRS",
              "order": 2,
              "title": "API 스터디",
              "done": false,
              "createdAt": "2021-10-28T04:17:02.510Z",
              "updatedAt": "2021-10-28T04:17:02.510Z"
            }
          ],
          "done": false,
          "createdAt": "2021-10-28T05:18:51.868Z",
          "updatedAt": "2021-10-28T05:18:51.868Z"
        },
        {
          "id": "tMzPImGoWtRdJ6yyVv2y",
          "order": 1,
          "title": "과제 PullRequest(PR) 생성",
          "done": true,
          "createdAt": "2021-10-28T04:16:53.980Z",
          "updatedAt": "2021-10-28T09:40:17.955Z"
        },
        {
          "id": "Rq8BebKihCgteHHhMIRS",
          "order": 2,
          "title": "API 스터디",
          "done": false,
          "createdAt": "2021-10-28T04:17:02.510Z",
          "updatedAt": "2021-10-28T04:17:02.510Z"
        }
      ]
    })
  })
  const json = await res.json()
  console.log(json)

  return json
};