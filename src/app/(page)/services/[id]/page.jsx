'use client'
import ServiceBannar from '@/components/services/serviceBannar';
import ServiceDetials from '@/components/services/serviceDetials';
import React, { useEffect, useState } from 'react';

export const getServiceDetails = async (id) => {
  const res = await fetch(`http://localhost:3000/api/service/${id}`);
  const result = await res.json();
  return result;
};

const Page = ({ params }) => {
  const paramsData = React.use(params); // Unwrap the params Promise
  const [service, setService] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      const result = await getServiceDetails(paramsData.id);
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
