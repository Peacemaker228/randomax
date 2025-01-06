import { IAccountUpdateRequest } from '../types/account'
import { axiosPrivateInstance } from '../api/interceptors'

export const accountService = {
  async updateAccount(body: IAccountUpdateRequest): Promise<void> {
    return await axiosPrivateInstance.patch('users/me/', body)
  },
}
