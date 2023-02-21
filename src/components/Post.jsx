import React from 'react';
const Post = ( {postMapped }) => {
  return (
    <article className='post'>
        <h1>{`/post/${postMapped.id}`}</h1>
            <h2>{postMapped.title}</h2>
            <p className='postDate'>{postMapped.datetime}</p>
        <p className='postBody'>{
            (postMapped.body).length <= 25
                ? postMapped.body
                : `${(postMapped.body).slice(0, 45)}...`
        }</p>
    </article>
  )
}

export default Post