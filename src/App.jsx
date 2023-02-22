import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
// import api from './api/posts';
// import Home from './components/Home';
import BicycleLink from './components/BicycleLink';
import Footer from './components/Footer';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResults] = useState([]);

  const HandleSearchInputChange = (event) =>{
    setSearchQuery(event.target.value);
  };

  useEffect(() => {

  }, [])

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className='App'>
      <Header 
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      <Nav
        searchQuery={setSearchQuery}
        setSearch={setSearchResults}
      />
      <BicycleLink />
      <Footer />
    </div>
  )
}

export default App