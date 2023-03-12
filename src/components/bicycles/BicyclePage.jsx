import BicyclesFeeds from './BicyclesFeeds';

const BicyclePage = ({ bicycleItems, handleAddProduct }) => {

    return (
        <section className='BicyclePage'>
            {bicycleItems.length ? (
                <BicyclesFeeds bicycleItems={bicycleItems} handleAddProduct={handleAddProduct}/>
            ) : (
                <p className='no-post' style={{ marginTop: '3rem' }}>
                    No products to display.
                </p>
            )}
        </section>
    )
}

export default BicyclePage