import React, { useState } from 'react'
import { UIButton, UIInput } from '@/ui'
import { SvgIcon } from '@/assets'
import { ITodo } from '@/types/interface'
import style from './TodoItem.module.css'

export interface TodoItemProps {
  task: ITodo
  handleDelete: (id: number) => void
  handleComplete: (id: number) => void
  handleChangeText?: (id: number, text: string) => void
  handleUpdateTodo?: (todo: ITodo) => void
}

const TodoItem: React.FC<TodoItemProps> = ({
  task,
  handleDelete,
  handleComplete,
  handleChangeText,
  handleUpdateTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(task.text)

  const handleSave = () => {
    if (editValue.trim()) {
      if (handleChangeText) {
        handleChangeText(task.id, editValue.trim())
      }
      if (handleUpdateTodo) {
        handleUpdateTodo({ ...task, text: editValue.trim() })
      }
      setIsEditing(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSave()
    }
  }

  return (
    <li className={style.item}>
      {isEditing ? (
        <UIInput
          className={`${style.input} ${task.iscompleted ? style.completed : ''}`}
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <UIInput
          className={`${style.input} ${task.iscompleted ? style.completed : ''}`}
          value={task.text}
          slotProps={{
            input: { readOnly: true },
          }}
          onClick={() => setIsEditing(true)}
        />
      )}

      <UIButton
        onClick={() => handleComplete(task.id)}
        icon={<SvgIcon type="completed" />}
      />
      <UIButton
        onClick={() => handleDelete(task.id)}
        icon={<SvgIcon type="delete" />}
      />
    </li>
  )
}

export default TodoItem
