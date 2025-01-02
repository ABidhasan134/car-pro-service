'use client'
import CustomDateTimePicker from "@/components/shared/timeAndDate";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const CoustomService = () => {
  const [dateError,setDateError]=useState();
  const methods = useForm();
  const { register, handleSubmit, formState: { errors } } = methods;
   const onSubmit = async (data) => {
      if(!data.dateTime){
        setDateError("There is no date")
        console.log('there is no date')
      }
       console.log(data)
       console.log(errors)
     };
  return (
    <FormProvider {...methods}>
    <div className="grid w-full">
      {/* heading of custom service */}
      <div className="flex justify-center border-red-500 border-2 w-full h-[60px]">
        <h1 className="text-5xl font-semibold">custom your service</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid items-center w-full">
        {/* 1st row  */}
        <div className="flex justify-center w-full gap-6">
          <div className="grid w-full">
            <label htmlFor="email">your Email</label>
            <input
              type="email"
              id="email"
              className={`w-full p-4 mb-4 rounded-md shadow-inner border-gray-600 border-2 focus:outline-none bg-inherit text-black ${
                errors.email ? "border-red-600" : "border-gray-300"
              }`}
              placeholder="Phone, email address or username"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email address"
                }
              })}
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>

          <div className="grid w-full">
            <label htmlFor="name">your Name</label>
            <input
            type="text"
            id="name"
            className={`w-full p-4 mb-4 rounded-md border-gray-600 border-2 shadow-inner focus:outline-none bg-inherit text-black ${
              errors.name ? "border-red-600 " : "border-gray-300"
            }`}
            placeholder="Full name"
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^[A-Za-z\s\-]+$/i,
                message: "Invalid name format",
              },
              minLength: {
                value: 6,
                message: "Name must be at least 6 characters",
              },
            })}
          />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}
          </div>
        </div>
        {/* 2nd row  */}
        <div className="flex justify-center w-full gap-6">
          <div className="grid w-full">
            <label htmlFor="phone">your phone</label>
            <input
              type="phone"
              id="phone"
              className={`w-full p-4 mb-4 rounded-md shadow-inner border-gray-600 border-2 focus:outline-none bg-inherit text-black ${
                errors.phone ? "border-red-600" : "border-gray-300"
              }`}
              placeholder="Phone, phone address or username"
              {...register("phone", {
                required: "Email is required",
                pattern: {
                  value: /^(?:\+?88)?01[3-9]\d{8}$/,
                  message: "Invalid phone address"
                }
              })}
            />
            {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
          </div>

          <div className="grid w-full relative -top-2">
          <label htmlFor="Pick Time and Date">pick time and date</label>
          <CustomDateTimePicker ></CustomDateTimePicker>
          <p>
          {
            dateError?<span className="text-red-500">Date and time is requered</span>:""
          }
          </p>
          </div>
        </div>
        {/* submit btn */}
        <div className="flex justify-center w-full">
        <button type="submit" className="w-2/3 hover:bg-black hover:text-white p-4 mt-5 font-bold text-gray-500 rounded-full shadow-lg cursor-pointer bg-inherit">
              service pleace
            </button>
        </div>
        
         
      </form>
    </div>
    </FormProvider>
  );
};

export default CoustomService;
