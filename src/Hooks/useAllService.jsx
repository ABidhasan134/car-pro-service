'use client'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const useAllServices = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ["products", currentPage],
        queryFn: async () => {
            const response = await axios.get(
                `/api/service?page=${currentPage}&pageSize=3`
            );
            setTotalPages(response.data.totalPages);
            return response.data.result;
        },
    });

    return [products, isLoading, refetch, currentPage, setCurrentPage, totalPages];
};

export default useAllServices;
