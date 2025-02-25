import { TodoRtkItem } from '@/pages/TodoRtk/elements'
import { ITodo } from '@/types/interface'
import {
  useGetTodosQuery,
  useDeleteTodoMutation,
  useChangeStatusMutation,
} from '@/api'
import style from '@/pages/Todo/todo.module.css'

const TodoRtkContainer = () => {
  const { data = [], isLoading } = useGetTodosQuery()
  const [deleteTodo] = useDeleteTodoMutation()
  const [changeStatus] = useChangeStatusMutation()

  const handleDelete = async (id: number) => {
    try {
      await deleteTodo(id).unwrap()
    } catch (error) {
      throw new Error('Error deleting todo')
    }
  }

  const handleComplete = async (id: number) => {
    const task = data.find((t) => t.id === id)
    if (!task) return

    try {
      await changeStatus({ id, iscompleted: !task.iscompleted }).unwrap()
    } catch (error) {
      throw new Error('Error changing status')
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <ul className={style.todo__list}>
      {[...data].reverse().map((task: ITodo) => (
        <TodoRtkItem
          key={task.id}
          taskId={task.id}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        />
      ))}
    </ul>
  )
}

export default TodoRtkContainer
