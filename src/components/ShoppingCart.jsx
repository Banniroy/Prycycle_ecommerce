import React, { useState } from 'react';
import '../components/Css/ShoppingCart.css';

const ShoppingCart = ({ cartItem, handleMinuProduct, handleCartClearance, totalPrice, handleAddProduct }) => {
 
  return (
    <section className="cart-items">
      <h2 className='cart-items-header'>Cart Items</h2>
      <div className="clear-all-cart">
        {cartItem.length >= 1 && (
          <button className='button-clear-cart' onClick={handleCartClearance}>Clear Cart</button>
        )}
      </div>

      {cartItem.length === 0 && (<div className='no-item'>No items are added. </div>)}

      <div>
        {cartItem.map((Item) => (
          <div key={Item.id} className="cart-item-list">
            <img
              className='cart-item-image'
              src={Item.image}
              alt={Item.name}
            />
            <div className='cart-item-name'>{Item.name}</div>
            <div className='cart-item-fuction'>
              <button className="cart-item-add" onClick={(() => handleAddProduct(Item))}>+</button>
              <button className="cart-item-minus" onClick={(() => handleMinuProduct(Item))}>-</button>
            </div>
            <div className='cart-item-price'>
              {Item.quatity} * ${Item.price}
            </div>
          </div>
        ))}
      </div>

      <section className='cart-item-total-price-name'>
        Total price
        <div className='cart-item-total-price'>${totalPrice}</div>
      </section>
    </section>
  )
}

export default ShoppingCart