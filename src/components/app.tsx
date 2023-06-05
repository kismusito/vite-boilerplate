import React from 'react'
import { Provider } from 'react-redux'
import store from 'modules/store'
import Dashboard from '@views/pages/dashboard'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import InvoiceProvider from '@views/ui/invoice-provider'

// Custom css
import 'assets/styles/global.css'

// Third party libraries
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const router = createBrowserRouter([{ path: '/', element: <Dashboard /> }])

function App (): JSX.Element {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer />
      <InvoiceProvider />
    </Provider>
  )
}

export default App
