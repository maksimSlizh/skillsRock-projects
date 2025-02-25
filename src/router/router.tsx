import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Layout } from '@/components'
import { Todo, TodoRtk, TodoRtkDetails } from '@/pages'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/todo" />,
      },
      {
        path: '/todo',
        element: <Todo />,
      },
      {
        path: '/todo-rtk',
        element: <TodoRtk />,
      },
      {
        path: '/todo-rtk/:id',
        element: <TodoRtkDetails />,
      },
    ],
  },
])

export { router }
