import React from "react";

const CustomBtn = ({title,color}) => {
  return (
    <div>
      <button class={`relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-[#${color}] rounded-md group`}>
        <span class={`absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#842c1a] rounded group-hover:-mr-4 group-hover:-mt-4`}>
          <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
        </span>
        <span class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#842c1a] rounded group-hover:-ml-4 group-hover:-mb-4">
          <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
        </span>
        <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-[#ba3b22] rounded-md group-hover:translate-x-0"></span>
        <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
        {title}
        </span>
      </button>
    </div>
  );
};

export default CustomBtn;
