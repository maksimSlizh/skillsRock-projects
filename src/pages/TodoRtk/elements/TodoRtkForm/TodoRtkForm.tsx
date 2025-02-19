import React, { useState } from 'react'
import { UIButton, UIInput } from '@/ui'
import { useAddTodoMutation } from '@/api'
import { ITodo as TodoType } from '@/types/interface'
import style from '@/pages/Todo/elements/TodoForm/TodoForm.module.css'

const TodoRtkForm = () => {
  const [addTodo] = useAddTodoMutation()

  const [value, setValue] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('submit')
    e.preventDefault()

    if (!value.trim()) return

    const newTask: TodoType = {
      id: Date.now(),
      text: value,
      iscompleted: false,
    }

    await addTodo(newTask)
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <UIInput value={value} onChange={(e) => setValue(e.target.value)} />
      <UIButton type="submit">ADD TODO</UIButton>
    </form>
  )
}

export default TodoRtkForm
