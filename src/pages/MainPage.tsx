import { useEffect, useRef, useState } from 'react'
import { useInputState } from '../hooks'
import { generateNumber } from '../utils'
import { Axenix, DefaultContent, OtherContent } from '../components'
import styles from './styles.module.css'

type TState = 'default' | 'settings' | 'start'

export const MainPage = () => {
  const [state, setState] = useState<TState>('default')
  const [generatedNumbers, setGeneratedNumbers] = useState<number[]>([])
  const [errorText, setErrorText] = useState('')
  const [rolling, setRolling] = useState(false)
  const [currentNumber, setCurrentNumber] = useState<number | null>(null)

  const { inputState, handleChange } = useInputState()
  const wrapperRef = useRef<HTMLDivElement>(null)
  const numberRef = useRef<HTMLDivElement | null>(null)

  const handleGenerateNumber = () => {
    if (rolling) return // Блокируем повторное нажатие

    const { from, to, repeat } = inputState

    try {
      const fromNum = Number(from)
      const toNum = Number(to)

      if (!fromNum || !toNum) {
        throw new Error('Введите оба значения!')
      }

      if (fromNum >= toNum) {
        throw new Error('Минимальное значение должно быть меньше максимального')
      }

      setRolling(true) // Начинаем вращение
      let tempNumber = fromNum

      const interval = setInterval(() => {
        tempNumber = Math.floor(Math.random() * (toNum - fromNum + 1)) + fromNum
        setCurrentNumber(tempNumber) // Постоянно меняем число
      }, 50) // Скорость вращения

      setTimeout(() => {
        clearInterval(interval)
        const finalNumber = generateNumber(fromNum, toNum, repeat, generatedNumbers)
        setGeneratedNumbers([finalNumber, ...generatedNumbers])
        setCurrentNumber(finalNumber)
        setRolling(false) // Останавливаем рулетку
      }, 2000) // 2 секунды вращения

      setErrorText('')
    } catch (error: any) {
      setErrorText(error.message)
    }
  }

  const handleReset = () => {
    setGeneratedNumbers([])
    setErrorText('')
    setState('start')
    setCurrentNumber(null)
  }

  useEffect(() => {
    if (inputState.from && inputState.to) {
      setState('start')
    }
  }, [inputState])

  const getTitle = () => {
    switch (state) {
      case 'settings':
        return 'Выберите настройки для продолжения'
      case 'start':
        return 'На старт!'
      default:
        return 'Добро пожаловать в randomizer'
    }
  }

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <div className={styles.container}>
        <Axenix />
        <div className={styles.textContainer}>
          {!generatedNumbers.length && <h2 className={styles.title}>{getTitle()}</h2>}
          <div ref={numberRef} className={`${styles.numberContainer} ${rolling ? styles.spinning : ''}`}>
            <span className={styles.number}>{currentNumber ?? '—'}</span>
          </div>
          {!!generatedNumbers.length && (
            <div className={`${styles.numberContainer} ${styles.oldNumbers}`}>
              {generatedNumbers.slice(1, 6).map((num, index) => (
                <span key={index} className={`${styles.number} ${styles.small}`}>
                  {num}
                </span>
              ))}
            </div>
          )}
          {state === 'default' && <p className={styles.description}>Генератор случайных чисел</p>}
          {state !== 'default' && <div className={styles.space} />}
        </div>
        {state === 'default' ? (
          <DefaultContent onStart={() => setState('settings')} />
        ) : (
          <OtherContent
            inputState={inputState}
            onGenerate={handleGenerateNumber}
            onChange={handleChange}
            errorText={errorText}
            onReset={handleReset}
          />
        )}
      </div>
    </div>
  )
}
