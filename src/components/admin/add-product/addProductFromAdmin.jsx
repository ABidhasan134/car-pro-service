'use client'
import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";

const AddProductFromAdmin = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const hendelAddProduct =async (data) => {
    console.log(data);
    const info={
      productId: data.productId,
      name: data.name,
      offer: data.offer,
      price: data.price,
      retailer_name: data.retailer_name,
      brand_name: data.brand_name,
      quantity: data.quantity,
      size: data.size,
      description: data.description,
      image: [data.image1, data.image2, data.image3, data.image4],
    }
    const response= await axios.post("/api/products",info)
    console.log(response.data);
  }
  return (
    <form
    onSubmit={handleSubmit(hendelAddProduct)}
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
          className="w-full p-4 mb-4 rounded-md border-2 border-gray-300 focus:outline-none bg-gray-100 "
          {...register("productId",{
            required: "product ID is required",
            min:{
                value: 1,
                message: "Product ID must be 2 characters long"
            },
            max:{
                value: 1000,
                message: "Product ID not more than 1000 characters long"
            }
          })}
        />
      </div>

      {/* Product Name Field */}
      <div className="grid w-full">
        <label htmlFor="productName">Product Name</label>
        <input
          type="text"
          id="productName"
          placeholder="Enter product name"
          className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
            errors.name ? "border-red-600" : "border-gray-300"
          }`}
          {...register("name",{
            required: "product name is required",
            min:{
                value: 2,
                message: "Product ID must be 2 characters long"
            },
            max:{
                value: 10,
                message: "Product ID not more than 10 characters long"
            }
          })}
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
          placeholder={"Enter your offer"}
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
          placeholder="Enter review product reating"
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
          className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
            errors.price ? "border-red-600" : "border-gray-300"
          }`}
          {...register("price",{
            required: "product price is required",
          })}
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
          step="1"
          className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
            errors.quantity ? "border-red-600" : "border-gray-300"
          }`}
          {...register("quantity",{
            required: "product quntity is required"
          })}
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
          className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
            errors.retailer_name ? "border-red-600" : "border-gray-300"
          }`}
          {...register("retailer_name",{
            required: "retailer name is required",
          })}
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
          className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
            errors.brand_name ? "border-red-600" : "border-gray-300"
          }`}
          {...register("brand_name",{
            required: "Brand name is required"
          })}
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
          placeholder="product size"
          className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
            errors.size ? "border-red-600" : "border-gray-300"
          }`}
          {...register("size",{
            required: "product size is requeir"
          })}
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
          placeholder="Enter product discription"
          className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
            errors.description ? "border-red-600" : "border-gray-300"
          }`}
          {...register("description",{
            required: "discription is requeir"
          })}
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
          placeholder="Image URL1"
          className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
            errors.image1 ? "border-red-600" : "border-gray-300"
          }`}
          {...register("image1",{
            required: "image1 url 1 required"
          })}
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
          placeholder= "Enter your 2nd image"
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
          placeholder= "Enter your 3rd image"
          className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
            errors.image3 ? "border-red-600" : "border-gray-300"
          }`}
          {...register("image3",{
            required: "image3 is required",
          })}
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
          placeholder="Enter your 4th image"
          className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
            errors.image4 ? "border-red-600" : "border-gray-300"
          }`}
          {...register("image4",{
            required: "image4 is required",
          })}
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
        Add Product
      </button>
    </div>
  </form>
  )
}

export default AddProductFromAdmin
