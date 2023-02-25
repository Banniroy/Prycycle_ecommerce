import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faPlus, faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../Css/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <Link className='link' to="/">
        <section>
          <FontAwesomeIcon className='font' icon={faHouse} />
        </section>
      </Link>
      <Link className='link' to="/menuPopup">
        <section>
          <FontAwesomeIcon className='font' icon={faBars} />
        </section>
      </Link>
      <Link className='link' to="/postProduct">
        <section>
          <FontAwesomeIcon className='font' icon={faPlus} />
        </section>
      </Link>
      <Link className='link' to="/shoppingCart">
        <section>
          <FontAwesomeIcon className='font' icon={faCartShopping} />
        </section>
      </Link>
      <Link className='link' to="/profile">
        <section>
          <FontAwesomeIcon className='font' icon={faUser} />
        </section>
      </Link>
    </footer>
  )
}

export default Footer