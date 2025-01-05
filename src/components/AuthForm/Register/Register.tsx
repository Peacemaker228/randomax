import { FC } from 'react'
import { IAuthModeProps } from '../types'
import { AuthForm } from '../AuthForm'
import { useAuth } from '../../../hooks/useAuth'

export const Register: FC<IAuthModeProps> = ({ setMode }) => {
  const { register } = useAuth()

  return (
    <AuthForm
      title="Регистрация"
      buttonText="Зарегистрироваться"
      onSubmit={register}
      footerText="Уже зарегистрированы?"
      footerActionText="Войти"
      onFooterAction={() => setMode('login')}
    />
  )
}
