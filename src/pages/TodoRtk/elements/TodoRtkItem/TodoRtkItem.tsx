import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UIButton} from '@/ui'
import { TodoRtkInput } from '../TodoRtkInput'
import { SvgIcon } from '@/assets'
import style from './TodoRtkItem.module.css'

export interface TodoItemProps {
  taskId: number
  handleDelete: (id: number) => void
  handleComplete: (id: number) => void
}

const TodoRtkItem: React.FC<TodoItemProps> = ({
  taskId,
  handleDelete,
  handleComplete,
}) => {

  const navigate = useNavigate()

  return (
    <li className={style.item}>
      <TodoRtkInput taskId={taskId} />

      <UIButton
        onClick={() => handleComplete(taskId)}
        icon={<SvgIcon type="completed" />}
      />
      <UIButton
        onClick={() => handleDelete(taskId)}
        icon={<SvgIcon type="delete" />}
      />

      <UIButton
        onClick={() => navigate(`/todo-rtk/${taskId}`)}
        icon={<SvgIcon type="goToTodo" />}
      />
    </li>
  )
}

export default TodoRtkItem
