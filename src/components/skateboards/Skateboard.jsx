import { Link } from 'react-router-dom';
import '../Css/AllproductCategories.css';

const Skateboard = ({ skateboardItems, handleAddProduct }) => {

  return (
    <article className='post'>
      {skateboardItems.map((skateboardItem) => (

        <section key={skateboardItem.id}>
          <Link className='post-con' to={`/viewProduct/${skateboardItem.id}`}>
            <div className="img-container">
              <img
                src={skateboardItem.image}
                alt={skateboardItem.name}
              />
            </div>


            <div className="info-container">
              <h3>{skateboardItem.name}</h3>
              <p className='price'>${skateboardItem.price}</p>

            </div>
          </Link>

          <div className='button-container'>
            <button className='add' onClick={() => handleAddProduct (skateboardItem)}>Add to Cart</button>
          </div>

        </section>


      ))}

    </article>
  )
}

export default Skateboard;