import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faPlus, faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../components/Css/Footer.css';

const Footer = ({ cartItem }) => {
  const [popOpen, setpopOpen] = useState(false);

  function toggleMenu() {
    setpopOpen(!popOpen);
  }

  function handlePageClick() {
    if (popOpen) {
      setpopOpen(false);
    }
  }

  // useEffect(() => {
  //   document.addEventListener('click', handlePageClick);
  //   return () => {
  //     document.removeEventListener('click', handlePageClick);
  //   }
  // }, [])


  return (
    <footer className='footer'>
      <Link className='link' to="/">
        <section>
          <FontAwesomeIcon className='font' icon={faHouse} />
        </section>
      </Link>

      <button
        className='popupBtn link'
        onClick={toggleMenu}>
        <FontAwesomeIcon className='font' icon={faBars} />
      </button>



      {popOpen && (
        <div  onClick={toggleMenu} className='menu-popup'>
          <div> </div>
          <h3>Search by product category</h3>
          <Link  className='bicyclePage icon' to="/bicyclePage">Bikes</Link>
          <Link  className='skateboard icon' to="/skateboard">SkateBoards</Link>
          <Link  className='accessories icon' to="/accessories">Accessories</Link>
        </div>

      )}

      <Link className='link' to="/postProduct">
        <section>
          <FontAwesomeIcon className='font' icon={faPlus} />
        </section>
      </Link>
      <Link className='link' to="/shoppingCart">
        <section className='length-show'>
          <FontAwesomeIcon className='font' icon={faCartShopping} />
          <span className="length">
            {cartItem.length === 0 ? '' : cartItem.length} 
          </span>
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
