import styles from '../pages/styles.module.css'

export const DefaultContent = ({ onStart }: { onStart: () => void }) => (
  <div className={styles.buttonContainer}>
    <button className={styles.btn} onClick={onStart}>
      Начать
    </button>
    <span className={styles.description}>Нажмите для продолжения</span>
  </div>
)
