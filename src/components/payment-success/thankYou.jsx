'use client'
import { getServiceDetails } from '@/app/(page)/services/[id]/page';
import useOneProduct from '@/Hooks/useOneProduct';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import payImage from '@/../../public/assets/images/success/successPay.webp'
import Link from 'next/link';
import Image from 'next/image';

const ThankYou = () => {
    const searchParams = useSearchParams()
        const itemId=searchParams.get('id');
        const itemType=searchParams.get('type');
        // console.log(itemId,itemType);
        const [oneProduct,isLoading, refetch] = useOneProduct(itemId);
        const [itemDetails,setItemDetails]=useState();
        // const [serviceLoading, setServiceLoading] = useState(true)
        // console.log("this is successfully page for product", oneProduct);
        
    
    useEffect(() => {
        if (itemType === 'service' && itemId) {
            getServiceDetails(itemId)
                .then((serviceDetails) => {
                    const data = serviceDetails.result;
                    setItemDetails(serviceDetails);
                    // console.log("success type service page", serviceDetails);
                    // setServiceLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching service details:", error);
                });
        }
    }, [itemId, itemType]);
    if(isLoading){
        refetch()
        return <p>Loading</p>
    }
    
  return (
    <div className='min-h-[600px] divide-y gap-0 text-center my-2 container mx-auto'>
      <p className='text-5xl'>congratulations</p>
      <div className='flex justify-center'>
      <Image src={payImage} alt='paying Image' className='h-[50%] w-[40%]'></Image>
      </div>
      <p className='font-semibold text-2xl'>your payement is successful</p>
      <p className=' text-2xl'>Thank you for your payment. An email will be sent soon</p>
      <Link href='/' className='text-[#FF3811] my-4'>Back to home</Link>
    </div>
  )
}
export default ThankYou;
    
