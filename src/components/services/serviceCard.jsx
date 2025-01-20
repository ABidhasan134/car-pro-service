'use client';
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
    const [categoryTotalPages, setCategoryTotalPages] = useState(1); // To track category-based pagination
    const [effectiveTotalPages,setEffectiveTotalPages]=useState(1)
    const [searcherService, setSearcherService] = useState([]);
    const [searcherServicepages,setSearcherServicePages] = useState(1)
    // Determine the correct total pages for pagination

    // Update displayData whenever products or categoryData change
    useEffect(() => {
        setDisplayData(categoryData.length > 0 ? categoryData:searcherService.length>0?searcherService: products);
        setEffectiveTotalPages(categoryData.length > 0 ? categoryTotalPages:searcherService.length>0?searcherServicepages : totalPages)
    }, [categoryData, products,effectiveTotalPages,searcherService]);
    
    console.log("Here is the current page and effective page",categoryData.length,currentPage,effectiveTotalPages)
    if (isLoading) {
        refetch();
        return <div>Loading...</div>;
    }

    return (
        <div className="container max-w-[1200px] mx-auto">
            {/* Filters of service */}
            <div className="flex justify-between px-6 py-3">
                <SearchService currentPage={currentPage} setSearcherService={setSearcherService} setSearcherServicePages={setSearcherServicePages}/>
                <CategoryService 
                    setcategoryData={setCategoryData} 
                    setCategoryTotalPages={setCategoryTotalPages} 
                    setCurrentPage={setCurrentPage} // Reset pagination on category change
                />
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
