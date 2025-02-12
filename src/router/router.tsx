import { createBrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Todo } from "../pages/Todo";


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/todo" />,
      },
      {
        path: "/todo",
        element: <Todo />,
      }
    ]
  }
]);

export { router }
