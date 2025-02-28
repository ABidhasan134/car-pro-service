import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const useAllUser = () => {
  const {data:AllUser=[],refetch,isLoading}=useQuery({
    queryKey: ["AllUser"],
    queryFn: async ()=>{
        const response= await axios.get('/api/admin/allUser')
        const data=response.data.result;
        console.log("here is all user",data)
        return data;
    }
  })
  return [AllUser,refetch,isLoading];
}

export default useAllUser
