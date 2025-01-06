import * as Accordion from '@radix-ui/react-accordion'
import { useEffect, useState } from 'react'
import { IOrder } from '../../../types/orders'
import { toast } from 'react-toastify'
import { orderService } from '../../../services/order.service'
import { emptyRowField } from '../../../constants'
import styles from './styles.module.css'

export const Orders = () => {
  const [orders, setOrders] = useState<IOrder[]>([])
  const [orderDetails, setOrderDetails] = useState<IOrder>()

  const getOrders = async () => {
    try {
      const res = await orderService.getOrders()

      setOrders(res)
    } catch {
      toast.error('Произошла ошибка при получении заказов')
    }
  }

  const handleGetOrderById = async (id: string) => {
    try {
      const res = await orderService.getOrderById(id)

      setOrderDetails(res)
    } catch {
      toast.error('Произошла ошибка при получении деталей заказа')
    }
  }

  useEffect(() => {
    getOrders()
  }, [])

  return (
    <Accordion.Root onValueChange={handleGetOrderById} className={styles.Root} type={'single'} collapsible>
      {orders.map((order) => (
        <Accordion.Item className={styles.Item} value={String(order.id)} key={order.id}>
          <Accordion.Header className={styles.Header}>
            <Accordion.Trigger className={styles.Trigger}>
              <span>Заказ {order.id}</span>
              <span>{order.total_cost} руб.</span>
              <span>{order.status ?? emptyRowField}</span>
              <span>{order.track_number ?? emptyRowField}</span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className={styles.Content}>
            <div className={styles.contentLayout}>
              <h3>Детальная информация</h3>
              <div className={styles.headerContainer}>
                <span>sku name</span>
                <span>price</span>
              </div>
              {orderDetails?.items?.map((el) => (
                <div key={el.sku} className={styles.contentContainer}>
                  <span>{el.sku_name ?? emptyRowField}</span>
                  <span>{el.price ?? emptyRowField} руб.</span>
                </div>
              ))}
              <h3>История изменения статуса</h3>
              <div className={styles.headerContainer}>
                <span>Трек номер</span>
                <span>Статус</span>
              </div>
              {orderDetails?.statuses_history?.map((h, i) => (
                <div key={i} className={styles.contentContainer}>
                  <span>{orderDetails?.track_number ?? emptyRowField}</span>
                  <span>{h ?? emptyRowField}</span>
                </div>
              ))}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
