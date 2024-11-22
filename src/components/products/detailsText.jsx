'use client'
import useOneProduct from '@/Hooks/useOneProduct';
import React, { useEffect } from 'react';
import AddAndSubBtn from './addAndSubBtn';

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
    <div className='text-2xl grid gap-3'>
      
      <p className='font-semibold'>{oneProduct?.name}</p>
      <p>Brand: {oneProduct?.brand_name}</p>
      <hr />
      <div className='flex justify-between px-2 gap-6'>
      <div className='grid'>
        <p className='opacity-40'>price</p>
      <p>${oneProduct?.price}</p>
      </div>
      {/* this will be a dropdow as size */}
      <div className='grid'>
        <p className='opacity-40'>Available Size</p>
      <p>${oneProduct?.size}</p>
      </div>
      </div>
      <hr />
      <p >Description: {oneProduct?.description}</p>
      <hr />
      <p>Last {oneProduct?.stock || '1'} left make it your</p>
      <div className='flex gap-6'>
      <AddAndSubBtn stock={oneProduct?.stock || '1'}></AddAndSubBtn>
      <button className='btn btn-outline'>Add to card</button>
      </div>
    </div>
  );
};

export default DetailsText;
