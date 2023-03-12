import { Link } from 'react-router-dom';
import '../Css/AllproductCategories.css';

const Accessories = ({ Accessoriesposts }) => {

  return (
    <article className='post'>
      {Accessoriesposts.map((Accessoriespost) => (

        <section key={Accessoriespost.id}>
          <Link className='post-con' to={`/viewProduct/${Accessoriespost.id}`}>
            <div className="img-container">
              <img
                src={Accessoriespost.image}
                alt={Accessoriespost.name}
              />
            </div>


            <div className="info-container">
              <h3>{Accessoriespost.name}</h3>
              <p className='price'>${Accessoriespost.price}</p>

            </div>
          </Link>

          <div className='button-container'>
            <button className='add' onClick={() => handleAddProduct (Accessoriespost)} >Add to Cart</button>
          </div>

        </section>
      ))}

    </article>
  )
}

export default Accessories