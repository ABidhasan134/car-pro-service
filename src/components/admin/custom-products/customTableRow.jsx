"use client";
import useAllUser from "@/Hooks/useAllUser";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const CustomTableRow = ({
  user,
  totalCustomServices,
  totalServiceArr,
  serialNo,
}) => {
  const [AllUser, refetch, isLoading] = useAllUser();
  // console.log("this is from the ",serialNo)

  const changeStatus = async (status, userEmail, customID) => {
    console.log(status);
    const response = await axios.put(`/api/admin/customService/${userEmail}`, {
      bookingStatus: status,
      customID: customID,
    });

    console.log(response.data.result);

    if (response.data.result.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You have updated the custom service status",
        showConfirmButton: false,
        timer: 1500,
      });

      await refetch(); // Ensure fresh data
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "You can't update this service",
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
        const response = await axios.delete(
          `/api/admin/customService/${userEmail}`,
          {
            data: { customID },
          }
        );

        console.log("Response:", response.data);

        if (response.data.result?.modifiedCount > 0) {
          refetch();
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
                const response = await axios.delete(
                  `/api/admin/customService/${userEmail}`,
                  {
                    data: { customID },
                  }
                );

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
              <td>{index + 1}</td>
              <td>{service.userEmail}</td>
              <td>{service.bookingemail || service.email}</td>
              <td>{service.bookingName || service.name}</td>
              <td>{service.bookingPhone}</td>
              <td>{service.vehicalName}</td>
              <td>{service.dateTime}</td>
              <td className="flex items-center">
                {service.bookingStatus}
                {["pending", "confirm", "rejected"].includes(
                  service.bookingStatus
                ) && (
                  <>
                    <div className="dropdown ml-2 mr-2">
                      <div
                        tabIndex={0}
                        role="button"
                        className={`h-6 w-6 rounded-full ${
                          service.bookingStatus === "pending"
                            ? "bg-blue-600"
                            : service.bookingStatus === "confirm"
                            ? "bg-green-600"
                            : "bg-red-600"
                        } tooltip`}
                      ></div>
                      <ul
                        tabIndex={0}
                        className="z-50 dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-sm"
                      >
                        {service.bookingStatus !== "confirm" && (
                          <li>
                            <button
                              onClick={() =>
                                changeStatus(
                                  "confirm",
                                  service.userEmail,
                                  service.customID
                                )
                              }
                            >
                              Confirm
                            </button>
                          </li>
                        )}
                        {service.bookingStatus !== "pending" && (
                          <li>
                            <button
                              onClick={() =>
                                changeStatus(
                                  "pending",
                                  service.userEmail,
                                  service.customID
                                )
                              }
                            >
                              Pending
                            </button>
                          </li>
                        )}
                        {service.bookingStatus !== "rejected" && (
                          <li>
                            <button
                              onClick={() =>
                                changeStatus(
                                  "rejected",
                                  service.userEmail,
                                  service.customID
                                )
                              }
                            >
                              Rejected
                            </button>
                          </li>
                        )}
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
              </td>
            </tr>
          ))
        : null}
    </>
  );
};

export default CustomTableRow;
