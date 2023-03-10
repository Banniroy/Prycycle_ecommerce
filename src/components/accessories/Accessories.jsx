import AccessoriesFeeds from './AccessoriesFeeds';

const Accessories = ({ Accessoriesposts }) => {

  return (
    <section className='BicyclePage'>
      {Accessoriesposts.length ? (
        <AccessoriesFeeds Accessoriesposts={Accessoriesposts} />
      ) : (
        <p className='no-post' style={{ marginTop: '3rem' }}>
          No products to display.
        </p>
      )}
    </section>
  )
}

export default Accessories