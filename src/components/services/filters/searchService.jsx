import React from "react";
import "./searchService.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const SearchService = ({setCurrentPage,setSearcherService,setSearcherServicePages}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const title=data.searchValue
    const response= await axios.get(`/api/service/filter/${title}`);
    console.log(response.data);
    setSearcherService(response.data.result)
    setSearcherServicePages(response.data.totalPages)
    setCurrentPage(1);
    console.log(data);
  }

  return (
    <div className="grid mx-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="searchBox grid">
          <label htmlFor="searchValue" className="sr-only">
            Search
          </label>
          <input
            {...register("searchValue", {
              required: "Search value is required.",
              minLength: { value: 3, message: "Minimum length is 3 characters." },
            })}
            className={`searchInput ${
              errors.searchValue ? "border-2 border-red-500" : ""
            }`}
            type="text"
            id="searchValue"
            placeholder="Search by title"
          />
          <button type="submit" className="searchButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
            >
              <g clipPath="url(#clip0_2_17)">
                <g filter="url(#filter0_d_2_17)">
                  <path
                    d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    shapeRendering="crispEdges"
                  ></path>
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_d_2_17"
                  x="-0.418549"
                  y="3.70435"
                  width="29.7139"
                  height="29.7139"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset dy="4"></feOffset>
                  <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2_17"
                  ></feBlend>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2_17"
                    result="shape"
                  ></feBlend>
                </filter>
                <clipPath id="clip0_2_17">
                  <rect
                    width="28.0702"
                    height="28.0702"
                    fill="white"
                    transform="translate(0.403503 0.526367)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </form>
      {errors.searchValue && (
        <span className="text-red-500">{errors.searchValue.message}</span>
      )}
    </div>
  );
};

export default SearchService;
