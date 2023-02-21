import React from 'react';
import Post from './Post';

const Feed = ({ posts }) => {

    return (
        <>
            {posts.map(postMapped =>(
                <Post 
                    key={postMapped.id}
                    postMapped={postMapped}
                /> 
            ))}
        </>

    )
}

export default Feed