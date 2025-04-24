'use client'
import ServiceBannar from '@/components/services/serviceBannar';
import ServiceDetials from '@/components/services/serviceDetials';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export const getServiceDetails = async (id) => {
  const res = await fetch(`http://localhost:3000/api/service/${id}`);
  const result = await res.json();
  return result;
};

const Page = ({ params }) => {
  const paramsData = useParams(); 
  const [service, setService] = useState(null);
  console.log("params data is here",paramsData)
  useEffect(() => {
    const fetchService = async () => {
      const result = await getServiceDetails(params.id);
      setService(result);
    };
    fetchService();
  }, [paramsData.id]);
  // console.log("single service is here",service)
  // if (!service) return <div>Loading...</div>;

  return (
    <section className='container mx-auto grid'>
      <ServiceBannar />
      <section className="flex justify-center mt-20">
        <ServiceDetials service={service} />
      </section>
    </section>
  );
};

export default Page;
