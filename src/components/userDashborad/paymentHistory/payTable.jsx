'use client'
import UseUser from '@/Hooks/useUser';
import { useSession } from 'next-auth/react';
import React from 'react'
import PayRow from './payRow';

const PayTable = () => {
    const sesseion = useSession()
  // console.log(sesseion?.data?.user)
  const [oneUser,isloading,refetch]=UseUser(sesseion?.data?.user?.email)
  console.log('payHistory booking from table',oneUser);
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
        <th className="text-2xl">service/product</th>
        <th className="text-2xl">payment Id</th>
        <th className="text-2xl">cetagory</th>
        <th className="text-2xl">payment date</th>
        <th className="text-2xl">price</th>
        <th className="text-2xl">singel item price </th>
        <th className="text-2xl">status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {oneUser?.payment_history?.map((item, index) => (
            <PayRow key={item._id || index} data={item} index={index} />
          ))}
     
    </tbody>
  </table>
</div>
  )
}

export default PayTable
