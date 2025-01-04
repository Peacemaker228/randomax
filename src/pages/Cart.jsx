import React from 'react'

function Cart() {
  return (
    <div>
      <h2>Корзина</h2>
      <p>Список товаров с возможностью удаления и изменения количества</p>
      <form style={formStyle}>
        <label>
          Способ доставки:
          <select>
            <option>Курьер</option>
            <option>Почта</option>
          </select>
        </label>
        <label>
          Способ оплаты:
          <select>
            <option>Онлайн</option>
            <option>Наличными</option>
          </select>
        </label>
        <button>Оформить заказ</button>
      </form>
    </div>
  )
}

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  maxWidth: '300px',
  marginTop: '20px'
}

export default Cart
