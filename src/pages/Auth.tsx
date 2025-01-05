import { useState } from 'react'
import { Login } from '../components/AuthForm/Login/Login'
import { Register } from '../components/AuthForm/Register/Register'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export const Auth = () => {
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const { isAuthenticated } = useAuth()

  const navigate = useNavigate()

  if (isAuthenticated) {
    navigate('/')
  }

  if (mode === 'register') {
    return <Register setMode={setMode} />
  }

  return <Login setMode={setMode} />
}
