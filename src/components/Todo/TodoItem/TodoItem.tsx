import React from 'react'
import { AppBotton, SvgIcon } from '../../../ui'
import { TodoItemProps } from '../../../types/interface'
import style from './TodoItem.module.css'

const TodoItem: React.FC<TodoItemProps>  = ({task, handleDelete, handleComplete}) => {
  return (
    <li className={style.item}>
      <p className={task.completed ? style.completed : ''}>{task.text}</p>
      <AppBotton onClick={() => handleComplete(task.id)} icon={<SvgIcon type="edit" />} />
      <AppBotton onClick={() => handleDelete(task.id)} icon={<SvgIcon type="delete" />} />
    </li>
  )
}

export default TodoItem
