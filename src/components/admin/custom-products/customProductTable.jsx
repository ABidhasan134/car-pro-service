'use client'
import useAllUser from '@/Hooks/useAllUser'
import React, { useState, useEffect } from 'react'
import CustomTableRow from './customTableRow';
import TitleAndSub from '@/components/shared/titleAndSub';

const CustomProductTable = () => {
    const [AllUser, refetch, isLoading] = useAllUser();
    const [totalServiceArr, setTotalServiceArr] = useState([]);
    // Calculate total number of custom services
    const totalCustomServices = AllUser?.reduce((sum, user) => {
      return sum + (user.customservices?.length || 0);
    }, 0);

    // Update totalServiceArr when totalCustomServices changes
    useEffect(() => {
      const newArray = Array.from({ length: totalCustomServices }, (_, idx) => idx + 1);
      setTotalServiceArr(newArray);
    }, [totalCustomServices,AllUser]);


  return (
    <>
    <TitleAndSub title={`Total custom service is ${totalCustomServices}`}></TitleAndSub>
    <div className="overflow-x-auto">
      <table className="table">
        {/* Table Head */}
        <thead>
          <tr>
            <th>#</th> {/* Serial Number Column */}
            <th>User Email</th>
            <th>Booking Email</th>
            <th>User Name</th>
            <th>Phone</th>
            <th>Model</th>
            <th>Time and Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {AllUser.map((user, userIndex,index) => 
            (
              <CustomTableRow 
                key={index+1} 
                user={user}
                serialNo={totalServiceArr} // Assigning serial number
              />
            )
          )}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default CustomProductTable;
