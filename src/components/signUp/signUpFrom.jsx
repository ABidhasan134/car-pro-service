"use client";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import logImg from "@/../../public/assets/logo.png";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import Swal from 'sweetalert2'

const SignUpFrom = () => {
  const roles = ["user", "admin", "retailer"];
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios.post(`http://localhost:3000/signUp/api`, data).then((response) => {
      console.log(response);
      if (response?.status===200) {
        if(response?.data.message==='success'){
          console.log("Login successful");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Now you are logged in",
            showConfirmButton: false,
            timer: 1500
          });
          router.push('/');
        }
        else{
          console.log("user already exists",response.data.message)
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "you already have an account please login",
            showConfirmButton: false,
            timer: 1500
          });
          router.push('/logIn');
        }
      } 
      else {
        console.log("Login failed:", resp?.error);
      }
    });
  };

  return (
    <div className="w-full">
      <div className="gap-0 grid items-center justify-center md:relative absolute left-[110px] md:left-0 sm:py-16 py-1  bg-transparent sm:h-auto h-[700px] text-red-500">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center w-full max-w-md"
        >
          {/* Logo and Title */}
          <div className="text-4xl font-semibold text-black mb-8 text-center md:flex grid items-center">
            Welcome to{" "}
            <Image
              src={logImg}
              alt="Logo"
              className="lg:w-[180px] sm:w-[1200px] lg:h-[150px] sm:h-[110px] w-[150px] h-[120px] pl-2 ml-2"
            />
          </div>

          {/* Name Field */}
          <label htmlFor="name" className="flex justify-start w-full">
            Name
          </label>
          <input
            type="text"
            id="name"
            className={`w-full p-4 mb-4 rounded-full shadow-inner focus:outline-none bg-inherit text-red-600 ${
              errors.name ? "border-red-500" : "border-gray-300"
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
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}

          {/* Email Field */}
          <label htmlFor="email" className="flex justify-start w-full">
            Email
          </label>
          <input
            type="email"
            id="email"
            className={`w-full p-4 mb-4 rounded-full shadow-inner focus:outline-none bg-inherit text-red-600 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Email address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}

          {/* Password Field */}
          <label htmlFor="password" className="flex justify-start w-full">
            Password
          </label>
          <input
            type="password"
            id="password"
            className={`w-full p-4 mb-4 rounded-full shadow-inner focus:outline-none bg-inherit text-red-600 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).+$/,
                message:
                  "Password must contain 1 uppercase, 1 lowercase, and 1 symbol",
              },
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
              maxLength: {
                value: 8,
                message: "Password must be less than 8 characters",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}

          {/* Role Field */}
          <label htmlFor="role" className="flex justify-start w-full">
            Role
          </label>
          <select
            id="role"
            className={`w-full p-4 mb-4 rounded-full shadow-inner focus:outline-none bg-inherit text-red-600 ${
              errors.role ? "border-red-500" : "border-gray-300"
            }`}
            {...register("role", { required: "Role is required" })}
          >
            <option value="">Select Role</option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </option>
            ))}
          </select>
          {errors.role && (
            <span className="text-red-500">{errors.role.message}</span>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-4 mt-5 font-bold text-gray-500 rounded-full shadow-lg cursor-pointer hover:bg-black hover:text-white bg-inherit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpFrom;
