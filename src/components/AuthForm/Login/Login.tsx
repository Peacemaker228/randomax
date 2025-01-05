import { FC } from 'react'
import { AuthForm } from '../AuthForm'
import { IAuthModeProps } from '../types'
import { useAuth } from '../../../hooks/useAuth'

export const Login: FC<IAuthModeProps> = ({ setMode }) => {
  const { login } = useAuth()

  return (
    <AuthForm
      title="Авторизация"
      buttonText="Войти"
      onSubmit={login}
      footerText="У вас еще нет аккаунта?"
      footerActionText="Зарегистрироваться"
      onFooterAction={() => setMode('register')}
    />
  )
}
