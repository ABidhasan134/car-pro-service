import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useAllServices = () => {
    const {data:products=[],isLoading,refetch}=useQuery({
        queryKey:["products"],
        queryFn:async()=>{
            const response = await axios.get(`/api/service?page=10&pageSize=10`,{})
            const result= response.data.result;
            console.log("this is from the hook of service",result);
            return result
        }
    })
    return [products,isLoading, refetch]
}

export default useAllServices
