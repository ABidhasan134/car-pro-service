import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProducts = () => {
    const { data: response = {}, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axios.get('/api/products');
            // console.log('API Response:', res.data.result); // Debug API response
            return res.data.result;
        }
    });
    const productss = Array.isArray(response) ? response : response.products || [];

    return [productss, isLoading, refetch];
};

export default useProducts;
