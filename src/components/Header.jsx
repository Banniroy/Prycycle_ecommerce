import React from 'react'
import { useState } from 'react';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className='header'>
      <section className='header__section'>
        <section className="head"></section>
        <h1>Prycycle</h1>
        <button className='menuBtn'>
          <div className='menu-icon'></div>
        </button>
        {openMenu && (
          <div className='menu-dropdown'>
            <a href=""></a>
          </div>
        )}
      </section>
    </header>
  )
}

export default Header