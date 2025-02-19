import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ITodo } from '@/types/interface'

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/',
  }),
  tagTypes: ['Todo'],
  endpoints: (builder) => ({
    getTodos: builder.query<ITodo[], void>({
      query: () => 'todos',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Todo' as const, id })),
              { type: 'Todo', id: 'LIST' },
            ]
          : [{ type: 'Todo', id: 'LIST' }],
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: 'todos',
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: [{ type: 'Todo', id: 'LIST' }],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Todo', id: 'LIST' }],
    }),
    changeStatus: builder.mutation({
      query: ({ id, iscompleted }) => ({
        url: `todos/${id}`,
        method: 'PATCH',
        body: { iscompleted },
      }),
      invalidatesTags: [{ type: 'Todo', id: 'LIST' }],
    }),
    changeTodo: builder.mutation({
      query: (todo) => ({
        url: `todos/${todo.id}`,
        method: 'PUT',
        body: todo,
      }),
      invalidatesTags: [{ type: 'Todo', id: 'LIST' }],
    }),
  }),
})

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useChangeStatusMutation,
  useChangeTodoMutation,
} = todosApi
