import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';

const App = () => {

  const [search, setSearch] = useState([]);

  return (
    <div className='App'>
      <Header />
      <Nav 
        search={search}
        setSearch={setSearch}
      />
    </div>
  )
}

export default App