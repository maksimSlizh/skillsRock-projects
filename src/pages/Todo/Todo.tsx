import { TodoContainer, TodoForm } from './elements'
import style from './todo.module.css'

const Todo = () => {
  return (
    <div className={style.todo}>
      <div className={style.todo__header}>
        <h2>Todo List!</h2>
        <p>A simple react todo list app</p>
      </div>
      <TodoContainer />
      <TodoForm />
    </div>
  )
}

export default Todo
