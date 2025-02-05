"use client";
import React from "react";

const DetailsModal = ({ service, closeModal }) => {
    if (!service) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white opacity-100 p-6 rounded-lg shadow-lg w-[400px]">
                <button
                    onClick={closeModal}
                    className="relative top-2 right-2 text-gray-600 hover:text-gray-900"
                >
                    ✕
                </button>
                <h2 className="text-lg font-bold">{service.title}</h2>
                <p>Category: {service.category}</p>
                <p>Type: {service.service_type}</p>
                <p>Price: ${service.price}</p>
                <p>Description: {service.description}</p>
            </div>
        </div>
    );
};

export default DetailsModal;
