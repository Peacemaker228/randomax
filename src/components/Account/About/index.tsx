import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import { useForm } from 'react-hook-form'
import { accountSchema, IAccountFormValues } from './types'
import { zodResolver } from '@hookform/resolvers/zod'
import { accountService } from '../../../services/account.service'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'
import styles from './styles.module.css'

export const About = () => {
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const { logout } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAccountFormValues>({
    defaultValues: { email: '' },
    resolver: zodResolver(accountSchema),
  })

  const onSubmit = async (data: IAccountFormValues) => {
    setIsLoading(true)

    try {
      await accountService.updateAccount(data)

      toast.success('Данные обновлены')
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data?.email[0])
      } else {
        toast.error('Произошла ошибка при обновлении данных')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleExit = () => {
    logout()

    navigate('/')
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input className={styles.input} type="text" {...register('email')} placeholder="Email" />
        <p className={styles.error}>{errors.email?.message}</p>
        <button disabled={isLoading} className={styles.submitBtn} type="submit">
          Обновить данные
        </button>
      </form>
      <button
        disabled={isLoading}
        className={styles.exitBtn}
        type="button"
        onClick={() => {
          handleExit()
        }}>
        Выход
      </button>
    </>
  )
}
