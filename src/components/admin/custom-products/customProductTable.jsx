'use client'
import useAllUser from '@/Hooks/useAllUser'
import React from 'react'

const CustomProductTable = () => {
    const  [AllUser,refetch,isLoading]=useAllUser();
    console.log(AllUser);
  return (
    <div className="overflow-x-auto">
  <table className="table">
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

export default CustomProductTable
