import React from 'react';
import { handelIncrese } from './detailsText';

const AddAndSubBtn = ({ stock,setCardItem, setStock,id,refetch }) => {
  // console.log("id from addAndSub",id);
  const valueProvider = (value, mode) => {
    if (mode === 'decrease') {
      handelIncrese(value - 1,setCardItem, setStock,id,refetch,mode='decrease');
    } else if (mode === 'increase') {
      handelIncrese(value + 1,setCardItem, setStock,id,refetch,mode='increase');
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-6">
        <div className="flex items-center justify-center w-8 h-8 bg-neutral-900 rounded-md">
          <button
            onClick={() => valueProvider(stock, 'decrease')}
            className="w-8 h-8 bg-gray-300 rounded-lg shadow-[10px_10px_8px_rgba(0,0,0,0.377),_inset_1.5px_1.5px_2px_#fff,_inset_-3.2px_-3.2px_8px_#c7c3c0] transition-all duration-100 hover:scale-95"
          >
            <svg
              viewBox="0 -960 960 960"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 fill-gray-600 transition-all duration-100"
            >
              <path d="M200-440v-80h560v80H200Z"></path>
            </svg>
          </button>
        </div>
        <p>{stock}</p>
        <div className="flex items-center justify-center w-8 h-8 bg-neutral-900 rounded-md">
          <button
            onClick={() => valueProvider(stock, 'increase')}
            className="w-8 h-8 bg-gray-300 rounded-lg shadow-[10px_10px_8px_rgba(0,0,0,0.377),_inset_1.5px_1.5px_2px_#fff,_inset_-3.2px_-3.2px_8px_#c7c3c0] transition-all duration-100 hover:scale-95"
          >
            <svg
              viewBox="0 -960 960 960"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 fill-gray-600 transition-all duration-100"
            >
              <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAndSubBtn;
