import React from 'react'
import { useRef } from 'react'
import { useInputState, useRoulette } from '../hooks'
import { Axenix, Controller } from '../components'
import styles from './styles.module.css'

export const MainPage = () => {
  const { inputState, handleChange } = useInputState()
  const { isRolling, errorText, generatedNumbers, currentNumber, startRolling, stopRolling, reset } =
    useRoulette(inputState)

  const wrapperRef = useRef<HTMLDivElement>(null)
  const numberRef = useRef<HTMLDivElement | null>(null)

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <div className={styles.container}>
        <Axenix />
        <div className={styles.textContainer}>
          {!generatedNumbers.length && !currentNumber && !isRolling && (
            <h2 className={styles.title}>Генератор случайных чисел</h2>
          )}
          {(!!generatedNumbers.length || currentNumber) && (
            <div
              ref={numberRef}
              className={`${styles.numberContainer} ${isRolling ? styles.spinning : styles.stopSpin}`}>
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
        </div>
        <Controller
          inputState={inputState}
          onGenerate={isRolling ? stopRolling : startRolling}
          onChange={handleChange}
          errorText={errorText}
          onReset={reset}
          isRolling={isRolling}
        />
      </div>
    </div>
  )
}
