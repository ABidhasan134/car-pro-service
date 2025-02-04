"use client";
import { getServiceDetails } from "@/app/(page)/services/[id]/page";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const UpdateService = ({ id }) => {
  const [service, setService] = useState(null);
  const [dateError, setDateError] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchService = async () => {
      const result = await getServiceDetails(id);
      setService(result);
    };
    fetchService();
  }, [id]);
  console.log(service);

  const onSubmit = (data) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid justify-center relative lg:-top-48 xl:top-0 w-full h-auto"
    >
        {/* 1st row  */}
      <div className="flex justify-center w-full gap-6">
        <div className="grid w-full">
          <label htmlFor="title">Service Title</label>
          <input
            type="text"
            id="title"
            className={`w-full p-4 mb-4 rounded-md shadow-inner border-gray-600 border-2 focus:outline-none bg-inherit text-black ${
              errors.title ? "border-red-600" : "border-gray-300"
            }`}
            placeholder="Enter service title"
            {...register("title", {
              required: "service title is required",
            })}
          />
          {errors.title && (
            <span className="text-red-500">{errors.title.message}</span>
          )}
        </div>

        <div className="grid w-full">
          <label htmlFor="category">category </label>
          <input
            type="text"
            id="category"
            className={`w-full p-4 mb-4 rounded-md border-gray-600 border-2 shadow-inner focus:outline-none bg-inherit text-black ${
              errors.category ? "border-red-600 " : "border-gray-300"
            }`}
            placeholder="category"
            {...register("category", {
              required: "Name is required",
              minLength: {
                value: 6,
                message: "Name must be at least 6 characters",
              },
            })}
          />
          {errors.category && (
            <span className="text-red-500">{errors.category.message}</span>
          )}
        </div>
      </div>
      {/* 2nd row */}
      <div className="flex justify-center w-full gap-6">
        <div className="grid w-full">
          <label htmlFor="price">price
          </label>
          <input
            type="Number"
            id="price"
            className={`w-full p-4 mb-4 rounded-md shadow-inner border-gray-600 border-2 focus:outline-none bg-inherit text-black ${
              errors.price ? "border-red-600" : "border-gray-300"
            }`}
            placeholder={service?.price}
            defaultValue={service?.price}
            {...register("price", {
              required: "service price is required",
            })}
          />
          {errors.price && (
            <span className="text-red-500">{errors.price.message}</span>
          )}
        </div>

        <div className="grid w-full">
          <label htmlFor="img">Image Link</label>
          <input
            type="url"
            id="img"
            className={`w-full p-4 mb-4 rounded-md border-gray-600 border-2 shadow-inner focus:outline-none bg-inherit text-black ${
              errors.img ? "border-red-600 " : "border-gray-300"
            }`}
            placeholder="url"
            {...register("image", {
              required: "Name is required",
              minLength: {
                value: 6,
                message: "Name must be at least 6 characters",
              },
            })}
          />
          {errors.img && (
            <span className="text-red-500">{errors.img.message}</span>
          )}
        </div>
      </div>
      {/* submit btn */}
      <div className="flex justify-center w-full">
        <button
          type="submit"
          className="w-2/3 hover:bg-black hover:text-white p-4 mt-5 font-bold text-gray-500 rounded-full shadow-lg cursor-pointer bg-inherit"
        >
          service pleace
        </button>
      </div>
    </form>
  );
};

export default UpdateService;
