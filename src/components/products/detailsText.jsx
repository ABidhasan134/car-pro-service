'use client'
import useOneProduct from '@/Hooks/useOneProduct';
import React, { useEffect, useState } from 'react';
import AddAndSubBtn from './addAndSubBtn';

export const handelIncrese = (newValue, setStock) => {
  if (newValue >= 0) { // Ensure stock doesn't go negative
    setStock(newValue);
    console.log("Updated stock value:", newValue);
  } else {
    console.log("Stock cannot be less than zero.");
  }
};
const DetailsText = ({ id }) => {
  const [oneProduct, isLoading, refetch] = useOneProduct(id);
  const [stock, setStock] = useState(oneProduct?.stock || 0);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!oneProduct) {
    return <div>No product found.</div>;
  }

  return (
    <div className="text-2xl grid gap-3">
      <p className="font-semibold">{oneProduct?.name}</p>
      <p>Brand: {oneProduct?.brand_name}</p>
      <hr />
      <div className="flex justify-between px-2 gap-6">
        <div className="grid">
          <p className="opacity-40">Price</p>
          <p>${oneProduct?.price}</p>
        </div>
        <div className="grid">
          <p className="opacity-40">Available Size</p>
          <p>${oneProduct?.size}</p>
        </div>
      </div>
      <hr />
      <p>Description: {oneProduct?.description}</p>
      <hr />
      <p>Last {oneProduct?.stock || 1} left, make it yours</p>
      <div className="flex gap-6">
        <AddAndSubBtn stock={stock} setStock={setStock} />
        <button className="btn btn-outline">Add to Cart</button>
      </div>
    </div>
  );
};

export default DetailsText;
