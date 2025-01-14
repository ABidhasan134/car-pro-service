'use client'
import { useState, useEffect } from 'react';
import { getAllServices } from '@/utils/fetchServices';
import Image from 'next/image';
import Link from 'next/link';

const ServiceCard = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const serviceData = await getAllServices();
            setData(serviceData.result);
            setLoading(false);
            // console.log(serviceData?.result);
        };
        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div className='container max-w-[1200px] mx-auto grid justify-center my-5 md:grid-cols-2 lg:grid-cols-3 '>
            {data?.map(service => (
                 <div className="border-y-2 border-[#e76637] card bg-base-100 w-96 shadow-xl mb-2">
                 <figure>
                   <Image src={service.img} width={300} height={350}
                   ></Image>
                 </figure>
                 <div className="card-body">
                   <h2 className="card-title">{service.title}</h2>
                   <p>{service.description.slice(0,40)}....</p>
                   <div className="card-actions justify-end">
                     <Link href={`services/${service._id}`}>
                     <button className="btn btn-outline">veiw Details</button>
                     </Link>
                   </div>
                 </div>
               </div>
            ))}
        </div>
    );
};

export default ServiceCard;

