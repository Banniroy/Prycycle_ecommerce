import React from 'react';
import SkateboardPagePost from './SkateboardPagePost';
import '../Css/AllproductCategories.css';

const SkateboardFeeds = ({ skateboardItems }) => {

    return (
        <>
            {skateboardItems.map(postMapped => (
                <SkateboardPagePost
                    key={postMapped.id}
                    postMapped={postMapped}
                />
            ))}
        </>

    )
}

export default SkateboardFeeds