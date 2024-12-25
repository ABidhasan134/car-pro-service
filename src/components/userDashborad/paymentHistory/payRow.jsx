import React from 'react'

const PayRow = ({data,index}) => {
  return (
    <tr>
        <th>{index+1}</th>
        <td>{data.Item_name}</td>
        <td>{data.payment_Id}</td>
        <td>{data.product_type || 'genarel product'} </td>
        <td>{data.pay_date}</td>
        <td>{Math.floor(data.payment_amount)}</td>
        <td>{data.singel_price}</td>
        <td>{data.payment_status}</td>
      </tr>
  )
}

export default PayRow
