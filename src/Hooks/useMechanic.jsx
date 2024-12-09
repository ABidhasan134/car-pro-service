'use client'
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useMechanic = () => {

    const{data:mechanics=[], isLoading, refetch} = useQuery({
        queryKey : ['mechanics'],
        queryFn: async()=>{
            const res= await axios.get('/api/mechanics');
            const data=res.data.result;
            console.log("This data for mechanics from hook",data);
            return data;
        }
    })
    return [mechanics, isLoading, refetch];
}

export default useMechanic
