import { axiosPrivateInstance } from '../api/interceptors'
import { IOrder } from '../types/orders'

export const orderService = {
  async getOrders() {
    const { data } = await axiosPrivateInstance.get<IOrder[]>('my_orders/')

    return data
  },
  async getOrderById(id: string) {
    const { data } = await axiosPrivateInstance.get<IOrder>(`my_orders/${id}/`)

    return data
  },
}
