import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { todosSlice } from '@/store/slice'
import { todosApi } from '@/api'
// import auth from './slices/auth/auth'

const rootReducer = combineReducers({
  todos: todosSlice,
  [todosApi.reducerPath]: todosApi.reducer,
  // auth
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(todosApi.middleware),
    // .concat(usersApi.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
