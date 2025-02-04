import React, { useEffect, useState } from "react";
import axios from "axios";

const DetailsModal = ({ serviceId }) => {
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!serviceId) return;
        setLoading(true);
        axios
            .get(`/api/service/${serviceId}`)
            .then((response) => {
                setService(response.data);
            })
            .catch((error) => {
                console.error("Error fetching service details:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [serviceId]);

    if (loading) {
        return <p>Loading details...</p>;
    }

    if (!service) {
        return <p>No details available.</p>;
    }

    return (
        <div>
            <h2 className="text-lg font-bold">{service.title}</h2>
            <p>Category: {service.category}</p>
            <p>Type: {service.service_type}</p>
            <p>Price: ${service.price}</p>
            <p>Description: {service.description}</p>
        </div>
    );
};

export default DetailsModal;
