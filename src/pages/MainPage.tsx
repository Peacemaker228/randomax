import { useEffect, useRef, useState } from 'react'
import { useInputState } from '../hooks'
import { generateNumber } from '../utils'
import { Axenix, DefaultContent, OtherContent } from '../components'
import styles from './styles.module.css'

type TState = 'default' | 'settings' | 'start'

export const MainPage = () => {
  const [state, setState] = useState<TState>('default')
  const [rolling, setRolling] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [generatedNumbers, setGeneratedNumbers] = useState<number[]>([])
  const [currentNumber, setCurrentNumber] = useState<number | null>(null)

  const { inputState, handleChange } = useInputState()
  const wrapperRef = useRef<HTMLDivElement>(null)
  const numberRef = useRef<HTMLDivElement | null>(null)

  const handleGenerateNumber = () => {
    if (rolling) return

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

      const newFinalNumber = generateNumber(fromNum, toNum, repeat, generatedNumbers)

      setRolling(true)
      let tempNumber = fromNum

      const interval = setInterval(() => {
        tempNumber = Math.floor(Math.random() * 99)
        setCurrentNumber(tempNumber)
      }, 100)

      setTimeout(() => {
        clearInterval(interval)
        setGeneratedNumbers([newFinalNumber, ...generatedNumbers])
        setCurrentNumber(newFinalNumber)
        setRolling(false)
      }, 1500)

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
          {!generatedNumbers.length && !currentNumber && <h2 className={styles.title}>{getTitle()}</h2>}
          {(!!generatedNumbers.length || currentNumber) && (
            <div ref={numberRef} className={`${styles.numberContainer} ${rolling ? styles.spinning : ''}`}>
              <span className={`${styles.number} ${styles.main}`}>{currentNumber}</span>
            </div>
          )}
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
