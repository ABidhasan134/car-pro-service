'use client'
import Image from 'next/image';
import Link from 'next/link';
import useAllServices from '@/Hooks/useAllService';
import SearchService from './filters/searchService';
import CategoryService from './filters/categoryService';
import { useEffect, useState } from 'react';
import CardsServices from './cardsServices';

const ServiceCard = () => {
    const [products, isLoading, refetch, currentPage, setCurrentPage, totalPages] = useAllServices();
    const [categoryData, setCategoryData] = useState([]);
    const [displayData, setDisplayData] = useState([]);

    // Update displayData whenever products or categoryData change
    useEffect(() => {
        setDisplayData(categoryData.length > 0 ? categoryData : products);
    }, [categoryData, products]);

    if (isLoading) {
        refetch();
        return <div>Loading...</div>;
    }

    return (
        <div className="container max-w-[1200px] mx-auto">
            {/* filters of service */}
            <div className="flex justify-between px-6 py-3">
                <SearchService />
                <CategoryService setcategoryData={setCategoryData} />
            </div>
            {/* Cards */}
            <div className="grid justify-center my-5 md:grid-cols-2 lg:grid-cols-3">
                <CardsServices displayData={displayData}></CardsServices>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center my-6">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="btn btn-primary"
                >
                    Previous Page
                </button>
                <span className="mx-4">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="btn btn-primary"
                >
                    Next Page
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;
