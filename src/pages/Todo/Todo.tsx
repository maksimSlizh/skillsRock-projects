import React, { useState, useEffect } from 'react'
import { TodoItem, TodoForm } from '../../components/Todo'
import { Task } from '../../types/interface'
import { storage } from '../../helpers/storage'
import style from './todo.module.css'

const Todo = () => {
  const [tasks, setTask] = useState<Task[]>(storage.get<Task[]>('tasks', []))
  const [value, setValue] = useState<string>('')

  useEffect(() => {
    storage.set('tasks', tasks);
  }, [tasks])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newTask: Task = {
      id: Date.now(),
      text: value,
      completed: false
    }

    if (value.trim() === '') return

    setTask([...tasks, newTask])
    setValue('')
  }

  const handleDelete = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id)
    setTask(updatedTasks)
  }

  const handleComplete = (id: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTask(updatedTasks)
  }

  return (
    <section className={style.todo}>
      <div className={style.todo__wrapper}>
        <div className={style.todo__header}>
          <h2>Todo List!</h2>
          <p>A simple react todo list app</p>
        </div>
        <ul className={style.todo__list}>
          {[...tasks].reverse().map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
            />
          ))}
        </ul>
        <TodoForm value={value} setValue={setValue} handleSubmit={handleSubmit} />
      </div>
    </section>
  )
}

export default Todo
