'use client'
import React from 'react';
import RowTable from './rowTable';
import UseUser from '@/Hooks/useUser';
import { useSession } from 'next-auth/react';

const TableService = () => {
  const sesseion = useSession()
  // console.log(sesseion?.data?.user)
  const [oneUser,isloading,refetch]=UseUser(sesseion?.data?.user?.email)
  console.log('service history from table',oneUser);
  if (isloading) {
    refetch();
    return <div>Loading...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* Table head */}
        <thead>
          <tr>
            <th></th>
            <th className="xl:text-2xl lg:text-xl">serial No</th>
            <th className="xl:text-2xl lg:text-xl xl:flex hidden">service Id</th>
            <th className="xl:text-2xl lg:text-xl">Name</th>
            <th className="xl:text-2xl lg:text-xl">price</th>
            <th className="xl:text-2xl lg:text-xl">status</th>
            <th className="xl:text-2xl lg:text-xl">Service Date</th>
            <th className="xl:text-2xl lg:text-xl">payment by</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {oneUser?.servicesHistory?.map((item, index) => (
            <RowTable key={item._id || index} data={item} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableService;
