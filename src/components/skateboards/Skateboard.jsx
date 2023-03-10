import SkateboardFeeds from './SkateboardFeeds';

const Skateboard = ({ Skateboardposts }) => {

  return (
    <section className='BicyclePage'>
      {Skateboardposts.length ? (
        <SkateboardFeeds Skateboardposts={Skateboardposts} />
      ) : (
        <p className='no-post' style={{ marginTop: '3rem' }}>
          No products to display.
        </p>
      )}
    </section>
  )
}

export default Skateboard;