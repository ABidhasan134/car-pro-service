import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useAllServices = () => {
    const {data:allService=[],isLoading,refetch}=useQuery({
        queryKey: ['allService'],
        queryFn: async()=>{
            const response= await axios.get('/api/service/allService');
            console.log(response)
            const result=response.data.result;
            console.log("this is all services without pagination",result)
        }
    })
    return [allService,isLoading,refetch];
}

export default useAllServices
