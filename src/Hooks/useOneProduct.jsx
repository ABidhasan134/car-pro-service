'use client'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useOneProduct = (id) => { // id is passed as an argument
  // console.log("this is from hook",id);
  const { data:oneProduct=[], isLoading, refetch } = useQuery({
    queryKey: ['oneProduct', id], // Include id in queryKey for uniqueness
    queryFn: async () => {
      const res = await axios.get(`/api/products/${id}`); // Use correct API endpoint
      console.log(res.data.result)
      return res.data.result; // Ensure this accesses the right data structure
    },
    enabled: !!id, // Fetch only if id exists
  });

  return [oneProduct, isLoading, refetch]; // Return as an array
};

export default useOneProduct;
