"use client";
import useAllServices from "@/Hooks/useAllServices";
import React from "react";
import ServiceTableRow from "./serviceTableRow";

const AllServices = () => {
  const [allService, isLoading, refetch] = useAllServices();
  // console.log(allService);
  if (isLoading) {
    return <p>Loading...</p>; // Show a loading state while fetching data
  }
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th> Name</th>
            <th>category </th>
            <th>price </th>
            <th>update service</th>
            <th>Delete service</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {allService?.map((services, index) => {
            return (
              <ServiceTableRow
                services={services}
                key={index}
              ></ServiceTableRow>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllServices;
