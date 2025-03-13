import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Layout, Todo, TodoRtk, TodoRtkDetails, Auth, DataTable } from '@/pages'

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
      {
        path: '/auth',
        element: <Auth />,
      },
      {
        path: '/table',
        element: <DataTable />,
      },
    ],
  },
])

export { router }
