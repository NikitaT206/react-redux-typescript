exports.__esModule = true
var axios_1 = require('axios')
axios_1['default']
  .get('https://jsonplaceholder.typicode.com/todos/1')
  .then(function (res) {
    var todo = res.data
    var id = todo.id
    var title = todo.title
    var completed = todo.completed
    console.log(
      '\n    id: '
        .concat(id, '\n    title: ')
        .concat(title, '\n    complited: ')
        .concat(completed, '\n  '),
    )
  })
