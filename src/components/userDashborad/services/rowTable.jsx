import React from "react";

const RowTable = ({ data, index }) => {
  console.log(data)
  return (
    <tr>
      <th>{index + 1}</th>
      <th>{data.serialNo}</th>
      <th>{data.serviceId}</th>
      <td>{data.name}</td>
      <td>{data.price}</td>
      <td>{data.status}</td>
      <td>{data.currentDate}</td>
      <td>{data.typeOffPay}</td>
    </tr>
  );
};

export default RowTable;
