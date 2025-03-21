"use client";
import useAllUser from "@/Hooks/useAllUser";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";

               
const CustomTableRow = ({ user,totalCustomServices,totalServiceArr,serialNo}) => {
  const [AllUser, refetch, isLoading] = useAllUser();
  // console.log("this is from the ",serialNo)
  
  
  const changeStatus = async (status, userEmail) => {
    console.log(status, userEmail);
    const response = await axios.put(`/api/admin/customService/${userEmail}`, {
      bookingStatus: status,
    });
    console.log(response.data.result);
    if (response.data.result.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your have update custom service status",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Your can't update this service",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleDelete = async (customID, userEmail) => {
    try {
      console.log("Deleting:", customID, userEmail);
  
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });
  
      if (result.isConfirmed) {
        const response = await axios.delete(`/api/admin/customService/${userEmail}`, {
          data: { customID },
        });
  
        console.log("Response:", response.data);
  
        if (response.data.result?.modifiedCount > 0) {
          const handleDelete = async (customID, userEmail) => {
  try {
    console.log("Deleting:", customID, userEmail);

    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      const response = await axios.delete(`/api/admin/customService/${userEmail}`, {
        data: { customID },
      });

      console.log("Response:", response.data);

      if (response.data.result?.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: "Deleted!",
          text: "The custom service has been deleted successfully.",
          icon: "success",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed to delete",
          text: "The custom service could not be deleted.",
        });
      }
    }
  } catch (error) {
    console.error("Error deleting custom service:", error);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Something went wrong while deleting the service.",
    });
  }
};
          Swal.fire({
            title: "Deleted!",
            text: "The custom service has been deleted successfully.",
            icon: "success",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Failed to delete",
            text: "The custom service could not be deleted.",
          });
        }
      }
    } catch (error) {
      console.error("Error deleting custom service:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong while deleting the service.",
      });
    }
  };

  return (
    <>
      {user?.customservices?.length > 0
        ? user.customservices.map((service, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{service.userEmail}</td>
              <td>{service.bookingemail || service.email}</td>
              <td>{service.bookingName || service.name}</td>
              <td>{service.bookingPhone}</td>
              <td>{service.vehicalName}</td>
              <td>{service.dateTime}</td>
              <td className="flex items-center">
                {service.bookingStatus}
                {service.bookingStatus === "panding" && (
                  <>
                    <div className="dropdown ml-2 mr-2">
                      <div
                        tabIndex={0}
                        role="button"
                        className="h-6 w-6 rounded-full bg-blue-600 tooltip"
                      ></div>
                      <ul
                        tabIndex={0}
                        className="z-50 dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-sm"
                      >
                        <li>
                          <button
                            onClick={() =>
                              changeStatus("confirm", service.userEmail)
                            }
                          >
                            Confirm
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() =>
                              changeStatus("rejected", service.userEmail)
                            }
                          >
                            Rejected
                          </button>
                        </li>
                      </ul>
                    </div>
                    <button
                      onClick={() =>
                        handleDelete(service.customID, service.userEmail)
                      }
                      className="text-3xl hover:text-red-500 hover:cursor-pointer"
                    >
                      <MdDelete />
                    </button>
                  </>
                )}
                {service.bookingStatus === "confirm" && (
                  <div className="dropdown ml-2">
                    <div
                      tabIndex={0}
                      role="button"
                      className="h-6 w-6 rounded-full bg-green-600 tooltip"
                    ></div>
                    <ul
                      tabIndex={0}
                      className="z-50 dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-sm"
                    >
                      <li>
                        <button
                          onClick={() =>
                            changeStatus("pending", service.userEmail)
                          }
                        >
                          Pending
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() =>
                            changeStatus("rejected", service.userEmail)
                          }
                        >
                          Rejected
                        </button>
                      </li>
                    </ul>
                    <button
                      onClick={handleDelete}
                      className="text-3xl hover:text-red-500 hover:cursor-pointer"
                    >
                      <MdDelete />
                    </button>
                  </div>
                )}
                {service.bookingStatus === "rejected" && (
                  <div className="dropdown ml-2">
                    <div
                      tabIndex={0}
                      role="button"
                      className="h-6 w-6 rounded-full bg-red-600 tooltip"
                    ></div>
                    <ul
                      tabIndex={0}
                      className="z-50 dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-sm"
                    >
                      <li>
                        <button
                          onClick={() =>
                            changeStatus("confirm", service.userEmail)
                          }
                        >
                          Confirm
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() =>
                            changeStatus("pending", service.userEmail)
                          }
                        >
                          Pending
                        </button>
                      </li>
                    </ul>
                    <button
                      onClick={handleDelete}
                      className="text-3xl hover:text-red-500 hover:cursor-pointer"
                    >
                      <MdDelete />
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))
        : null}
    </>
  );
};

export default CustomTableRow;
