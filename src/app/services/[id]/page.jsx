'use client'
import ServiceBannar from '@/components/services/serviceBannar';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export const getServiceDetails = async (id) => {
  const res = await fetch(`http://localhost:3000/api/service/${id}`);
  const result = await res.json();
  return result;
};

const Page = ({ params }) => {
  const [service, setService] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      const result = await getServiceDetails(params.id);
      setService(result);
    };
    fetchService();
  }, [params.id]);

  if (!service) return <div>Loading...</div>;

  return (
    <section>
      <ServiceBannar></ServiceBannar>
      <section className="flex justify-center">
     <div className='w-[70%]'>
      <img src={service.img} alt={service.img} className="w-full h-[450px]"></img>
     <p>{service.title}</p> <br />
      <p>{service.description}</p>
      {/* You can add more service details here */}
     </div>
     <div className='w-[30%]'>

     </div>
    </section>
    </section>
  );
};

export default Page;
