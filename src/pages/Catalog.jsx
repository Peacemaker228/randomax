import ProductCard from '../components/ProductCard'
import './styles/Catalog.css'
import manRight from '../assets/image_2025-01-04_03-59-03.png'
import manCenter from '../assets/image_2025-01-04_03-58-56.png'
import manLeft from '../assets/image_2025-01-04_03-58-39.png'
import background_1 from '../assets/image_2025-01-03_17-16-15.png'
import background_2 from '../assets/background2.png'
import sparks_1 from '../assets/sparks2.png'
import man_1 from '../assets/mim.png'
import man_2 from '../assets/man_buttom.png'
import PhotoCard from '../components/PhotoCard'
import useWindowWidth from '../hooks/useWindowWidth'; 
import { useState } from 'react';


function chunkArray(array, size) {
  const result = []
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size))
  }
  return result
}

function Catalog() {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768; 
  
  const [showAll, setShowAll] = useState(false);


  const products = [
    { id: 1, title: 'Чёрный плащ',      price: 4999, oldPrice: 6000, image: '/images/cloak.png' },
    { id: 2, title: 'Кольцо с шипами',  price: 999,  oldPrice: 6000, image: '/images/cloak.png' },
    { id: 3, title: 'Браслет из кожи',  price: 1499,                     image: '/images/cloak.png' },
    { id: 10, title: 'Браслет из кожи',  price: 1499,                     image: '/images/cloak.png' },
    { id: 4, title: 'Кулон "Череп"',    price: 1999, oldPrice: 2500, image: '/images/cloak.png' },
    { id: 5, title: 'Кожаная куртка',   price: 7999,                     image: '/images/cloak.png' },
    { id: 6, title: 'Рюкзак с шипами',  price: 2999,                     image: '/images/cloak.png' },
    { id: 7, title: 'Ремень металлический', price: 1299,                 image: '/images/cloak.png' },
    { id: 8, title: 'Серьги готические',   price: 899, oldPrice: 1200,   image: '/images/cloak.png' },
    { id: 9, title: 'Бандана "Череп"',    price: 499,                    image: '/images/cloak.png' },
    { id: 11, title: 'Бандана "Череп"',    price: 499,                    image: '/images/cloak.png' },
    { id: 13, title: 'Бандана "Череп"',    price: 499,                    image: '/images/cloak.png' },
  ]

  const displayedProducts = isMobile && !showAll ? products.slice(0, 5) : products;
  const shouldShowButton = isMobile && products.length > 5;

  const productGroups = chunkArray(displayedProducts, 7)

  const images = [
    {id: 1, image: '/images/gallery/dabc5be043b6ff966b4ce08c0178cffc.png'},
    {id: 2, image: '/images/gallery/cba81199a0cab188042ec1d350b4ea49.jpg'  },
    {id: 3, image: '/images/gallery/7a0f14d7a437ef2291720e66d1025bf3.jpg'  },
    {id: 5, image: '/images/gallery/cba81199a0cab188042ec1d350b4ea49.jpg'  },
    {id: 4, image: '/images/gallery/b4cc1466e876e25c7e7c1af16c19bb32.jpg'  },
    {id: 6, image: '/images/gallery/694f0b5d451b5e3ec977d590b1ae0beb.png'  },
    {id: 7, image: '/images/gallery/457e076459f4c3ded807d4e956be56c8.jpg'  },
  ]

  const imagesMobile = [
    {id: 1, image: '/images/gallery/dabc5be043b6ff966b4ce08c0178cffc.png'},
    {id: 2, image: '/images/gallery/cba81199a0cab188042ec1d350b4ea49.jpg'  },
    {id: 5, image: '/images/gallery/cba81199a0cab188042ec1d350b4ea49.jpg'  },
    {id: 4, image: '/images/gallery/b4cc1466e876e25c7e7c1af16c19bb32.jpg'  },
    {id: 3, image: '/images/gallery/7a0f14d7a437ef2291720e66d1025bf3.jpg'  },
    {id: 6, image: '/images/gallery/694f0b5d451b5e3ec977d590b1ae0beb.png'  },
    {id: 7, image: '/images/gallery/457e076459f4c3ded807d4e956be56c8.jpg'  },
  ]

  const currentImages = isMobile ? imagesMobile : images;

  const handleViewAll = () => {
    setShowAll(true);
  };

  return (
    <div>
      <div className='page-title'>
        <div className='background-elements-catalog'>
          <img src={manRight} alt="" className='man-right-catalog' />
          <img src={manCenter} alt="" className='man-center-catalog' />
          <img src={manLeft} alt="" className='man-left-catalog' />
        </div>
        <div className='page-info'>
          <p className='page-info-name'>WIARK</p>
          <p className='page-info-type'>МАГАЗИН</p>
        </div>
      </div>

      <div className='catalog'>
        <div className='back-elements-catalog'>
          <img src={background_1} alt="" className='background-1-catalog' />
          <img src={background_1} alt="" className='background-2-catalog' />
        </div>
        <div className='catalog-title'>
          <p>ТОВАРЫ</p>
        </div>

        <div className='products'>
          {productGroups.map((group, groupIndex) => (
            <div className="grid-container" key={groupIndex}>
              <div className='grid-container-background'>
                <div className='blur-1'></div>
                <div className='blur-2'></div>
                <img src={sparks_1} alt="" className='sparks-1-catalog' />
                <img src={sparks_1} alt="" className='sparks-2-catalog' />
                <img src={man_1} alt="" className='man-1-catalog' />
                <img src={man_2} alt="" className='man-2-catalog' />
              </div>
              {group[0] && (
                <div className="slot1">
                  <ProductCard {...group[0]} />
                </div>
              )}
              {group[1] && (
                <div className="slot2">
                  <ProductCard {...group[1]} />
                </div>
              )}
              {group[2] && (
                <div className="slot3">
                  <ProductCard {...group[2]} />
                </div>
              )}
              {group[3] && (
                <div className="slot4">
                  <ProductCard {...group[3]} />
                </div>
              )}
              {group[4] && (
                <div className="slot5">
                  <ProductCard {...group[4]} />
                </div>
              )}
              {group[5] && (
                <div className="slot6">
                  <ProductCard {...group[5]} />
                </div>
              )}
              {group[6] && (
                <div className="slot7">
                  <ProductCard {...group[6]} />
                </div>
              )}
            </div>
          ))}
          {shouldShowButton && !showAll && (
            <div className="view-all-button-container">
              <button className="view-all-button" onClick={handleViewAll}>
                СМОТРЕТЬ ВСЕ
              </button>
            </div>
          )}
        </div>
      </div>

      <div className='gallery'>
        <div className='gallery-title'>
          <p>ФОТОГАЛЕРЕЯ</p>
        </div>
        <div className="gallery-photos">
          <div className='grid-container-background'>
            <div className='blur-1-gallery'></div>
            <img src={sparks_1} alt="" className='sparks-1-gallery' />
            <img src={background_2} alt="" className='background-1-gallery' />
          </div>
          {currentImages.map((image, index) => (
            <div key={image.id} className={`photo-${index}`}> 
              <PhotoCard
                key={image.id}
                image={image.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Catalog
