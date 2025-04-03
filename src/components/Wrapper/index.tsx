import styles from './styles.module.css'

export const Wrapper = () => {
  return (
    <video autoPlay loop muted className={styles.videoBackground}>
      <source src="/background.mp4" type="video/mp4" />
      Ваш браузер не поддерживает видео!
    </video>
  )
}
