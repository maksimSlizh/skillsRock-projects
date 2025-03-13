import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from '@/types/interface'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/',
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], void>({
      query: () => 'users',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'User' as const, id })),
              { type: 'User', id: 'LIST' },
            ]
          : [{ type: 'User', id: 'LIST' }],
    }),
    getUsersByFilter: builder.query<IUser[], Partial<IUser>>({
      query: (params) => {
        const urlParams = new URLSearchParams()

        Object.keys(params).forEach((key) => {
          const typedKey = key as keyof IUser
          if (params[typedKey] && params[typedKey]?.toString().trim() !== '') {
            urlParams.append(`${typedKey}`, params[typedKey] as string)
          }
        })

        const queryString = urlParams.toString()

        return queryString ? `users?${queryString}` : 'users'
      },
      providesTags: ['User'],
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: 'users',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: [{ type: 'User', id: 'LIST' }],
    }),
  }),
})

export const {
  useGetUsersQuery,
  useLazyGetUsersByFilterQuery,
  useAddUserMutation,
} = usersApi
