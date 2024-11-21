'use client'
import useOneProduct from '@/Hooks/useOneProduct';
import React, { useEffect } from 'react';

const DetailsText = ({ id }) => {
  console.log("id from the font end",id);
 
  const [oneProduct, isLoading, refetch] = useOneProduct(id); // Destructure the array
  console.log(oneProduct);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!oneProduct) {
    return <div>No product found.</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      {/* <p>Title: {oneProduct?.title}</p> */}
      {/* <p>Description: {oneProduct?.description}</p> */}
    </div>
  );
};

export default DetailsText;
