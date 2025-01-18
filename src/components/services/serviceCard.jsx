'use client'
import Image from 'next/image';
import Link from 'next/link';
import useAllServices from '@/Hooks/useAllService';
import SearchService from './filters/searchService';
import CategoryService from './filters/categoryService';

const ServiceCard = () => {
    const [products, isLoading, refetch, currentPage, setCurrentPage, totalPages] = useAllServices();

    if (isLoading) {
      refetch();
        return <div>Loading...</div>;
    }

    return (
        <div className="container max-w-[1200px] mx-auto">
            {/* filters of service */}
            <div className='flex justify-between px-6 py-3'>
            <SearchService></SearchService>
            <CategoryService></CategoryService>
            </div>
            {/* Cards */}
            <div className="grid justify-center my-5 md:grid-cols-2 lg:grid-cols-3">
                {products?.map((service) => (
                    <div key={service._id} className="border-y-2 border-[#e76637] card bg-base-100 w-96 shadow-xl mb-2">
                        <figure>
                            <Image src={service.img} alt={service.title} width={300} height={350} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{service.title}</h2>
                            <p>{service.description.slice(0, 40)}...</p>
                            <div className="card-actions justify-end">
                                <Link href={`services/${service._id}`}>
                                    <button className="btn btn-outline">View Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
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
