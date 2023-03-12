import SkateboardFeeds from './SkateboardFeeds';

const Skateboard = ({ skateboardItems }) => {

  return (
    <section className='BicyclePage'>
      {skateboardItems.length ? (
        <SkateboardFeeds skateboardItems={skateboardItems} />
      ) : (
        <p className='no-post' style={{ marginTop: '3rem' }}>
          No products to display.
        </p>
      )}
    </section>
  )
}

export default Skateboard;