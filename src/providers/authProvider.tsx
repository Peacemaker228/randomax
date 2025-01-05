import { createContext, FC, ReactNode, useEffect, useLayoutEffect, useState } from 'react'
import { authService } from '../services/auth.service'
import { toast } from 'react-toastify'
import { IAuthFormValues } from '../components/AuthForm/types'
import { tokenManage } from '../utils/tokenManage'

export interface IAuthContext {
  isAuthenticated: boolean
  register: (data: IAuthFormValues) => Promise<void>
  login: (data: IAuthFormValues) => Promise<void>
  logout: () => void
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined)

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const { accessToken } = tokenManage()

  useLayoutEffect(() => {
    if (accessToken) {
      setIsAuthenticated(true)
    }
  }, [accessToken])

  const login = async (data: IAuthFormValues) => {
    try {
      await authService.login(data)

      setIsAuthenticated(true)
    } catch {
      toast.error('Произошла ошибка при авторизации')
    }
  }

  const register = async (data: IAuthFormValues) => {
    try {
      await authService.register(data)

      setIsAuthenticated(true)

      toast.success('Вы успешно зарегистрировались')
    } catch {
      toast.error('Произошла ошибка при регистрации')
    }
  }

  const logout = async () => {
    await authService.logout()

    setIsAuthenticated(false)
  }

  return <AuthContext.Provider value={{ isAuthenticated, register, logout, login }}>{children}</AuthContext.Provider>
}
