import { useState, useEffect } from 'react';
import Feeds from './Feeds';

const Skateboard = () => {
  const { productItems } = data;

  return (

    <section className='BicyclePage'>
      {productItems && (
        <Feeds productItems={productItems} />
      )} {!productItems && (
        <p className='no-post' style={{ marginTop: '3rem' }}>
          No products to display.
        </p>
      )}
    </section>

  )
}

export default Skateboard