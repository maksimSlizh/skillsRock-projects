import { TodoRtkContainer, TodoRtkForm } from './elements'
import style from '@/pages/Todo/todo.module.css'

const TodoRtk = () => {
  return (
    <section className={style.todo}>
      <div className={style.todo__wrapper}>
        <div className={style.todo__header}>
          <h2>Todo RTK List!</h2>
          <p>A simple react todo list app</p>
        </div>
        <TodoRtkContainer />
        <TodoRtkForm />
      </div>
    </section>
  )
}

export default TodoRtk
