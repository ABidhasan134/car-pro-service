'use client'
import useProducts from '@/Hooks/useProducts'
import React from 'react'
import ProductRowAdmin from './productRowAdmin'

const ProductTable = () => {
 const [productss, isLoading, refetch]=useProducts()
 console.log(productss);
 if(isLoading){
  return <div></div>
 }
  return (
    <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Product Name</th>
        <th>Brand Name</th>
        <th>category</th>
        <th>quantity available</th>
        <th>price(1 pic)</th>
        <th>Retailer Name</th>
        <th>size available</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        productss.map((product,index)=>{
          return(
          <ProductRowAdmin key={index} product={product} index={index} refetch={refetch}></ProductRowAdmin>)
        })
      }
    </tbody>
  </table>
</div>
  )
}

export default ProductTable
