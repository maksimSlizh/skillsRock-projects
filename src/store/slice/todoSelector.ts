import { RootState } from '@/store'

export const getTodos = (state: RootState) => {
  return state.todos.todos
}
