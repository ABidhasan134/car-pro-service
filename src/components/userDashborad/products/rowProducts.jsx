import React from 'react'

const RowProducts = ({data,index}) => {
    console.log(data,index)
  return (
    <tr>
        <th>{index+1}</th>
        <td>{data.name}</td>
        <td>{data.category || 'genarel product'} </td>
        <td>{data.order_date}</td>
        <td>{data.price}</td>
        <td>{data.quantity}</td>
        <td>{data.order_type}</td>
      </tr>
  )
}

export default RowProducts

