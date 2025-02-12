import React from 'react'
import { AppBotton, UIInput } from '../../../ui'
import { TodoFormProps } from '../../../types/interface'
import style from './TodoForm.module.css'

const TodoForm: React.FC<TodoFormProps> = ({value, setValue, handleSubmit}) => {
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <UIInput value={value} onChange={(e) => setValue(e.target.value)} />
      <AppBotton type="submit">ADD TODO</AppBotton>
    </form>
  )
}

export default TodoForm
