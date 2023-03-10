import React from 'react';
import SkateboardPagePost from './SkateboardPagePost';
import '../Css/AllproductCategories.css';

const SkateboardFeeds = ({ Skateboardposts }) => {

    return (
        <>
            {Skateboardposts.map(postMapped => (
                <SkateboardPagePost
                    key={postMapped.id}
                    postMapped={postMapped}
                />
            ))}
        </>

    )
}

export default SkateboardFeeds