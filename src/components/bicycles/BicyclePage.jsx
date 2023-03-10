import BicyclesFeeds from './BicyclesFeeds';

const BicyclePage = ({ Bicycleposts }) => {

    return (
        <section className='BicyclePage'>
            {Bicycleposts.length ? (
                <BicyclesFeeds Bicycleposts={Bicycleposts} />
            ) : (
                <p className='no-post' style={{ marginTop: '3rem' }}>
                    No products to display.
                </p>
            )}
        </section>
    )
}

export default BicyclePage