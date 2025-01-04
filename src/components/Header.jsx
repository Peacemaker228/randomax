import { NavLink, useLocation} from 'react-router-dom'
import './Header.css'

function Header() {
  const location = useLocation();
  
  const isCatalogPage = location.pathname === '/catalog';

  return (
    <header className={`header ${isCatalogPage ? 'header--catalog' : ''}`}>
      <nav className="nav-left">
        <NavLink 
          to="/catalog" 
          className={({ isActive }) => 
            isActive ? 'nav-link catalog-link active' : 'nav-link catalog-link'
          }
        >
          КАТАЛОГ
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          О НАС
        </NavLink>
      </nav>

      <div className="logo">
        <NavLink to="/" className="logo-link">
          <img src="/wiark.svg" alt="Wiark Logo" />
        </NavLink>
      </div>

      <div className="nav-right">
        <NavLink 
          to="/search" 
          className={({ isActive }) => 
            isActive ? 'icon-link active' : 'icon-link'
          } 
          aria-label="Поиск"
        >
          <img src="/search.svg"/>
        </NavLink>
        <NavLink 
          to="/login" 
          className={({ isActive }) => 
            isActive ? 'icon-link active' : 'icon-link'
          } 
          aria-label="Пользователь"
        >
          <img src="/user.svg"/>
        </NavLink>
        <NavLink 
          to="/cart" 
          className={({ isActive }) => 
            isActive ? 'icon-link active' : 'icon-link'
          } 
          aria-label="Корзина"
        >
          <img src="/cart.svg"/>
        </NavLink>
      </div>
    </header>
  )
}

export default Header
