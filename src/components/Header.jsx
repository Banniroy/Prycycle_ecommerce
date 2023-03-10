import React from 'react';
import '../components/Css/Header.css';
import { Link } from 'react-router-dom';
import { faBicycle, faSkating, faUser, faShoppingBasket, faCreditCard, faPhone, faGear, faShoppingCart, faInfo, faTimes, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ menuOpen, toggleMenu, toggleSearch }) => {
  return (
    <header className='header'>
      <section className='header__section'>
        <section className="head">
          <button
            className='searchBtn'
            onClick={toggleSearch}
          >
            <FontAwesomeIcon className='login_icon' icon={faMagnifyingGlass} />
          </button>
        </section>
        <h1><span className='header-name-portion'>PRY</span><span className="header-name-portion-2">CYCLE</span></h1>

        {(menuOpen) ? (
          <div>
            <button
              className='menuBtn-close'
              onClick={toggleMenu}>
              <div className='menu-ic'><FontAwesomeIcon className='font-close' icon={faTimes} /></div>
            </button>
            <div className="background-container" onClick={toggleMenu}></div>
            <div className='menu-dropdown'>
              <Link onClick={toggleMenu} className='bicyclePage icon' to="/bicyclePage"> <FontAwesomeIcon className='font' icon={faBicycle} /> Bikes</Link>
              <Link onClick={toggleMenu} className='skateboard icon' to="/skateboard"> <FontAwesomeIcon className='font' icon={faSkating} /> SkateBoards</Link>
              <Link onClick={toggleMenu} className='accessories icon' to="/accessories"> <FontAwesomeIcon className='font' icon={faGear} /> Accessories</Link>
              <Link onClick={toggleMenu} className='profile icon' to="/profile"> <FontAwesomeIcon className='font' icon={faUser} /> Profile</Link>
              <Link onClick={toggleMenu} className='shoppingcart icon' to="/shoppingCart"> <FontAwesomeIcon className='font' icon={faShoppingBasket} /> Shopping Cart</Link>
              <Link onClick={toggleMenu} className='card icon' to="/card"> <FontAwesomeIcon className='font' icon={faCreditCard} /> Card</Link>
              <Link onClick={toggleMenu} className='about icon' to="/about"> <FontAwesomeIcon className='font' icon={faInfo} /> About us</Link>
              <Link onClick={toggleMenu} className='contact icon' to="/contact"> <FontAwesomeIcon className='font' icon={faPhone} /> Contact us</Link>
              <Link onClick={toggleMenu} className='login' to="/login">Log in <FontAwesomeIcon className='login_icon' icon={faShoppingCart} /></Link>
              <p>Don't have an account? <Link to="/signup" className='span'>Sign up</Link></p>
            </div>
          </div>)
          : (<button
            className='menuBtn-open'
            onClick={toggleMenu}>
            <div className='menu-icon'></div>
          </button>)
        }
      </section>
    </header>
  )
}

export default Header
