import { Link } from 'react-router-dom';
import '../Css/AllproductCategories.css';

const BicyclePage = ({ bicycleItems, handleAddProduct }) => {

    return (
        <article className='post'>
            {bicycleItems.map((bicycleItem) => (
                
                <section key={bicycleItem.id}>
                    <Link className='post-con' to={`/viewProduct/${bicycleItem.id}`}>
                        <div className="img-container">
                            <img
                                src={bicycleItem.image}
                                alt={bicycleItem.name}
                            />
                        </div>


                        <div className="info-container">
                            <h3>{bicycleItem.name}</h3>
                            <p className='price'>${bicycleItem.price}</p>

                        </div>
                    </Link>

                    <div className='button-container'>
                        <button className='add' onClick={() => handleAddProduct (bicycleItem)}>Add to Cart</button>
                    </div>

                </section>


            ))}







        </article>
    )
}

export default BicyclePage