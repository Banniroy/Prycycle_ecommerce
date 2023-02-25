import React from 'react';
import '../Css/Header.css';
import { Link, useLocation, } from 'react-router-dom';
import { faBicycle, faSkating, faUser, faShoppingBasket, faCreditCard, faPhone, faGear, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (menuOpen){
      
    }
  })

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function handlePageClick() {
    if (menuOpen){
      setMenuOpen(false);
    }
  }

  useEffect(() =>{
    document.addEventListener('click',handlePageClick);
    return () => {
      document.removeEventListener('click', handlePageClick);
    }
  },[])


  return (
    <header className='header'>
      <section className='header__section'>
        <section className="head"></section>
        <h1>Prycycle</h1>
        <button
          className='menuBtn'
          onClick={toggleMenu}>
          <div className='menu-icon'></div>
        </button>
        {menuOpen && (
          <div className='menu-dropdown'>
            <Link className='bicyclePage icon' to="/bicyclePage"> <FontAwesomeIcon className='font' icon={faBicycle} /> Bikes</Link>
            <Link className='skateboard icon' to="/skateboard"> <FontAwesomeIcon className='font' icon={faSkating} /> SkateBoards</Link>
            <Link className='accessories icon' to="/accessories"> <FontAwesomeIcon className='font' icon={faGear} /> Accessories</Link>
            <Link className='profile icon' to="/profile"> <FontAwesomeIcon className='font' icon={faUser} /> Profile</Link>
            <Link className='shoppingcart icon' to="/shoppingCart"> <FontAwesomeIcon className='font' icon={faShoppingBasket} /> Shopping Cart</Link>
            <Link className='card icon' to="/card"> <FontAwesomeIcon className='font' icon={faCreditCard} /> Card</Link>
            <Link className='about icon' to="/about"> <FontAwesomeIcon className='font' icon={faBicycle} /> About us</Link>
            <Link className='contact icon' to="/contact"> <FontAwesomeIcon className='font' icon={faPhone} /> Contact us</Link>
            <Link className='login' to="/login">Log in <FontAwesomeIcon className='login_icon' icon={faShoppingCart} /></Link>
          </div>
        )}
      </section>
    </header>
  )
}

export default Header