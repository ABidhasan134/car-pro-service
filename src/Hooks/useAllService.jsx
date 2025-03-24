'use client'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

// with pagination
const useAllServices = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ["products", currentPage],
        queryFn: async () => {
            const response = await axios.get(
                `/api/service?page=${currentPage}&pageSize=3`
            );
            return response.data; // Return the full response data
        },
    });

    //  Move state update to useEffect
    useEffect(() => {
        if (products?.totalPages) {
            setTotalPages(products.totalPages);
        }
    }, [products]); // Runs only when products change

    return [products?.result || [], isLoading, refetch, currentPage, setCurrentPage, totalPages];
};

export default useAllServices;
