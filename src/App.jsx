import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import api from './api/posts';
// import Home from './components/Home';
import BicycleLink from './components/BicycleLink';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [searchResult, setSearchResults] = useState([]);

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
      <Header />
      <Nav
        posts={posts}
        setSearch={setSearchResults}
      />
      <BicycleLink />
      
    </div>
  )
}

export default App