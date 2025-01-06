export interface IOrderItem {
  sku: number
  sku_name: string
  quantity: number
  price: string
}

export interface IOrder {
  id: number
  user: number
  user_phone: number
  user_full_name: string
  user_email: string
  total_cost: string
  status: string
  delivery_type: string
  city: string
  address: string
  cdek_address: string
  track_number: string
  cost_delivered: string
  statuses_history: string[]
  order_uuid: string
  external_id: number
  promo_code: number
  items: IOrderItem[]
}
