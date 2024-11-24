'use client'
import useOneProduct from '@/Hooks/useOneProduct';
import React, { useEffect, useState } from 'react';
import AddAndSubBtn from './addAndSubBtn';
import axios from 'axios';
import { useSession } from 'next-auth/react';

export const handelIncrese = async (newValue,setCardItem, setStock, id,refetch,mode) => {
  console.log("newValue from details",newValue)
  setCardItem(newValue);
  if (newValue >= 0) {
    try {
      console.log("Updating stock for product ID:", id);

      // Update the local state
      setStock(newValue);

      // Await the API response
      const res = await axios.post(`/api/products/${id}`, { quantity: newValue,mode});

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
  const [cardItem,setCardItem]=useState(0);
  const session=useSession();
  // console.log("id of product",oneProduct?.quantity)
  const handelCardList=async()=>{
    const userEmail=session.data.user.email;
    const res=await axios.post(`/api/user/${userEmail}`)
    const data=res.data;
    console.log(data);
  }
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
        <AddAndSubBtn stock={stock} setCardItem={setCardItem} setStock={setStock} id={oneProduct?._id} refetch={refetch}/>
        <button  className={`btn btn-outline ${cardItem <= 0 ? 'disable' : ''}`} 
  disabled={cardItem <= 0}
         onClick={()=>handelCardList()}>Add to Cart</button>
      </div>
    </div>
  );
};

export default DetailsText;
