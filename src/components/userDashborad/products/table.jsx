'use client'
import UseUser from '@/Hooks/useUser';
import { useSession } from 'next-auth/react';
import React from 'react'
import RowProducts from './rowProducts';

const Table = () => {
    const sesseion = useSession()
  // console.log(sesseion?.data?.user)
  const [oneUser,isloading,refetch]=UseUser(sesseion?.data?.user?.email)
  console.log('product booking from table',oneUser);
  if (isloading) {
    refetch();
    return <div>Loading...</div>;
  }
  return (
    <div className="overflow-x-auto">
  <table className="table ">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th className="text-2xl">product name</th>
        <th className="text-2xl">cetagory</th>
        <th className="text-2xl">order date</th>
        <th className="text-2xl">price</th>
        <th className="text-2xl">quantity</th>
        <th className="text-2xl">status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {oneUser?.orderHistory?.map((item, index) => (
            <RowProducts key={item._id || index} data={item} index={index} />
          ))}
     
    </tbody>
  </table>
</div>
  )
}

export default Table
