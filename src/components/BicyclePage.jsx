import { useState, useEffect } from 'react';
import '../Css/BicyclePage.css';
import Feeds from './Feeds';

const BicyclePage = ({ productItems }) => {

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

export default BicyclePage