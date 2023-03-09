import {useState, useEffect} from 'react';
import Feeds from './Feeds';

const Accessories = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await firebaseApiStorage.get('/');
        setPosts(response.data)
        console.log(setPosts)
      } catch (error) {
        console.err(error);
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
          No products to display.
        </p>
      )}
    </section>
  )
}

export default Accessories