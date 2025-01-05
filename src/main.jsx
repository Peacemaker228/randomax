import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/App.css'
import { ToastContainer } from 'react-toastify'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <ToastContainer
      position="top-right"
      closeOnClick
      autoClose={3000}
      hideProgressBar
      draggable
      theme="light"
      limit={10}
    />
    <App />
  </BrowserRouter>,
)
