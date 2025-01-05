import { NavLink, useLocation} from 'react-router-dom'
import './Header.css'
import { useState } from 'react';
import Modal from './Modal';


function Header() {
  const location = useLocation();
  
  const isCatalogPage = location.pathname === '/catalog';

  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };



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
        <button  
          className="icon-link search-button" 
          aria-label="Поиск"
          onClick={openSearchModal}
        >
        <img src="/search.svg"/>
        </button >
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

      <Modal isOpen={isSearchModalOpen} onClose={closeSearchModal}>
      </Modal>

    </header>
  )
}

export default Header
