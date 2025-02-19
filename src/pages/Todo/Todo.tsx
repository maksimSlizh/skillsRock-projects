import { TodoContainer, TodoForm } from './elements'
import style from './todo.module.css'

const Todo = () => {
  return (
    <section className={style.todo}>
      <div className={style.todo__wrapper}>
        <div className={style.todo__header}>
          <h2>Todo List!</h2>
          <p>A simple react todo list app</p>
        </div>
        <TodoContainer />
        <TodoForm />
      </div>
    </section>
  )
}

export default Todo
