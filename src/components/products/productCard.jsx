'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import part1 from '../../../public/assets/images/products/1.png'
import part2 from '../../../public/assets/images/products/2.png'
import part3 from '../../../public/assets/images/products/3.png'
import part4 from '../../../public/assets/images/products/4.png'
import part5 from '../../../public/assets/images/products/5.png'
import part6 from '../../../public/assets/images/products/6.png'

import Image from 'next/image';

const ProductCard = () => {
  const [products, setProducts] = useState([]);
    const parts=[part1, part2, part3, part4, part5, part6]
  useEffect(() => {
    axios('/data.json')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {products.map((product, index) => (
        <div key={index} className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <Image src={parts[index]} alt={product.image} height={200} width={200}></Image>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <p>{product.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
