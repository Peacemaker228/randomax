import { useState } from 'react'
import { THandleChangeType } from '../types'

export const useInputState = () => {
  const [inputState, setInputState] = useState({
    from: '',
    to: '',
    repeat: false,
  })

  const handleChange: THandleChangeType = (key, value) => {
    setInputState((prev) => ({
      ...prev,
      [key]: key === 'repeat' ? Boolean(value) : String(value).replace(/[^0-9]/g, ''),
    }))
  }

  return { inputState, handleChange }
}
