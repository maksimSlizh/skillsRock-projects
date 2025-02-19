import { TodoItem } from '@/pages/Todo/elements'
import { ITodo } from '@/types/interface'
import {
  useGetTodosQuery,
  useDeleteTodoMutation,
  useChangeStatusMutation,
  useChangeTodoMutation,
} from '@/api'
import style from '@/pages/Todo/todo.module.css'

const TodoRtkContainer = () => {
  const { data = [], isLoading } = useGetTodosQuery()
  const [deleteTodo] = useDeleteTodoMutation()
  const [changeStatus] = useChangeStatusMutation()
  const [changeTodo] = useChangeTodoMutation()

  const handleDelete = async (id: number) => {
    try {
      await deleteTodo(id).unwrap()
      console.log(`Задача ${id} удалена`)
    } catch (error) {
      console.error('Ошибка удаления', error)
    }
  }

  const handleComplete = async (id: number) => {
    const task = data.find((t) => t.id === id)
    if (!task) return

    try {
      await changeStatus({ id, iscompleted: !task.iscompleted }).unwrap()
      console.log(`Статус задачи ${id} изменен`)
    } catch (error) {
      console.error('Ошибка изменения статуса', error)
    }
  }

  const handleUpdateTodo = async (todo: ITodo) => {
    try {
      await changeTodo(todo).unwrap()
      console.log(`Задача ${todo.id} обновлена`)
    } catch (error) {
      console.error('Ошибка обновления задачи', error)
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <ul className={style.todo__list}>
      {[...data].reverse().map((task: ITodo) => (
        <TodoItem
          key={task.id}
          task={task}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
          handleUpdateTodo={handleUpdateTodo}
        />
      ))}
    </ul>
  )
}

export default TodoRtkContainer
