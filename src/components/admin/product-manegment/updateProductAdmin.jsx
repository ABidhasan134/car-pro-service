"use client";
import TruckLoader from "@/components/shared/TruckLoader";
import useOneProduct from "@/Hooks/useOneProduct";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const UpdateProductAdmin = ({ id }) => {
  const [oneProduct, isLoading, refetch] = useOneProduct(id);
  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  if(isLoading){
    return <TruckLoader></TruckLoader>
  }
  const onSubmit = async (data) => {
    // Assign default values if fields are empty
    const updatedData = {
      productId: data.productId || oneProduct._id || oneProduct.id,
      name: data.name || oneProduct.name,
      review: data.review || oneProduct.review,
      price: data.price || oneProduct.price,
      retailer_name: data.retailer_name || oneProduct.retailer_name,
      brand_name: data.brand_name || oneProduct.brand_name,
      quantity: data.quantity || oneProduct.quantity,
      size: data.size || oneProduct.size,
      description: data.description || oneProduct.description,
      image: [data.image1, data.image2, data.image3, data.image4] ||[oneProduct.image],
    };
    const response = await axios.put(
      `/api/admin/productManage/${oneProduct._id}`,
      updatedData
    );
    const result = response.data.result;
    console.log("Updated Product Data:", result);
    if(result.modifiedCount>0){
      refetch();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(()=>{
        router.push('/admin/product-managment')
      },2000)
    }
    else{
      console.log('your product could not be updated')
    }
  };
  console.log(oneProduct.image)
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid justify-center relative lg:top-0 xl:top-0 w-full h-auto"
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
          <label htmlFor="offer">Offer</label>
          <input
            type="text"
            id="offer"
            placeholder={oneProduct.offer || "Enter your offer"}
            defaultValue={oneProduct.offer}
            className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
              errors.offer ? "border-red-600" : "border-gray-300"
            }`}
            {...register("offer")}
          />
          {errors.offer && (
            <span className="text-red-500">{errors.offer.message}</span>
          )}
        </div>

        {/* Review Field */}
        <div className="grid w-full">
          <label htmlFor="review">Reating</label>
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
      {/* 6th Row: Image1 & Image2 */}
      <div className="flex justify-center w-full gap-6">
        {/* Image1 Field */}
        <div className="grid w-full">
          <label htmlFor="image1">Image URL1</label>
          <input
            type="url"
            id="image1"
            placeholder={ oneProduct?.image[0] || oneProduct.image||"Enter your 1st image"}
            defaultValue={oneProduct?.image[0] || ''}
            className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
              errors.image1 ? "border-red-600" : "border-gray-300"
            }`}
            {...register("image1")}
          />
          {errors.image1 && (
            <span className="text-red-500">{errors.image1.message}</span>
          )}
        </div>

        {/* Image1 Field */}
        <div className="grid w-full">
          <label htmlFor="image2">Image URL2</label>
          <input
            type="url"
            id="image2"
            placeholder={ oneProduct.image[1] || oneProduct.image || "Enter your 2nd image"}
            defaultValue={oneProduct.image[1] || oneProduct.image}
            className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
              errors.image2 ? "border-red-600" : "border-gray-300"
            }`}
            {...register("image2")}
          />
          {errors.image2 && (
            <span className="text-red-500">{errors.image2.message}</span>
          )}
        </div>
      </div>
       {/* 7th Row: Image3 & Image4 */}
       <div className="flex justify-center w-full gap-6">
        {/* Image1 Field */}
        <div className="grid w-full">
          <label htmlFor="image3">Image URL3</label>
          <input
            type="url"
            id="image3"
            placeholder={ oneProduct.image[2] || oneProduct.image || "Enter your 3rd image"}
            defaultValue={oneProduct.image[2] || oneProduct.image}
            className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
              errors.image3 ? "border-red-600" : "border-gray-300"
            }`}
            {...register("image3")}
          />
          {errors.image3 && (
            <span className="text-red-500">{errors.image3.message}</span>
          )}
        </div>

        {/* Image1 Field */}
        <div className="grid w-full">
          <label htmlFor="image4">Image URL4</label>
          <input
            type="url"
            id="image4"
            placeholder={ oneProduct.image[3] || oneProduct.image || "Enter your 4th image"}
            defaultValue={oneProduct.image[3]}
            className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
              errors.image4 ? "border-red-600" : "border-gray-300"
            }`}
            {...register("image4")}
          />
          {errors.image4 && (
            <span className="text-red-500">{errors.image4.message}</span>
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
