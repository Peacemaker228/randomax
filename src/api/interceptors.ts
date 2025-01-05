import axios, { AxiosError, CreateAxiosDefaults } from 'axios'

const options: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_BASE_API,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
}

const axiosInstance = axios.create(options)
const axiosPrivateInstance = axios.create(options)

axiosPrivateInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')

    if (token && config?.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => Promise.reject(error),
)

axiosPrivateInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      console.warn('Неавторизованный запрос. Проверьте токен.')
      // Здесь можно выполнить редирект на страницу логина
      // Например: window.location.href = '/login';
    }

    if (error.response?.status === 403) {
      console.warn('Доступ запрещён. У вас недостаточно прав.')
    }

    console.error('Ошибка ответа:', error.response)
    return Promise.reject(error)
  },
)

export { axiosInstance, axiosPrivateInstance }
