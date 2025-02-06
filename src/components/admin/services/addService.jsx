"use client";
import axios from "axios";
import { useRouter } from 'next/navigation';
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddService = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await axios.post('/api/admin/service',data)
    console.log(response.data.result);
    if(response?.data?.result?.insertedId){
      Swal.fire({
        title: "New service Add!",
        icon: "success",
        draggable: true
      });
      setTimeout(()=>{
        router.push('/admin/services')
      },2000)
    }
  }

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
            placeholder="Enter service title"
            className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
              errors.title ? "border-red-600" : "border-gray-300"
            }`}
            {...register("title", {
              required: "title is required",
              minLength: {
                value: 3,
                message: "service title must be at least 3 characters",
              },
            })}
          />
          {errors.title && (
            <span className="text-red-500">{errors.title.message}</span>
          )}
        </div>

        <div className="grid w-full">
          <label>Gender Selection</label>
          <select
            className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
              errors.title ? "border-red-600" : "border-gray-300"
            }`}
            {...register("category", {
              required: "service category is required",
            })}
          >
            select category
            <option value="General Maintenance">General Maintenance</option>
            <option value="Engine Services">Engine Services</option>
            <option value="Air Conditioning and Heating">
              Air Conditioning and Heating
            </option>
            <option value="Exhaust and Emissions">Exhaust and Emissions</option>
            <option value="Suspension and Steering">
              Suspension and Steering
            </option>
            <option value="Detailing and Cleaning">
              Detailing and Cleaning
            </option>
          </select>
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
            type="text"
            id="price"
            placeholder="price"
            className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
              errors.price ? "border-red-600" : "border-gray-300"
            }`}
            required
            {...register("price", {
              required: "price is required",
              pattern: {
                value: /^[0-9]+$/,
                message: "only number is allow",
              },
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
            placeholder="image url"
            className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
              errors.image ? "border-red-600" : "border-gray-300"
            }`}
            {...register("image", {
              required: "give url for service",
            })}
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
            placeholder="1st facility"
            className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
              errors.facility1 ? "border-red-600" : "border-gray-300"
            }`}
            {...register("facility1", {
              required: "facility1 name is required",
            })}
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
            placeholder="1st facility description"
            className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
              errors.facility1Dis ? "border-red-600" : "border-gray-300"
            }`}
            {...register("facility1Dis", {
              required: "facility1 discription is requerd",
            })}
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
                        placeholder="2nd facility"
            className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
              errors.facility2 ? "border-red-600" : "border-gray-300"
            }`}
            {...register("facility2",{
              required: "2nd facility required",
            })}
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
            placeholder="2nd facility description"
            className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
              errors.facility2Dis ? "border-red-600" : "border-gray-300"
            }`}
            {...register("facility2Dis",{
              required: "2nd facility description required"
            })}
          />
          {errors.facility2Dis && (
            <span className="text-red-500">{errors.facility2Dis.message}</span>
          )}
        </div>
      </div>
      {/* 5th row */}
      <div className="flex justify-center w-full gap-6">
        <div className="grid w-full">
        <label>service Selection</label>
          <select
            className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
              errors.title ? "border-red-600" : "border-gray-300"
            }`}
            {...register("service_type", {
              required: "service type is required",
            })}
          >
            Service type
            <option value="service+">Service+</option>
            <option value="service++">Service++</option>
            <option value="vip">
              VIP
            </option>
            <option value="member">Member</option>

          </select>
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
            id="description"
            placeholder="description"
            className={`w-full p-4 mb-4 rounded-md border-2 focus:outline-none ${
              errors.description ? "border-red-600" : "border-gray-300"
            }`}
            {...register("description",{
              required: "description is required",
              minLength: {
                value: 10,
                message: "description at least 10 charecter"
              },
              maxLength: {
                value: 40,
                message: "desciption should be less 40 charecter"
              }
            })}
          />
          {errors.description && (
            <span className="text-red-500">{errors.description.message}</span>
          )}
        </div>
      </div>
      {/* submit btn */}
      <div className="flex justify-center w-full">
        <button
          type="submit"
          className="w-2/3 hover:bg-black hover:text-white p-4 mt-5 font-bold text-gray-500 rounded-full shadow-lg cursor-pointer bg-inherit"
        >
          Add service
        </button>
      </div>
    </form>
  );
};

export default AddService;
