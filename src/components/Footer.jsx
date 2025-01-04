import './Footer.css'


function Footer() {
  return (
    <footer className='footer'>
      <div className='contacts-footer'>
        <p className='contacts'>КОНТАКТЫ</p>
        <p className='email'>wiarkshop@mail.ru</p>
        <div className='social-networks'>
          <a href="#">
            <img src="/links/instagram.svg"/>
          </a>
          <a href="#">
            <img src="/links/telegram.svg"/>
          </a>
          <a href="#">
            <img src="/links/whatsapp.svg"/>
          </a>
          <a href="#">
            <img src="/links/vk.svg"/>
          </a> 
          </div>
      </div>
      <div className="logo-footer">
        <img src="/big_wiark.svg" alt="Wiark Logo" />
      </div>
      <div className='oferta-footer'>
        <p className='oferta'>ПУБЛИЧНАЯ ОФЕРТА</p> 
      </div>
    </footer>
  )
}


export default Footer