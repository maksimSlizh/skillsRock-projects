import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface IUser {
  id: string;
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  company: string;
}

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
          ? [...result.map(({ id }) => ({ type: 'User' as const, id })), { type: 'User', id: 'LIST' }]
          : [{ type: 'User', id: 'LIST' }],
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

export const { useGetUsersQuery, useAddUserMutation } = usersApi
