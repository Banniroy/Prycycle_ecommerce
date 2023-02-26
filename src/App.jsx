import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';
import Profile from './components/Profile';
import PostProduct from './components/PostProduct';
import ShoppingCart from './components/ShoppingCart';
import BicyclePage from './components/BicyclePage';
import Skateboard from './components/Skateboard';
import Accessories from './components/Accessories';
import Card from './components/Card';
import ViewProduct from './components/ViewProduct';
import Missing from './components/Missing';
import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';




const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResults] = useState([]);
  
  // MENU OPEN & CLOSE
  const [menuOpen, setMenuOpen] = useState(false);
  // 
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  // MENU OPEN & CLOSE
  

  const HandleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className='App'>
      <Header  
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        toggleMenu={toggleMenu}
      />
      {/* <Nav
        searchQuery={setSearchQuery}
        setSearch={setSearchResults}
      /> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/postProduct">
          <PostProduct />
        </Route>
        <Route exact path="/shoppingCart">
          <ShoppingCart />
        </Route>
        <Route exact path="/viewProduct/:id">
          <ViewProduct />
        </Route>
        <Route path="/bicyclePage">
          <BicyclePage />
        </Route>
        <Route path="/skateboard">
          <Skateboard />
        </Route>
        <Route exact path="/accessories">
          <Accessories />
        </Route>
        <Route exact path="/card" component={Card} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route path="*" component={Missing} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App