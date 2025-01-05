import { z } from 'zod'

export const authSchema = z.object({
  email: z.string().email('Пожалуйста, введите корректный адрес электронной почты'),
  password: z.string().min(8, 'Пароль должен быть не менее 8 символов'),
})

export type IAuthFormValues = z.infer<typeof authSchema>

export interface IAuthModeProps {
  setMode: (mode: 'login' | 'register') => void
}
