import React from 'react'
import { Link } from 'react-router-dom';
import '../Css/AllproductCategories.css';

const BicyclePagePost = ({ postMapped, handleAddProduct, bicycleItems }) => {

  return (
    <article className='post'>
      <Link className='post-con' to={`/viewProduct/${postMapped.id}`}>
        <div className="img-container">
          <img src={postMapped.image}  />
        </div>
        <div className="info-container">
          <h3>{postMapped.name}</h3>
          <p className='price'>${postMapped.price}</p>

        </div>
      </Link>
      <div className='button-container'>
        <button className='add' onClick={() => handleAddProduct(bicycleItems) } >Add to Cart</button>
      </div>
    </article>
  )
}

export default BicyclePagePost 
