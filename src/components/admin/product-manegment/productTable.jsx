'use client'
import useProducts from '@/Hooks/useProducts'
import React from 'react'

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
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      
    </tbody>
  </table>
</div>
  )
}

export default ProductTable
