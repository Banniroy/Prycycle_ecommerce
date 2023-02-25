import React from 'react';
import '../Css/PostProduct.css';

const PostProduct = () => {
  return (
    <section className='PostProduct'>
      <form action="" className='form'>
        <label className='label_1' htmlFor="">Choose a name for your product</label>
        <input
          className='input_info'
          type="text"
          name=""
          id=""
          placeholder=''
        />
        <label
          className='info_product'
        >Information about your product</label>
        <textarea></textarea>
        <div className="container">
          <input type="file" />
        </div>
        <label htmlFor="">Price</label>
        <input
          type="text"
          name=""
          id=""
          placeholder='$...'
        />
        <button>Submit</button>
      </form>
    </section>
  )
}

export default PostProduct