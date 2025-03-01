'use client'
import useAllUser from '@/Hooks/useAllUser'
import React from 'react'
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
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
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
