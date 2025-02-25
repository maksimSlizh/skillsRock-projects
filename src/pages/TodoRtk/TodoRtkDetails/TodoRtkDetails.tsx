import React from 'react'
import { useParams } from 'react-router-dom'
import style from './TodoRtkDetails.module.css'

const TodoRtkDetails: React.FC = () => {
  const { id } = useParams()

  return (
    <section className={style.todo}>
      <div className={style.card}>
        <h2>Todo Details</h2>
        <p>Todo ID: {id}</p>
      </div>
    </section>
  )
}

export default TodoRtkDetails
