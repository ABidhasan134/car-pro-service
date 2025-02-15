"use client";
import React from "react";

const DetailsModal = ({ service, closeModal }) => {
    console.log("This service from the modal", service);
    
    if (!service) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white opacity-100 p-6 rounded-lg shadow-lg w-[400px] relative">
                <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                >
                    ✕
                </button>
                <h2 className="text-lg font-bold">{service.title}</h2>
                {service?.name && <p>Product name:{service.name}</p>}
                {service?.category && <p>Category: {service.category}</p>}
                {service?.service_type && <p>Type: {service.service_type}</p>}
                {service.quantity && <p>quantity available: {service.quantity}</p>}
                {service.retailer_name && <p>retailer name: {service.retailer_name}</p>}
                <p>Price: ${service.price}</p>
                <p>Description: {service.description}</p>
            </div>
        </div>
    );
};

export default DetailsModal;
