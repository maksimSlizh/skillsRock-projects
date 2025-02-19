import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { storage } from '@/helpers'
import { ITodo } from '@/types/interface'

interface TodosState {
  todos: ITodo[] | []
}

const initialState: TodosState = {
  todos: storage.get<ITodo[]>('todos', []),
}

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo(state, action: PayloadAction<ITodo>) {
      state.todos = [...state.todos, action.payload]
    },
    deleteTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    completeTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          console.log('todo', todo.iscompleted)
          return { ...todo, iscompleted: !todo.iscompleted }
        }
        return todo
      })
    },
    changeTodo(state, action: PayloadAction<ITodo>) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload
        }
        return todo
      })
    },
  },
})

export const { addTodo, deleteTodo, completeTodo, changeTodo } =
  todosSlice.actions
export default todosSlice.reducer
