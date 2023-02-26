import React from 'react';
import BicyclePagePost from './BicyclePagePost';

const Feeds = ({ posts }) => {

    return (
        <>
            {posts.map(postMapped =>(
                <BicyclePagePost 
                    key={postMapped.id}
                    postMapped={postMapped}
                /> 
            ))}
        </>

    )
}

export default Feeds