import React from 'react';
import BicyclePagePost from './BicyclePagePost';
import '../Css/AllproductCategories.css';

const BicyclesFeeds = ({ bicycleItems, handleAddProduct }) => {

    return (
        <>
            {bicycleItems.map(postMapped => (
                <BicyclePagePost
                    key={postMapped.id}
                    postMapped={postMapped}
                    handleAddProduct={handleAddProduct}
                    bicycleItems={bicycleItems}
                />
            ))}
        </>

    )
}

export default BicyclesFeeds;