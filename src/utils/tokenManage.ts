export const tokenManage = () => {
  const accessToken = localStorage.getItem('access_token')

  const setToken = (token: string) => localStorage.setItem('access_token', token)

  const removeToken = () => localStorage.removeItem('access_token')

  return { accessToken, setToken, removeToken }
}
