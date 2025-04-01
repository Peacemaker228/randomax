import styles from '../pages/styles.module.css'
import { THandleChangeType } from '../types'
import { ResetButton } from './ResetButton'

export const OtherContent = ({
  inputState,
  onGenerate,
  onChange,
  errorText,
  onReset,
}: {
  inputState: { from: string; to: string; repeat: boolean }
  onGenerate: () => void
  onChange: THandleChangeType
  errorText: string
  onReset: () => void
}) => (
  <>
    <div className={styles.buttonContainer}>
      <button disabled={inputState.to === '' || inputState.from === ''} className={styles.btn} onClick={onGenerate}>
        Старт
      </button>
    </div>
    <div className={styles.settings}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="От"
          value={inputState.from}
          onChange={(e) => onChange('from', e.target.value)}
        />
        <hr className={styles.hr} />
        <input type="text" placeholder="До" value={inputState.to} onChange={(e) => onChange('to', e.target.value)} />
      </div>
      {errorText && <span className={styles.errorText}>{errorText}</span>}
      <div className={styles.footer}>
        <div className={styles.checkboxContainer}>
          <input
            type="checkbox"
            id="checkbox"
            checked={inputState.repeat}
            onChange={(e) => onChange('repeat', e.target.checked)}
          />
          <label htmlFor="checkbox">Повторять значения</label>
        </div>
        <button className={styles.btn} onClick={() => onReset()}>
          <ResetButton />
          Начать заново
        </button>
      </div>
    </div>
  </>
)
