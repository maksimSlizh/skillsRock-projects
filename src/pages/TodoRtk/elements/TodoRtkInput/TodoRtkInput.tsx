import React, { useState, useEffect } from 'react'
import { useChangeTodoMutation, useGetTodosQuery } from '@/api'
import { UIInput } from '@/ui'
import style from './TodoRtkInput.module.css'

type TodoRtkInputProps = {
  taskId: number
}

const TodoRtkInput: React.FC<TodoRtkInputProps> = ({ taskId }) => {
  const { data: todos = [] } = useGetTodosQuery()
  const task = todos.find((t) => t.id === taskId)

  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(task?.text || '')

  const [changeTodo] = useChangeTodoMutation()

  useEffect(() => {
    if (task) {
      setEditValue(task.text)
    }
  }, [task])

  const handleUpdateTodo = async () => {
    if (task && editValue.trim() && editValue.trim() !== task.text) {
      try {
        await changeTodo({ id: task.id, text: editValue.trim() }).unwrap()
      } catch (error) {
        console.error('Ошибка обновления задачи', error)
      }
    }
    setIsEditing(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleUpdateTodo()
    }
  }

  if (!task) {
    return <div className={style.error}>Ошибка загрузки задачи</div>
  }

  return (
    <>
      {isEditing ? (
        <UIInput
          className={`${style.input} ${task.iscompleted ? style.completed : ''}`}
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleUpdateTodo}
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
    </>
  )
}

export default TodoRtkInput
