import { axiosInstance } from '../api/interceptors'
import { IAuthRequest, IAuthResponse } from '../types/auth'
import { tokenManage } from '../utils/tokenManage'

export const authService = {
  async login(body: IAuthRequest) {
    const res = await axiosInstance.post<IAuthResponse>('token/auth/', body)

    if (res.data.access_token) {
      const { setToken } = tokenManage()

      setToken(res.data.access_token)
    }

    return res
  },

  async register(body: IAuthRequest) {
    const response = await axiosInstance.post<IAuthResponse>('token/register/', body)

    if (response.data.access_token) {
      const { setToken } = tokenManage()

      setToken(response.data.access_token)
    }

    return response
  },

  logout() {
    const { removeToken } = tokenManage()

    removeToken()
  },
}
