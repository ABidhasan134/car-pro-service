"use client";
import { getServiceDetails } from "@/app/(page)/services/[id]/page";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const UpdateService = ({ id }) => {
  const [service, setService] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchService = async () => {
      const result = await getServiceDetails(id);
      setService(result);

      // Reset form with fetched data
      reset({
        title: result?.title || "",
        category: result?.category || "",
        price: result?.price || "",
        image: result?.img || "",
        facility1: result?.facility?.[0]?.name || "",
        facility1Dis: result?.facility?.[0]?.details || "",
        facility2: result?.facility?.[1]?.name || "",
        facility2Dis: result?.facility?.[1]?.details || "",
        service_type: result?.service_type || "",
        description: result?.description || "",
      });
    };
    fetchService();
  }, [id, reset]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.put("/api/admin/service", {
        data,
        id: service._id,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error updating service:", error);
    }
  };

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
            className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
              errors.title ? "border-red-600" : "border-gray-300"
            }`}
            {...register("title")}
          />
          {errors.title && (
            <span className="text-red-500">{errors.title.message}</span>
          )}
        </div>

        <div className="grid w-full">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
              errors.category ? "border-red-600" : "border-gray-300"
            }`}
            {...register("category")}
          />
          {errors.category && (
            <span className="text-red-500">{errors.category.message}</span>
          )}
        </div>
      </div>

      {/* 2nd row */}
      <div className="flex justify-center w-full gap-6">
        <div className="grid w-full">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
              errors.price ? "border-red-600" : "border-gray-300"
            }`}
            {...register("price")}
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
            className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
              errors.image ? "border-red-600" : "border-gray-300"
            }`}
            {...register("image")}
          />
          {errors.image && (
            <span className="text-red-500">{errors.image.message}</span>
          )}
        </div>
      </div>

      {/* Facilities 1*/}
      <div className="flex justify-center w-full gap-6">
        <div className="grid w-full">
          <label htmlFor="facility1">Facility 1 Name</label>
          <input
            type="text"
            id="facility1"
            className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
              errors.facility1 ? "border-red-600" : "border-gray-300"
            }`}
            {...register("facility1")}
          />
          {errors.facility1 && (
            <span className="text-red-500">{errors.facility1.message}</span>
          )}
        </div>
        <div className="grid w-full">
          <label htmlFor="facility1Dis">Facility 1 Description</label>
          <input
            type="text"
            id="facility1Dis"
            className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
              errors.facility1Dis ? "border-red-600" : "border-gray-300"
            }`}
            {...register("facility1Dis")}
          />
          {errors.facility1Dis && (
            <span className="text-red-500">{errors.facility1Dis.message}</span>
          )}
        </div>
      </div>
      {/* Facilities 2*/}
      <div className="flex justify-center w-full gap-6">
        <div className="grid w-full">
          <label htmlFor="facility2">Facility 2 Name</label>
          <input
            type="text"
            id="facility2"
            className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
              errors.facility2 ? "border-red-600" : "border-gray-300"
            }`}
            {...register("facility2")}
          />
          {errors.facility2 && (
            <span className="text-red-500">{errors.facility2.message}</span>
          )}
        </div>
        <div className="grid w-full">
          <label htmlFor="facility2Dis">Facility 2 Description</label>
          <input
            type="text"
            id="facility2Dis"
            className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
              errors.facility2Dis ? "border-red-600" : "border-gray-300"
            }`}
            {...register("facility2Dis")}
          />
          {errors.facility2Dis && (
            <span className="text-red-500">{errors.facility2Dis.message}</span>
          )}
        </div>
      </div>
      {/* 5th row */}
      <div className="flex justify-center w-full gap-6">
        <div className="grid w-full">
          <label htmlFor="service_type">service type</label>
          <input
            type="text"
            id="service_type"
            className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
              errors.price ? "border-red-600" : "border-gray-300"
            }`}
            {...register("service_type")}
          />
          {errors.service_type && (
            <span className="text-red-500">{errors.service_type.message}</span>
          )}
        </div>

        <div className="grid w-full">
          <label
            htmlFor="description
"
          >
            Description{" "}
          </label>
          <input
            type="text"
            id="description
"
            className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
              errors.description ? "border-red-600" : "border-gray-300"
            }`}
            {...register("description")}
          />
          {errors.description && (
            <span className="text-red-500">{errors.description.message}</span>
          )}
        </div>
      </div>
      {/* Submit Button */}
      <div className="flex justify-center w-full">
        <button
          type="submit"
          className="w-2/3 hover:bg-black hover:text-white p-4 mt-5 font-bold text-gray-500 rounded-full shadow-lg cursor-pointer bg-inherit"
        >
          Update Service
        </button>
      </div>
    </form>
  );
};

export default UpdateService;
