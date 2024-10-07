'use client'
import { useState, useEffect } from 'react';
import { getAllServices } from '@/utils/fetchServices';

const ServicePage = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const serviceData = await getAllServices();
            setData(serviceData.result);
            setLoading(false);
            console.log(serviceData.result);
        };
        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h1>Service Page</h1>
            {data?.result?.map(service => (
                <div key={service._id}>{service.name}</div>
            ))}
        </div>
    );
};

export default ServicePage;
