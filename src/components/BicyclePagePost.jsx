import React from 'react'
import { Link } from 'react-router-dom';
import '../Css/BicyclePage.css';

const BicyclePagePost = ({ postMapped }) => {
  
  return (
    <article className='post'>
      <Link className='post-con' to={`/post/${postMapped.id}`}>
        <div className="img-container">{ }</div>
        <div className="info-container">
          <h2>{postMapped.title}</h2>
          <p>{postMapped.price}</p>
          <p className='postDate'>{postMapped.datetime}</p>
        </div>
      </Link>
      <p className='postBody'>{
        (postMapped.body).length <= 25
          ? postMapped.body
          : `${(postMapped.body).slice(0, 45)}...`
      }</p>
    </article>
  )
}

export default BicyclePagePost 
