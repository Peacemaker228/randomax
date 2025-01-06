import { z } from 'zod'

export const accountSchema = z.object({
  email: z.string().email('Пожалуйста, введите корректный адрес электронной почты'),
})

export type IAccountFormValues = z.infer<typeof accountSchema>
