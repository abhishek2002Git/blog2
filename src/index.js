import React from 'react'
import ReactDOM from 'react-dom/client'
import AppProvider from './contexts/Context'
import APIProvider from './contexts/Apis'
import './index.css'
import App from './App'
import 'tw-elements'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ToastContainer />
    <AppProvider>
      <APIProvider>
        <App />
      </APIProvider>
    </AppProvider>
  </React.StrictMode>
)
