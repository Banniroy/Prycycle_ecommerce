import React from 'react';
import AccessoriesPagePost from './AccessoriesPagePost';
import '../Css/AllproductCategories.css';

const AccessoriesFeeds = ({ Accessoriesposts }) => {

    return (
        <>
            {Accessoriesposts.map(postMapped => (
                <AccessoriesPagePost
                    key={postMapped.id}
                    postMapped={postMapped}
                />
            ))}
        </>

    )
}

export default AccessoriesFeeds;