import { Link } from 'react-router-dom'
import './ProductCard.css'


function ProductCard({ id, title, price, oldPrice, image }) {
  return (
    <div className='card'>
      <img src={image} alt={title} className='product-image' />
      <div className='product-info'>
        <h3 className='product-title'>{title}</h3>
        <div className='product-prices'>
          <p className='new-price'>{price} ₽</p>
          {oldPrice && <p className='old-price'>{oldPrice} ₽</p>}
        </div>
      </div>
      <div className='product-buttons'>
        <Link to={`/product/${id}`} className='button'>ПОДРОБНЕЕ О ТОВАРЕ</Link>
      </div>
    </div>
  )
}



export default ProductCard
