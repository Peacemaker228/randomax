import React from 'react'
import { useParams, Link } from 'react-router-dom'

function Product() {
  const { id } = useParams()

  return (
    <div>
      <h2>Страница товара {id}</h2>
      <p>Подробное описание, характеристики, цена, галерея изображений</p>
      <button>Добавить в корзину</button>
      <Link to="/catalog" style={backLinkStyle}>Вернуться в каталог</Link>
    </div>
  )
}

const backLinkStyle = {
  display: 'inline-block',
  marginTop: '20px',
  color: '#fff',
  border: '1px solid #fff',
  padding: '10px 20px',
  borderRadius: '4px'
}

export default Product
