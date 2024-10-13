'use client'
import Image from 'next/image';
import React from 'react'
import { useForm } from "react-hook-form";
import logImg from '@/../../public/assets/logo.svg';
const axios = require('axios');

const SignUpFrom = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data =>{
     console.log(data)
     axios.post(`http://localhost:3000/signUp/api`,data)
     .then((response)=>{
      console.log(response);
     })
    };

  return (
    <div className="w-full">
      <div className="grid items-center justify-center h-full py-16 bg-gray-100">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center w-full">
          <div className="text-4xl font-semibold text-black mb-8 text-center flex items-center">
            Welcome to <Image src={logImg} className='pl-2 ml-2'></Image>
          </div>

          {/* Name Field */}
          <div className='flex justify-start w-full'>
            <label htmlFor="name">Name</label>
          </div>
          <input 
            type="text" 
            id="name" 
            className={`w-full p-4 mb-4 rounded-full ${errors.name ? 'border-red-500' : 'border-gray-300'} shadow-inner focus:outline-none bg-inherit text-red-600`} 
            placeholder="Full name"
            aria-invalid={errors.name ? "true" : "false"}
            {...register("name", {
              pattern: { value: /^[A-Za-z\s\-]+$/i, message: "Invalid name" }, 
              minLength: { value: 6, message: "Name must be at least 6 characters" }
            })}
          />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}

          {/* Email Field */}
          <div className='flex justify-start w-full'>
            <label htmlFor="email">Email</label>
          </div>
          <input 
            type="email" 
            id="email" 
            className={`w-full p-4 mb-4 rounded-full ${errors.email ? 'border-red-500' : 'border-gray-300'} shadow-inner focus:outline-none bg-inherit text-red-600`} 
            placeholder="Email address"
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email address"
              }
            })}
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}

          {/* Password Field */}
          <div className='flex justify-start w-full'>
            <label htmlFor="password">Password</label>
          </div>
          <input 
            type="password" 
            id="password" 
            className={`w-full p-4 mb-4 rounded-full ${errors.password ? 'border-red-500' : 'border-gray-300'} shadow-inner focus:outline-none bg-inherit text-red-600`} 
            placeholder="Password"
            aria-invalid={errors.password ? "true" : "false"}
            {...register("password", { required: "Password is required",
                pattern:{
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).+$/,
                  message: "Your password should have 1 Uper case, 1 Lowear case and 1 symbol"  },
                 minLength: { value: 6, message: "Password must be at least 6 characters" }, 
                 maxLength:{value:8, message: "password must be less than 8 characters"}
                })}
          />
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}

          <button className="w-full hover:bg-black hover:text-white p-4 mt-5 font-bold text-gray-500 rounded-full shadow-lg cursor-pointer bg-inherit">
            Sign Up
          </button>
        </form>     
      </div>
    </div>
  );
};

export default SignUpFrom;
