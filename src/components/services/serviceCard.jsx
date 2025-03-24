'use client';
import Image from 'next/image';
import Link from 'next/link';
import useAllServices from '@/Hooks/useAllService';
import SearchService from './filters/searchService';
import CategoryService from './filters/categoryService';
import { useEffect, useState } from 'react';
import CardsServices from './cardsServices';
import { useMemo } from 'react';

const ServiceCard = () => {
    const [products, isLoading, refetch, currentPage, setCurrentPage, totalPages] = useAllServices();
    const [categoryData, setCategoryData] = useState([]);
    const [categoryTotalPages, setCategoryTotalPages] = useState(1); // To track category-based pagination
    const [searcherService, setSearcherService] = useState([]);
    const [searcherServicepages,setSearcherServicePages] = useState(1)
    // Determine the correct total pages for pagination

    // Update displayData whenever products or categoryData change
    const displayData = useMemo(() => {
        return categoryData.length > 0 ? categoryData : searcherService.length > 0 ? searcherService : products;
    }, [categoryData, searcherService, products]);

    // ✅ Compute effectiveTotalPages dynamically
    const effectiveTotalPages = useMemo(() => {
        return categoryData.length > 0 ? categoryTotalPages : searcherService.length > 0 ? searcherServicepages : totalPages;
    }, [categoryData, searcherService, categoryTotalPages, searcherServicepages, totalPages]);
    
    if (isLoading) {
        return <div>Loading...</div>;
    }
    

    return (
        <div className="container max-w-[1200px] mx-auto grid justify-center">
            {/* Filters of service */}
            <div className="relative md:flex sm:grid sm:justify-center md:left-0 left-7 gap-2 md:justify-between px-6 py-3">
                <SearchService setCurrentPage={setCurrentPage} setSearcherService={setSearcherService} setSearcherServicePages={setSearcherServicePages}/>
                <CategoryService 
                    setcategoryData={setCategoryData} 
                    setCategoryTotalPages={setCategoryTotalPages} 
                    setCurrentPage={setCurrentPage} // Reset pagination on category change
                />
            </div>
            
            {/* Cards */}
            <div className="relative grid justify-center my-5 md:grid-cols-3 md:mx-3  lg:mx-0 grid-cols-1 gap-3 w-full">
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
                    Page {currentPage} of {effectiveTotalPages}
                </span>
                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, effectiveTotalPages))}
                    disabled={currentPage === effectiveTotalPages}
                    className="btn btn-primary"
                >
                    Next Page
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;
