import React from 'react'
import ProductItem from '../components/ProductItem';
import image from '../components/pantolla.jpeg';


export default function Home() {
  return (
    <div>
      <ProductItem
      image={image}
      
      title="Celio"
      description="Xhinse Slim Fit"
      priceBefore="59.99"
      discountPrice="47.99"

      />
      

    </div>
  );
}



