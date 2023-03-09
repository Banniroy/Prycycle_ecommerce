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
import Services from './components/Services';
import Missing from './components/Missing';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ref, getDownloadURL } from 'firebase/storage';
import storage from './firebase/firebaseStorage';

const App = () => {

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fileRef = ref(storage, "/data/bicycle.json");
        const url = await getDownloadURL(fileRef);

        const data = await fetch(url)
        const response = await data.json();
        Posts(response)
        console.log(Posts)
      } catch (error) {
        console.log(error);
      }
    }

    fetchPosts()
  }, []) 

  // SEARCH OPEN & CLOSE
  const [openSearch, setOpenSearch] = useState(false);
  // 
  function toggleSearch() {
    setOpenSearch(!openSearch);
  } 
 // SEARCH OPEN & CLOSE


  // MENU OPEN & CLOSE
  const [menuOpen, setMenuOpen] = useState(false);
  // 
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  // MENU OPEN & CLOSE


  //SEARCH QUERY 
  const [searchResult, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  // 
  const HandleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  //SEARCH QUERY 


  return (
    <div className='App'>
      <Header  
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        toggleSearch={toggleSearch}
      />
      <Nav
        searchQuery={setSearchQuery}
        setSearch={setSearchResults}
        openSearch={openSearch}
      />
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
          <ViewProduct 
            
          />
        </Route>
        <Route path="/bicyclePage">
          <BicyclePage 
            
          />
        </Route>
        <Route path="/skateboard">
          <Skateboard />
        </Route>
        <Route exact path="/accessories">
          <Accessories />
        </Route>
        <Route exact path="/services" component={Services} />
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
