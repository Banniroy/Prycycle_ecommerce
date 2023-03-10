import React from 'react';
import BicyclePagePost from './BicyclePagePost';
import '../Css/AllproductCategories.css';

const BicyclesFeeds = ({ Bicycleposts }) => {

    return (
        <>
            {Bicycleposts.map(postMapped => (
                <BicyclePagePost
                    key={postMapped.id}
                    postMapped={postMapped}
                />
            ))}
        </>

    )
}

export default BicyclesFeeds;