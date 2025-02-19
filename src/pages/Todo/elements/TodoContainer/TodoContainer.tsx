import { useEffect } from 'react'
import { TodoItem } from '@/pages/Todo/elements'
import { ITodo } from '@/types/interface'
import { useAppDispatch, useAppSelector } from '@/store'
import { deleteTodo, completeTodo, changeTodo, getTodos } from '@/store/slice'
import { storage } from '@/helpers'
import style from '@/pages/Todo/todo.module.css'

const TodoContainer = () => {
  const dispatch = useAppDispatch()
  const todos = useAppSelector(getTodos)

  useEffect(() => {
    storage.set('todos', todos)
  }, [todos])

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id))
  }

  const handleComplete = (id: number) => {
    dispatch(completeTodo(id))
  }

  const handleChangeTodo = (id: number, text: string) => {
    const task = todos.find((todo) => todo.id === id)
    if (task) {
      dispatch(changeTodo({ ...task, text }))
    }
  }

  return (
    <ul className={style.todo__list}>
      {[...todos].reverse().map((task: ITodo) => (
        <TodoItem
          key={task.id}
          task={task}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
          handleChangeTodo={handleChangeTodo}
        />
      ))}
    </ul>
  )
}

export default TodoContainer
