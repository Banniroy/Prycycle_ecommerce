import React from 'react'

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
          onClick={handleMenuClick}
        >
          <div className='menu-icon'></div>
        </button>
        {openMenu && (
          <div className='menu-dropdown'>
            <a href=""></a>
            <a href=""></a>
          </div>
        )}
      </section>
    </header>
  )
}

export default Header