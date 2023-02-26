import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faPlus, faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../Css/Footer.css';

const Footer = () => {
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
          onClick={toggleMenu}
        >
          <FontAwesomeIcon className='font' icon={faBars} />
        </button>
     
      {popOpen && (
        <div className='menu-popup'>
          <Link onClick={toggleMenu} className='bicyclePage icon' to="/bicyclePage">Bikes</Link>
          <Link onClick={toggleMenu} className='skateboard icon' to="/skateboard">SkateBoards</Link>
          <Link onClick={toggleMenu} className='accessories icon' to="/accessories">Accessories</Link>
        </div>
      )}

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
