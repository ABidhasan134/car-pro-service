import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const UseUser = (email) => {
    console.log("user email from hook", email);
  const {data:oneUser={},isloading,refetch}=useQuery({
    queryKey: ['oneUser'],
    queryFn: async ()=>{
        const res= await axios.get(`/api/user/${email}`)
        const result = res.data.result;
        // console.log("this is from hook response",result);
        return result;
    }
  })
  return [oneUser,isloading,refetch];
}

export default UseUser
