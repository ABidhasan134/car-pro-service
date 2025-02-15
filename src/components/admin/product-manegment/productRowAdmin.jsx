import React from 'react'

const ProductRowAdmin = ({product,index,refetch}) => {
    console.log(product,index)
  return (
    <tr>
           <th>{index+1}</th>
           <td>{product.name}</td>
           <td>{product.brand_name}</td>
           <td>{product.category}</td>
           <td>{product.quantity}</td>
           <td>{product.price}</td>
           <td>{product.size}</td>
           <td>{product.retailer_name}</td>
           <td></td>
         </tr>
  )
}

export default ProductRowAdmin
