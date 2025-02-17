'use client'
import React, { useState } from 'react'
import DetailsModal from '../services/detailsModal';
import Link from 'next/link';

const ProductRowAdmin = ({product,index,refetch}) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
      const [isModalOpen, setIsModalOpen] = useState(false);
      const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProduct(null);
        setIsModalOpen(false);
    };
    // console.log(product,index)
  return (
           <>
    <tr>
           <th>{index+1}</th>
           <td>{product.name}</td>
           <td>{product.brand_name}</td>
           <td>{product.category}</td>
           <td>{product.quantity}</td>
           <td>{product.price}</td>
           <td>{product.size}</td>
           <td>{product.retailer_name}</td>
           {/* Modal */}
           <td>
                    <Link href={`/admin/product-managment/${product._id}`}>
                        <button className="btn bg-transparent hover:bg-red-500 border-2 border-red-500">
                            Update product
                        </button>
                    </Link>
                </td>
           <th className="w-[350px]">
                    <button
                        className="btn bg-transparent hover:bg-red-500 border-2 border-red-500"
                        onClick={() => openModal(product)}
                    >
                        Details
                    </button>
                </th>
         </tr>
         {isModalOpen && (
                <DetailsModal service={selectedProduct} closeModal={closeModal} />
            )}
      </>
  )
}

export default ProductRowAdmin
