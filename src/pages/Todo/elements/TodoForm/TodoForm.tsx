import React, { useState } from 'react'
import { UIButton, UIInput } from '@/ui'
import { useAppDispatch } from '@/store'
import { addTodo } from '@/store/slice'
import { ITodo as TodoType } from '@/types/interface'
import style from './TodoForm.module.css'

const TodoForm = () => {
  const dispatch = useAppDispatch()
  const [value, setValue] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!value.trim()) return

    const newTask: TodoType = {
      id: Date.now(),
      text: value,
      iscompleted: false,
    }

    dispatch(addTodo(newTask))
    setValue('')
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <UIInput value={value} onChange={(e) => setValue(e.target.value)} />
      <UIButton type="submit">ADD TODO</UIButton>
    </form>
  )
}

export default TodoForm
