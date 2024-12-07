'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import { getServiceDetails } from '../services/[id]/page';
import useOneProduct from '@/Hooks/useOneProduct';

const page = () => {
    const searchParams = useSearchParams()
    const itemId=searchParams.get('id');
    const itemType=searchParams.get('type');
    console.log(itemId,itemType);
    const [oneProduct,isLoading, refetch] = useOneProduct(itemId);
    const [itemDetails,setItemDetails]=useState();
    const [serviceLoading, setServiceLoading] = useState(true)
    console.log("this is successfully page for product", oneProduct);
    
    useEffect(() => {
        if (itemType === 'service' && itemId) {
            getServiceDetails(itemId)
                .then((serviceDetails) => {
                    const data = serviceDetails.result;
                    setItemDetails(serviceDetails);
                    console.log("success type service page", serviceDetails);
                    setServiceLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching service details:", error);
                });
        }
    }, [itemId, itemType]);
    if(isLoading){
        return <p>Loading</p>
    }
    if(serviceLoading===true)
    {
        return <p>loading</p>
    }
  return (
    <div>
      payment success
    </div>
  )
}

export default page
