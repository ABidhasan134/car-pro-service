'use client'
import useAllUser from '@/Hooks/useAllUser';
import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';
import { MdDelete } from "react-icons/md";


const CustomTableRow = ({ user }) => {
  const  [AllUser,refetch,isLoading]=useAllUser();
  // console.log(user)
    const changeStatus =async (status, userEmail) => {
    console.log(status, userEmail);
    const response= await axios.put(`/api/admin/customService/${userEmail}`,{bookingStatus:status});
    console.log(response.data.result)
    if(response.data.result.modifiedCount>0){
      Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your have update custom service status",
          showConfirmButton: false,
          timer: 1500
        });
        refetch();
    }
    else{
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Your can't update this service",
        showConfirmButton: false,
        timer: 1500
      });
    }
    
  };

  const handelDelete=async()=>{
    console.log("delete event fire")
  

  }

  return (
    <>
      {user?.customservices?.length > 0
        ? user.customservices.map((service, index) => (
            <tr key={index}>
              {/* <th>{index + 1}</th> Serial Number */}
              <td>{service.userEmail}</td>
              <td>{service.bookingemail || service.email}</td>
              <td>{service.bookingName || service.name}</td>
              <td>{service.bookingPhone}</td>
              <td>{service.vehicalName}</td>
              <td>{service.dateTime}</td>
              <td className="flex items-center">
                {service.bookingStatus}
                {service.bookingStatus === "panding" && (
                  <div className="dropdown ml-2">
                    <div tabIndex={0} role="button" className="h-6 w-6 rounded-full bg-blue-600 tooltip"></div>
                    <ul tabIndex={0} className="z-50 dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-sm">
                      <li><button onClick={() => changeStatus("confirm", service.userEmail)}>Confirm</button></li>
                      <li><button onClick={() => changeStatus("rejected", service.userEmail)}>Rejected</button></li>
                    </ul>
                  </div>
                )}
                {service.bookingStatus === "confirm" && (
                  <div className="dropdown ml-2">
                    <div tabIndex={0} role="button" className="h-6 w-6 rounded-full bg-green-600 tooltip"></div>
                    <ul tabIndex={0} className="z-50 dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-sm">
                      <li><button onClick={() => changeStatus("pending", service.userEmail)}>Pending</button></li>
                      <li><button onClick={() => changeStatus("rejected", service.userEmail)}>Rejected</button></li>
                    </ul>
                  </div>
                )}
                {service.bookingStatus === "rejected" && (
                  <div className="dropdown ml-2">
                    <div tabIndex={0} role="button" className="h-6 w-6 rounded-full bg-red-600 tooltip"></div>
                    <ul tabIndex={0} className="z-50 dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-sm">
                      <li><button onClick={() => changeStatus("confirm", service.userEmail)}>Confirm</button></li>
                      <li><button onClick={() => changeStatus("pending", service.userEmail)}>Pending</button></li>
                    </ul>
                  </div>
                )}
              </td>
              <td onClick={handelDelete} className='text-3xl hover:text-red-500 hover:cursor-pointer'><MdDelete /></td>
            </tr>
          ))
        : null}
    </>
  );
};

export default CustomTableRow;
