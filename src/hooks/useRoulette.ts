import { useState, useRef } from 'react'
import { generateNumber } from '../utils'
/* eslint-disable @typescript-eslint/no-explicit-any */
export const useRoulette = (inputState: any) => {
  const [isRolling, setIsRolling] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [generatedNumbers, setGeneratedNumbers] = useState<number[]>([])
  const [currentNumber, setCurrentNumber] = useState<number | null>(null)
  const [finalNumber, setFinalNumber] = useState<number | null>(null)

  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const startRolling = () => {
    if (isRolling) return

    const { from, to, repeat } = inputState

    try {
      const fromNum = Number(from)
      const toNum = Number(to)

      if (!fromNum || !toNum) throw new Error('Введите оба значения!')
      if (fromNum >= toNum) throw new Error('Минимальное значение должно быть меньше максимального')

      const newFinalNumber = generateNumber(fromNum, toNum, repeat, generatedNumbers)
      setFinalNumber(newFinalNumber)
      setIsRolling(true)

      intervalRef.current = setInterval(() => {
        setCurrentNumber(Math.floor(Math.random() * 98) + 1) // 1 - 98
      }, 100)

      setErrorText('')
    } catch (error: any) {
      setErrorText(error.message)
    }
  }

  const stopRolling = () => {
    if (!isRolling || !intervalRef.current) return

    clearInterval(intervalRef.current)
    setCurrentNumber(finalNumber)
    setGeneratedNumbers([finalNumber!, ...generatedNumbers])
    setIsRolling(false)
  }

  const reset = () => {
    setGeneratedNumbers([])
    setErrorText('')
    setCurrentNumber(null)
    setFinalNumber(null)

    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    setIsRolling(false)
  }

  return {
    isRolling,
    errorText,
    generatedNumbers,
    currentNumber,
    startRolling,
    stopRolling,
    reset,
  }
}
