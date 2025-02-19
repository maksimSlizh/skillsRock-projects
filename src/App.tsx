import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { setupStore } from '@/store'
import { router } from '@/router'

export const App = () => {
  return (
    <>
      <Provider store={setupStore()}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}
