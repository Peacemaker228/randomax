import { Link } from 'react-router-dom'
import './styles/Home.css'
import backgroundElement1 from '../assets/image_2025-01-03_17-16-15.png' 
import backgroundElement2 from '../assets/background2.png'
import manRightHome from '../assets/image_2025-01-03_17-17-30.png'
import manCenterHome from '../assets/image_2025-01-03_17-18-12.png'
import manLeftHome from '../assets/image_2025-01-03_17-15-58.png'


function Home() {
  return (
    <div className='home'>
      <div className='background-elements'>
        <img src={backgroundElement1} alt="" className='background-element-1' />
        <img src={backgroundElement2} alt="" className='background-element-2' />
        <img src={manRightHome} alt="" className='man-right' />
        <img src={manCenterHome} alt="" className='man-center' /> 
        <img src={manLeftHome} alt="" className='man-left' />
      </div>
      <div className='home-content'>
        <span className='catalog-label'>КАТАЛОГ</span>
        <Link to="/catalog" className='open-catalog'>
          <p className='button-label'>СМОТРЕТЬ ТОВАРЫ</p>
        </Link>
      </div>

    </div>
  )
}

export default Home
