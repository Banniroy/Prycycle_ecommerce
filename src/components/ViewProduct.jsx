import React from 'react';
import '../Css/viewProduct.css';

const ViewProduct = () => {
  return (
    <section className='ViewProduct'>
        <div className="image-container">{}</div>
        <div className="product-name">{}</div>
        <div className="price"></div>
        <div className="information">{}</div>
        <div className="button-container">
          <button className="add-to-cart">Add to cart</button>
          <button className="order">Order</button>
        </div>
    </section>
  )
}

export default ViewProduct