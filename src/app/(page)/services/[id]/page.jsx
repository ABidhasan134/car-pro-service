'use client'
import ServiceBannar from '@/components/services/serviceBannar';
import ServiceDetials from '@/components/services/serviceDetials';
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
    <section className='container mx-auto grid'>
      <ServiceBannar></ServiceBannar>
      <section className="flex justify-center mt-20">
     <ServiceDetials service={service}></ServiceDetials>
    </section>
    </section>
  );
};

export default Page;
