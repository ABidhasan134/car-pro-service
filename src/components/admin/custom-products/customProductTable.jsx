'use client'
import useAllUser from '@/Hooks/useAllUser'
import React, { useState } from 'react'
import CustomTableRow from './customTableRow';

const CustomProductTable = () => {
    const  [AllUser,refetch,isLoading]=useAllUser();
    // console.log(AllUser);
   
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>user Email</th>
        <th>Booking Email</th>
        <th>user Name</th>
        <th>Phone</th>
        <th>Model</th>
        <th>Time and date</th>
        <th>status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        AllUser.map((user,index)=>{
          return (
            <CustomTableRow user={user} key={index}></CustomTableRow>
          )
        })
      }
    </tbody>
  </table>
</div>
  )
}

export default CustomProductTable
