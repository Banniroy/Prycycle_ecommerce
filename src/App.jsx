import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import api from './api/posts';
// import Home from './components/Home';
import BicycleLink from './components/BicycleLink';
import Footer from './components/Footer';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [searchResult, setSearchResults] = useState([]);

  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const fetcPosts = async () => {
      try {
        const response = await api.get('/posts')
        setPosts(response.data);
      } catch (error) {
          console.log(`Error:${error}`);
      }
    }
    fetcPosts();
  }, [])

  useEffect(() => {

  }, [posts])

  return (
    <div className='App'>
      <Header 
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      <Nav
        posts={posts}
        setSearch={setSearchResults}
      />
      <BicycleLink />
      <Footer />
    </div>
  )
}

export default App