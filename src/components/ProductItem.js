import React from 'react'
import './Productitem.css';




function Products(props) {
  return (
    <>
      <div className='product'>
      <img className='logo' src={props.image} alt="Xhinse"/>
      <h3>{props.title}</h3>
      <h1>{props.description}</h1>
      <p className='price-before'>{props.priceBefore}</p>
      <p className='price-discount'>{props.discountPrice}</p>
      </div>

    </>
  )
}

export default Products;
