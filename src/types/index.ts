type InputState = {
  from: string
  to: string
  repeat: boolean
}

export type THandleChangeType = <T extends keyof InputState>(key: T, value: InputState[T]) => void
