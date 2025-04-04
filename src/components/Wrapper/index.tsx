import styles from './styles.module.css'
import React from 'react'

export const Wrapper = () => {
  console.log('sas')
  return (
    <video autoPlay loop muted className={styles.videoBackground}>
      <source src="/background.mp4" type="video/mp4" />
      Ваш браузер не поддерживает видео!
    </video>
  )
}
