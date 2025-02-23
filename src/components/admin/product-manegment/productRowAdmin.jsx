'use client'
import React, { useState } from 'react'
import DetailsModal from '../services/detailsModal';
import Link from 'next/link';
import axios from 'axios';

const ProductRowAdmin = ({product,index,refetch}) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
      const [isModalOpen, setIsModalOpen] = useState(false);
      const handelDelete=async(id)=>{
        // console.log("delete btn hiting here",id);
        const response= await axios.delete(`/api/products/${id}`);
        console.log(response.data)
    }
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
           <td>
                    <Link href={`/admin/product-managment/${product._id}`}>
                        <button className="btn bg-transparent hover:bg-red-500 border-2 border-red-500">
                            Update product
                        </button>
                    </Link>
                </td>
           <td>
                    
                        <button onClick={()=>handelDelete(product._id)} className="btn bg-transparent hover:bg-red-500 border-2 border-red-500">
                            Delete
                        </button>
                    
                </td>
           {/* Modal */}
           
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
