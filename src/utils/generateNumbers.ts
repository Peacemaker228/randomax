export const generateNumber = (from: number, to: number, repeat: boolean, generatedNumbers: number[]) => {
  const range = to - from + 1

  if (repeat) {
    return Math.floor(Math.random() * range) + from
  }

  const availableNumbers = Array.from({ length: range }, (_, i) => i + from).filter(
    (num) => !generatedNumbers.includes(num),
  )

  if (availableNumbers.length === 0) {
    throw new Error('Все возможные числа уже были сгенерированы')
  }

  return availableNumbers[Math.floor(Math.random() * availableNumbers.length)]
}
