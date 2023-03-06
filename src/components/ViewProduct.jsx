import React from 'react';
import '../Css/viewProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

const ViewProduct = () => {
  return (
    <section className='ViewProduct'>
        <div className="image-container">{}</div>
        <div className="product-name">{}</div>
        <div className="price"></div>
        <div className="information">{}</div>
        <div className="button-container">
          <button className="add-to-cart"><FontAwesomeIcon className='login_icon' icon={faBasketShopping} />Add to cart</button>
          <button className="order">Buy Now</button>
        </div>
    </section>
  )
}

export default ViewProduct