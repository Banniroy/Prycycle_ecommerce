import React from 'react';
import BicyclePagePost from './BicyclePagePost';
import '../Css/BicyclePage.css';

const Feeds = ({ productItems }) => {


    return (
        <>
            {productItems.map(productItem =>(
                <BicyclePagePost 
                    key={productItem.id}
                    productItem={productItem}
                /> 
            ))}
        </>

    )
}

export default Feeds