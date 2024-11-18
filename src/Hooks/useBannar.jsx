import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useBannar = () => {
    const {data:bannarList=[],isLoading,refetch}=useQuery({
        queryKey: ['bannarList'],
        queryFn: async()=>{
            const response= await axios.get('/api/bannar')
            const result= response.data.result;
            console.log("here is the result from bannar", result)
            return result
        }
    })
    return [bannarList,isLoading,refetch]
}

export default useBannar
