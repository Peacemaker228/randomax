import { useEffect, useRef, useState } from 'react';
import './Modal.css';
import { Link } from 'react-router-dom'; 


function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef(null);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const fetchResults = async () => {
      if (query.trim() === '') {
        setResults([]);
        setLoading(false);
        setError(null);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://wiark.ru/api/products/?search=${encodeURIComponent(query)}`);
        if (!response.ok) {
          throw new Error('Ошибка сети');
        }
        const data = await response.json();
        setResults(data); 
      } catch (err) {
        console.error('Ошибка при загрузке результатов поиска:', err);
        setError('Не удалось загрузить результаты поиска.');
      } finally {
        setLoading(false);
      }
    };

    const debounceTimeout = setTimeout(() => {
      fetchResults();
    }, 300); 

    return () => clearTimeout(debounceTimeout);
  }, [query]);

  if (!isOpen) return null;


  return (
    <div className="modal-overlay" aria-modal="true" role="dialog">
      <div
        className="modal-content"
        ref={modalRef}
        tabIndex="-1"
      >
        <div className="modal-header">
          <input
            type="text"
            placeholder="Поиск..."
            className="search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Поиск"
          />
          <button
            className="modal-close-button"
            onClick={onClose}
            aria-label="Закрыть модальное окно"
          >
            &times;
          </button>
        </div>
        <div className="divider"></div>
        <div className="search-results">
          {loading && <p className="loading">Загрузка...</p>}
          {error && <p className="error">{error}</p>}
          {!loading && !error && results.length === 0 && query && (
            <p className="loading">Ничего не найдено.</p>
          )}
          {!loading && !error && results.map((item) => (
            <Link to={`/product/${item.id}`} key={item.id} className="search-result-item" onClick={onClose}>
              <div className='search-result-image-container '>
                <img
                  src={item.images.find(img => img.is_main)?.image || 'placeholder.png'}
                  alt={item.images.find(img => img.is_main)?.alt_text || item.name}
                  className="search-result-image"
                />
              </div>
              <div className="search-result-details">
                <p className="search-result-name">{item.name}</p>
                <p className="search-result-price">
                  {item.skus.length > 0 ? `${item.skus[0].price} руб.` : 'Цена не указана'}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;
