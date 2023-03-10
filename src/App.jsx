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
import BicyclePage from './components/bicycles/BicyclePage';
import Skateboard from './components/skateboards/Skateboard';
import Accessories from './components/accessories/Accessories'
import Card from './components/Card';
import ViewProduct from './components/ViewProduct';
import Services from './components/Services';
import Missing from './components/Missing';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase/firebaseStorage';

const App = () => {

  const [Bicycleposts, setBicyclePosts] = useState([]);
  const [Skateboardposts, setSkateboardPosts] = useState([]);
  const [Accessoriesposts, setAccessoriesPosts] = useState([]);

  const [openSearch, setOpenSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchResult, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');



  useEffect(() => {
    const fetchBicyclePosts = async () => {

      try {
        const fileRef = ref(storage, "/data/bicycle.json");
        const url = await getDownloadURL(fileRef);

        const data = await fetch(url)
        const response = await data.json();
        setBicyclePosts(response)
        console.log(setBicyclePosts)
      } catch (error) {
        console.log(error);
      }
    }

    fetchBicyclePosts()
  }, [])

  useEffect(() => {
    const fetchAccessoriesPosts = async () => {

      try {
        const fileRef = ref(storage, "/data/bicycle.json");
        const url = await getDownloadURL(fileRef);

        const data = await fetch(url)
        const response = await data.json();
        setAccessoriesPosts(response)
        console.log(setAccessoriesPosts)
      } catch (error) {
        console.log(error);
      }
    }

    fetchAccessoriesPosts()
  }, [])

  useEffect(() => {
    const fetchSkateboardsPosts = async () => {

      try {
        const fileRef = ref(storage, "/data/bicycle.json");
        const url = await getDownloadURL(fileRef);

        const data = await fetch(url)
        const response = await data.json();
        setSkateboardPosts(response)
        console.log(setSkateboardPosts)
      } catch (error) {
        console.log(error);
      }
    }

    fetchSkateboardsPosts()
  }, [])


  function toggleSearch() {
    setOpenSearch(!openSearch);
  }

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  const HandleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

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
          <Home

          />
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
            Bicycleposts={Bicycleposts}
          />
        </Route>
        <Route path="/skateboard">
          <Skateboard
            Skateboardposts={Skateboardposts}
          />
        </Route>
        <Route exact path="/accessories">
          <Accessories
            Accessoriesposts={Accessoriesposts}

          />
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
