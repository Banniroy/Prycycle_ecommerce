import { useState, useEffect } from 'react';
import '../Css/BicyclePage.css';
import Feeds from './Feeds';
import api from '../api/posts';

const BicyclePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        setPosts(response.data)
        console.log(setPosts)
      } catch (error) {
        console.log(error);
      }
    }

    fetchPosts()
  }, [])  

  return (
    <section className='BicyclePage'>
      {posts.length ? (
        <Feeds posts={posts} />
      ) : (
        <p className='no-post' style={{ marginTop: '3rem' }}>
          No posts to display.
        </p>
      )}
    </section>
  )
}

export default BicyclePage