import axios from 'axios'

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => {
  const todo = res.data as Todo
  const id = todo.id
  const title = todo.title
  const completed = todo.completed
  logTodo(id, title, completed)
})

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    id: ${id}
    title: ${title}
    complited: ${completed}
  `);
}
