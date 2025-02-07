import React, { useState } from "react";
import DetailsModal from "./detailsModal";
import Link from "next/link";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import axios from "axios";

const ServiceTableRow = ({ services,refetch }) => {
    const [selectedService, setSelectedService] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (service) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedService(null);
        setIsModalOpen(false);
    };

    const handelDelete=()=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
            const response= await axios.delete(`/api/admin/service/${services._id}`)
            console.log (response.data);
            if (result.isConfirmed && response.data.result) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            
            refetch();
            }
          });
    }

    return (
        <>
            <tr>
                <td className="w-[350px]">
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img src={services?.img} alt={services?.title} />
                            </div>
                        </div>
                        <div>
                            <div className="text-sm opacity-50">{services?.service_id}</div>
                            <div className="font-bold">{services?.title}</div>
                        </div>
                    </div>
                </td>
                <td className="w-[350px]">{services?.category}</td>
                <td className="w-[350px]">${services?.price}</td>
                <td>
                    <Link href={`/admin/services/${services._id}`}>
                        <button className="btn bg-transparent hover:bg-red-500 border-2 border-red-500">
                            Update Service
                        </button>
                    </Link>
                </td>
                <td>
                    <button className="btn bg-transparent hover:bg-red-500 border-2 border-red-500" onClick={handelDelete}><AiFillDelete className="text-black"></AiFillDelete></button>
                </td>
                <th className="w-[350px]">
                    <button
                        className="btn bg-transparent hover:bg-red-500 border-2 border-red-500"
                        onClick={() => openModal(services)}
                    >
                        Details
                    </button>
                </th>
            </tr>

            {/* Modal */}
            {isModalOpen && (
                <DetailsModal service={selectedService} closeModal={closeModal} />
            )}
        </>
    );
};

export default ServiceTableRow;
