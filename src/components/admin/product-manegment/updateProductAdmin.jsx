"use client";
import useOneProduct from "@/Hooks/useOneProduct";
import React from "react";
import { useForm } from "react-hook-form";

const UpdateProductAdmin = ({ id }) => {
  const [oneProduct, isLoading, refetch] = useOneProduct(id);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Assign default values if fields are empty
    const updatedData = {
      productId: data.productId || oneProduct._id || oneProduct.id,
      name: data.name || oneProduct.name,
      image: data.image || oneProduct.image,
      review: data.review || oneProduct.review,
      price: data.price || oneProduct.price,
      retailer_name: data.retailer_name || oneProduct.retailer_name,
      brand_name: data.brand_name || oneProduct.brand_name,
      quantity: data.quantity || oneProduct.quantity,
      size: data.size || oneProduct.size,
      description: data.description || oneProduct.description,
    };
    console.log("Updated Product Data:", updatedData);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid justify-center relative lg:-top-48 xl:top-0 w-full h-auto"
    >
      {/* 1st Row: Product ID & Name */}
      <div className="flex justify-center w-full gap-6">
        {/* Product ID Field (Read-Only) */}
        <div className="grid w-full">
          <label htmlFor="productId">Product ID</label>
          <input
            type="text"
            id="productId"
            defaultValue={oneProduct._id || oneProduct.id}
            className="w-full p-4 mb-4 rounded-md border-2 border-gray-300 focus:outline-none bg-gray-100 "
            {...register("productId")}
          />
        </div>

        {/* Product Name Field */}
        <div className="grid w-full">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            id="productName"
            placeholder="Enter product name"
            defaultValue={oneProduct.name}
            className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
              errors.name ? "border-red-600" : "border-gray-300"
            }`}
            {...register("name")}
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>
      </div>

      {/* 2nd Row: Image & Review */}
      <div className="flex justify-center w-full gap-6">
        {/* Image Field */}
        <div className="grid w-full">
          <label htmlFor="image">Image URL</label>
          <input
            type="url"
            id="image"
            placeholder="Enter image URL"
            defaultValue={oneProduct.image}
            className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
              errors.image ? "border-red-600" : "border-gray-300"
            }`}
            {...register("image")}
          />
          {errors.image && (
            <span className="text-red-500">{errors.image.message}</span>
          )}
        </div>

        {/* Review Field */}
        <div className="grid w-full">
  <label htmlFor="review">Review Score</label>
  <input
    type="number"
    id="review"
    placeholder="Enter review score"
    defaultValue={oneProduct.review}
    step="0.1"
    className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
      errors.review ? "border-red-600" : "border-gray-300"
    }`}
    {...register("review", {
      max: {
        value: 5,
        message: "Your rating should be less than or equal to 5",
      },
      min: {
        value: 0,
        message: "Your rating should be at least 0",
      },
    })}
  />
  {errors.review && (
    <span className="text-red-500">{errors.review.message}</span>
  )}
</div>

      </div>

      {/* 3rd Row: Price & Quantity */}
      <div className="flex justify-center w-full gap-6">
        {/* Price Field */}
        <div className="grid w-full">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            placeholder="Enter price"
            defaultValue={oneProduct.price}
            className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
              errors.price ? "border-red-600" : "border-gray-300"
            }`}
            {...register("price")}
          />
          {errors.price && (
            <span className="text-red-500">{errors.price.message}</span>
          )}
        </div>

        {/* Quantity Field */}
        <div className="grid w-full">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            placeholder="Enter quantity"
            defaultValue={oneProduct.quantity}
            step="1"
            className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
              errors.quantity ? "border-red-600" : "border-gray-300"
            }`}
            {...register("quantity")}
          />
          {errors.quantity && (
            <span className="text-red-500">{errors.quantity.message}</span>
          )}
        </div>
      </div>

      {/* 4th Row: Retailer & Brand */}
      <div className="flex justify-center w-full gap-6">
        {/* Retailer Name Field */}
        <div className="grid w-full">
          <label htmlFor="retailer_name">Retailer Name</label>
          <input
            type="text"
            id="retailer_name"
            placeholder="Enter retailer name"
            defaultValue={oneProduct.retailer_name}
            className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
              errors.retailer_name ? "border-red-600" : "border-gray-300"
            }`}
            {...register("retailer_name")}
          />
          {errors.retailer_name && (
            <span className="text-red-500">{errors.retailer_name.message}</span>
          )}
        </div>

        {/* Brand Name Field */}
        <div className="grid w-full">
          <label htmlFor="brand_name">Brand Name</label>
          <input
            type="text"
            id="brand_name"
            placeholder="Enter brand name"
            defaultValue={oneProduct.brand_name}
            className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
              errors.brand_name ? "border-red-600" : "border-gray-300"
            }`}
            {...register("brand_name")}
          />
          {errors.brand_name && (
            <span className="text-red-500">{errors.brand_name.message}</span>
          )}
        </div>
      </div>
      {/* 5th Row: discription & size */}
      <div className="flex justify-center w-full gap-6">
        {/* size Field */}
        <div className="grid w-full">
          <label htmlFor="size">product size</label>
          <input
            type="text"
            id="size"
            placeholder={oneProduct.size}
            defaultValue={oneProduct.size}
            className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
              errors.size ? "border-red-600" : "border-gray-300"
            }`}
            {...register("size")}
          />
          {errors.size && (
            <span className="text-red-500">{errors.size.message}</span>
          )}
        </div>
        
        {/* description Field */}
        <div className="grid w-full">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            placeholder={oneProduct.description}
            defaultValue={oneProduct.description}
            step="0.1"
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
          Update Product
        </button>
      </div>
    </form>
  );
};

export default UpdateProductAdmin;
