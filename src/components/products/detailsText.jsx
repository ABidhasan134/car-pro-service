'use client'
import useOneProduct from '@/Hooks/useOneProduct';
import React, { useEffect, useState } from 'react';
import AddAndSubBtn from './addAndSubBtn';
import axios from 'axios';

export const handelIncrese = async (newValue, setStock, id,refetch) => {
  if (newValue >= 0) {
    try {
      console.log("Updating stock for product ID:", id);

      // Update the local state
      setStock(newValue);

      // Await the API response
      const res = await axios.post(`/api/products/${id}`, { quantity: newValue });

      // Access the resolved data
      console.log("Server response:", res.data.result);
      if(res.data.result.modifiedCount)
      {
        alert("sucessfully updated")
        refetch();
      }
    } catch (error) {
      console.error("Error updating stock:", error);
    }
  } else {
    console.log("Stock cannot be less than zero.");
  }
};

const DetailsText = ({ id }) => {
  const [oneProduct, isLoading, refetch] = useOneProduct(id);
  const [stock, setStock] = useState(oneProduct?.quantity || 0);
  // console.log("id of product",oneProduct?.quantity)
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
      <p>Last {oneProduct?.quantity || 1} left, make it yours</p>
      <div className="flex gap-6">
        <AddAndSubBtn stock={stock} setStock={setStock} id={oneProduct?._id} refetch={refetch}/>
        <button className="btn btn-outline">Add to Cart</button>
      </div>
    </div>
  );
};

export default DetailsText;
