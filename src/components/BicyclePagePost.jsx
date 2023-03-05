import React from 'react'
import { Link } from 'react-router-dom';
import '../Css/BicyclePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const BicyclePagePost = ({ productItem }) => {



  return (
    <article className='post'>
      <Link className='post-con' to={`/post/${productItem.id}`}>
        <div className="img-container">{ }</div>
        <div className="info-container">
          <h3>{productItem.name}</h3>
          <p className='price'>${productItem.price}</p>

        </div>
      </Link>
      <div className='button-container'>
        <button className='add'>Add to cart</button>
        <button className='call'><FontAwesomeIcon className='login_icon' icon={faPhone} />Call</button>
      </div>
    </article>
  )
}

export default BicyclePagePost 
