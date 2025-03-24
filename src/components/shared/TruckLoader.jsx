import React from "react";

const TruckLoader = () => {
  return (
    <div className="relative ml-72 mt-48 overflow-hidden flex items-center justify-center w-24 h-24">
      <svg
        viewBox="0 0 254.532 254.532"
        xmlns="http://www.w3.org/2000/svg"
        className="w-24 h-24 animate-spin"
      >
        <g>
          <path
            d="M127.267,0C57.092,0,0,57.091,0,127.266s57.092,127.266,127.267,127.266c70.174,0,127.266-57.091,127.266-127.266 S197.44,0,127.267,0z M127.267,217.656c-49.922,0-90.391-40.468-90.391-90.39s40.469-90.39,90.391-90.39 c49.92,0,90.39,40.468,90.39,90.39S177.186,217.656,127.267,217.656z"
            className="fill-gray-600"
          ></path>
          <path
            d="M127.267,48.578c-43.39,0-78.689,35.299-78.689,78.688c0,43.389,35.3,78.688,78.689,78.688 c43.389,0,78.688-35.299,78.688-78.688C205.955,83.877,170.655,48.578,127.267,48.578z M195.878,122.249h-38.18 c-0.78-4.825-2.686-9.275-5.435-13.079l26.954-26.954C188.679,93.112,194.771,106.996,195.878,122.249z"
            className="fill-gray-500"
          ></path>
        </g>
      </svg>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-700 animate-[roadMove_2s_linear_infinite]"></div>
    </div>
  );
};

export default TruckLoader;
