import React, { useState } from "react";
import DetailsModal from "./detailsModal";
import Link from "next/link";

const ServiceTableRow = ({ services }) => {
    const [selectedServiceId, setSelectedServiceId] = useState(null);

    const openModal = (id) => {
        setSelectedServiceId(id);
        document.getElementById("details_modal").showModal(); // Open modal
    };

    return (
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
            <td className="w-[350px]">{services?.price}</td>
            <td>
            <Link href={`/admin/services/${services._id}`}><button className="btn bg-transparent hover:bg-red-500 border-2 border-red-500">Update Service</button></Link>
            </td>
            <th className="w-[350px]">
                <button
                    className="btn bg-transparent hover:bg-red-500 border-2 border-red-500"
                    onClick={() => openModal(services._id)}
                >
                    Details
                </button>
            </th>

            {/* Modal */}
            <dialog id="details_modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                    </form>
                    {selectedServiceId && <DetailsModal serviceId={selectedServiceId} />}
                </div>
            </dialog>
        </tr>
    );
};

export default ServiceTableRow;
