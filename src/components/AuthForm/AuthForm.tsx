import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { IAuthFormValues, authSchema } from './types'
import styles from './styles.module.css'

interface AuthFormProps {
  title: string
  buttonText: string
  onSubmit: (data: IAuthFormValues) => Promise<void>
  footerText: string
  footerActionText: string
  onFooterAction: () => void
}

export const AuthForm: FC<AuthFormProps> = ({
  title,
  buttonText,
  onSubmit,
  footerText,
  footerActionText,
  onFooterAction,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthFormValues>({
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(authSchema),
    mode: 'onSubmit',
  })

  return (
    <div className={styles.auth}>
      <h2>{title}</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input className={styles.input} type="text" {...register('email')} placeholder="Email" />
        <p className={styles.error}>{errors.email?.message}</p>

        <input className={styles.input} {...register('password')} placeholder="Пароль" type="password" />
        <p className={styles.error}>{errors.password?.message}</p>

        <button className={styles.submitBtn} type="submit">
          {buttonText}
        </button>
      </form>
      <p>{footerText}</p>
      <button className={styles.modeBtn} onClick={onFooterAction}>
        {footerActionText}
      </button>
    </div>
  )
}
