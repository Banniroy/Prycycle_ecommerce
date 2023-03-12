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
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import data1 from './data/data1';
import data2 from './data/data2';

const App = () => {
  const [Accessoriesposts, setAccessoriesPosts] = useState([]);

  const [openSearch, setOpenSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [cartItem, setcartItem] = useState([]);


  const { bicycleItems } = data1;
  const { skateboardItems } = data2;


  function toggleSearch() {
    setOpenSearch(!openSearch);
  }

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  const handleAddProduct = (product) =>{
    const productExist = cartItem.find((item) => item.id === product.id);
    if (productExist){
      setcartItem(cartItem.map((item) => item.id === product.id ?
      {...productExist,quatity: productExist.quatity + 1}: item));
    }
    else{
      setcartItem([...cartItem, {...product, quatity: 1}])
    }
  } 

  const handleMinuProduct = (product) => {
    const productExist = cartItem.find((item) => item.id === product.id);
    if (productExist.quatity === 1) {
      setcartItem(cartItem.filter((filterItem) => filterItem.id !== product.id));
    }
    else {
      setcartItem(
        cartItem.map((mappedItem) =>
          mappedItem.id === product.id
            ? { ...productExist, quatity: productExist.quatity - 1 } : mappedItem
        )
      )
    };

  }

  const handleCartClearance = () => {
    setcartItem([]);
  }

  const totalPrice = cartItem.reduce((price, mappedItem) => price * mappedItem.quatity * mappedItem.price, 0);

  return (
    <div className='App'>
      <Header
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        toggleSearch={toggleSearch}
      />
      <Nav
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
          <ShoppingCart 
            cartItem={cartItem}
            handleAddProduct={handleAddProduct}
            handleMinuProduct={handleMinuProduct}
            handleCartClearance={handleCartClearance}
            totalPrice={totalPrice}
          />
        </Route>
        <Route exact path="/viewProduct/:id">
          <ViewProduct
            bicycleItems={bicycleItems}
            handleAddProduct={handleAddProduct}
          />
        </Route>
        <Route path="/bicyclePage">
          <BicyclePage
            bicycleItems={bicycleItems}
            handleAddProduct={handleAddProduct}
          />
        </Route>
        <Route path="/skateboard">
          <Skateboard
            skateboardItems={skateboardItems}
            handleAddProduct={handleAddProduct}
          />
        </Route>
        <Route exact path="/accessories">
          <Accessories
            Accessoriesposts={Accessoriesposts}
            handleAddProduct={handleAddProduct}

          />
        </Route>
        <Route exact path="/services" component={Services} />
        <Route exact path="/card" component={Card} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route path="*" component={Missing} />
      </Switch>
      <Footer 
        cartItem={cartItem}
      />
    </div>
  )
}

export default App
