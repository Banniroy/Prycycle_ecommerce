import React from 'react';
import '../Css/Header.css';
import { Link, useHistory } from 'react-router-dom';

const Header = ({ openMenu, setOpenMenu }) => {

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className='header'>
      <section className='header__section'>
        <section className="head"></section>
        <h1>Prycycle</h1>
        <button
          className='menuBtn'
          onClick={handleMenuClick}>
          <div className='menu-icon'></div>
        </button>
        {openMenu && (
          <div className='menu-dropdown'>
            <Link to="/login">Log in</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/shoppingCart">Shopping Cart</Link>
            <Link to="/card">Card</Link>
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact us</Link>
          </div>
        )}
      </section>
    </header>
  )
}

export default Header