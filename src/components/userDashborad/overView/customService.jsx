'use client'
import CustomDateTimePicker from "@/components/shared/timeAndDate";
import useAllUser from "@/Hooks/useAllUser";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import uuid4 from 'uuid4';

const CoustomService = () => {
  const [dateError,setDateError]=useState();
  const sesseion=useSession();
  const [AllUser, refetch, isLoading] = useAllUser();
  // console.log(sesseion?.data?.user)
  const methods = useForm();
  const { register, handleSubmit, formState: { errors } } = methods;
   const onSubmit = async (data) => {
      if(!data.dateTime){
        setDateError("There is no date")
        console.log('there is no date')
      }
      console.log(data)
      const customInfo={
        customID: uuid4().slice(0,4),
        userEmail: sesseion?.data?.user?.email,
        bookingemail: data.email,
        bookingName: data.name,
        bookingPhone:data.phone,
        vehicalName: data.vehical,
        problem: data.problem,
        dateTime: data.dateTime,
        bookingStatus: 'pending'

      }
      const respons=await axios.post('/api/user/customServic',{customInfo,email:sesseion?.data?.user?.email})
      if(respons.data.customserviceinfo.modifiedCount>0){
        Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your have add one custom service ",
                showConfirmButton: false,
                timer: 1500,
              });
              refetch();
            } else {
              Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Your can't add this service",
                showConfirmButton: false,
                timer: 1500,
              });
      }
       console.log(respons.data.customserviceinfo)
      //  console.log(errors)
     };
  return (
    <FormProvider {...methods}>
    <div className="grid ">
      {/* heading of custom service */}
      <div className="flex justify-center">
        <h1 className="xl:text-5xl text-3xl font-semibold">custom your service</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid justify-center relative lg:-top-48 xl:top-0 w-full h-[350px]">
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
        {/* 3rd  */}
        <div className="flex justify-center w-full gap-6">
          <div className="grid w-full">
            <label htmlFor="vehical">vehical Name</label>
            <input
              type="vehical"
              id="vehical"
              className={`w-full p-4 mb-4 rounded-md shadow-inner border-gray-600 border-2 focus:outline-none bg-inherit text-black ${
                errors.vehical ? "border-red-600" : "border-gray-300"
              }`}
              placeholder=" vehical name"
              {...register("vehical", {
                required: "vehical name is required",
                minLength: {
                  value: 6,
                  message: "Name must be at least 6 characters",
                },
                maxLength:{
                  value: 20,
                  message: "Name must be at most 20 characters"
                }
              })}
            />
            {errors.vehical && <span className="text-red-500">{errors.vehical.message}</span>}
          </div>

          <div className="grid w-full">
            <label htmlFor="problem">Discrive Problem</label>
            <input
            type="text"
            id="problem"
            className={`w-full p-4 mb-4 rounded-md border-gray-600 border-2 shadow-inner focus:outline-none bg-inherit text-black ${
              errors.problem ? "border-red-600 " : "border-gray-300"
            }`}
            placeholder="problem discription"
            {...register("problem", {
              required: "problem is required",
              pattern: {
                value: /^[A-Za-z\s\-]+$/i,
                message: "Invalid problem format",
              },
              minLength: {
                value: 6,
                message: "problem must be at least 6 characters",
              },
              maxLength: {
                value: 250,
                message: "problem must inside 250 characters",
              },
            })}
          />
          {errors.problem && <span className="text-red-500">{errors.problem.message}</span>}
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
