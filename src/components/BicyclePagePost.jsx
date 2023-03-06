import React from 'react'
import { Link } from 'react-router-dom';
import '../Css/BicyclePage.css';

const BicyclePagePost = ({ productItem }) => {



  return (
    <article className='post'>
      <Link className='post-con' to={`/viewProduct/${productItem.id}`}>
        <div className="img-container">{ }</div>
        <div className="info-container">
          <h3>{productItem.name}</h3>
          <p className='price'>${productItem.price}</p>

        </div>
      </Link>
      <div className='button-container'>
        <button className='add'>Add to Cart</button>
      </div>
    </article>
  )
}

export default BicyclePagePost 
