import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const UseSingelService = (id) => {
 const {data:singleService={},isLoading,refetch}=useQuery({
    queryKey: ["single service"],
    queryFn: async()=>{
        const res= await axios.get(`/api/service/${id}`)
        const result= res.data.result;
        console.log("this singel service is from the hook", result);
        return result;
    }
 })
 return [singleService,isLoading,refetch];
}

export default UseSingelService
