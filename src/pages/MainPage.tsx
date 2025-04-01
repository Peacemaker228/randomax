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
  const [animate, setAnimate] = useState(false)

  const { inputState, handleChange } = useInputState()

  const wrapperRef = useRef<HTMLDivElement>(null)
  const sexRef = useRef<HTMLDivElement>(null)
  const numberRef = useRef<HTMLDivElement | null>(null)

  const handleGenerateNumber = () => {
    const { from, to, repeat } = inputState

    try {
      setAnimate(false)

      const fromNum = Number(from)
      const toNum = Number(to)

      if (!fromNum || !toNum) {
        throw new Error('Введите оба значения!')
      }

      if (fromNum >= toNum) {
        throw new Error('Минимальное значение должно быть меньше максимального')
      }

      const newNumber = generateNumber(fromNum, toNum, repeat, generatedNumbers)

      setTimeout(() => {
        setAnimate(true)
      }, 100)

      setGeneratedNumbers((prev) => [newNumber, ...prev])
      setErrorText('')
    } catch (error: any) {
      setErrorText(error.message)
    }
  }

  const handleReset = () => {
    setGeneratedNumbers([])
    setErrorText('')
    setState('start')
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
    <div ref={wrapperRef} className={`${styles.wrapper}`}>
      <div className={styles.container}>
        <Axenix />
        <div className={styles.textContainer}>
          {!generatedNumbers.length && <h2 className={styles.title}>{getTitle()}</h2>}
          {!!generatedNumbers.length && (
            <div ref={numberRef} className={styles.numberContainer}>
              <span className={`${styles.number} ${styles.main} ${animate ? styles.numberSlide : ''}`}>
                {generatedNumbers[0]}
              </span>
            </div>
          )}
          {!!generatedNumbers.length && (
            <div ref={sexRef} className={`${styles.numberContainer} ${styles.oldNumbers}`}>
              {generatedNumbers.slice(1, 6).map((num, index) => {
                return (
                  <span key={index} className={`${styles.number} ${styles.small}`}>
                    {num}
                  </span>
                )
              })}
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
