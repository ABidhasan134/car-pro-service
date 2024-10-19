'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from "react-hook-form";
import { signIn} from "next-auth/react";
import SocialLog from './socialLog';
import { useRouter, useSearchParams } from 'next/navigation';

const LogInForm = () => {
  const router = useRouter();
  const searchParams= useSearchParams();
  const path=searchParams.get('redirect')
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Async function to handle form submission
  const onSubmit = async (data) => {
    const resp = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: true, // Do not redirect automatically
      callbackUrl: path ? path:'/'
    });
    console.log(resp?.status===200);
    console.log(path)
    if (resp?.status===200) {
      console.log("Login successful");
      router.push(`${path} ? ${path}:'/'`); // Redirect to the home page
    } else {
      console.log("Login failed:", resp?.error);
    }
  };
  

  return (
    <>
      <div className="w-full">
        <div className="grid items-center justify-center h-full py-16 bg-gray-100">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center w-full">
            <div className="text-4xl font-semibold text-black mb-8 text-center">
              Welcome back <br />Car Doctor
            </div>

            {/* Email Field */}
            <div className="flex justify-start w-full">
              <label htmlFor="email">Email</label>
            </div>
            <input
              type="email"
              id="email"
              className={`w-full p-4 mb-4 rounded-full shadow-inner focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'} bg-inherit text-red-600`}
              placeholder="Phone, email address or username"
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
            <div className="flex justify-start w-full">
              <label htmlFor="password">Password</label>
            </div>
            <input
              type="password"
              id="password"
              className={`w-full p-4 mb-4 rounded-full shadow-inner focus:outline-none ${errors.password ? 'border-red-500' : 'border-gray-300'} bg-inherit text-red-600`}
              placeholder="Password"
              aria-invalid={errors.password ? "true" : "false"}
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}

            {/* Submit Button */}
            <button type="submit" className="w-full hover:bg-black hover:text-white p-4 mt-5 font-bold text-gray-500 rounded-full shadow-lg cursor-pointer bg-inherit">
              Log In
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 w-4/5 my-4">
            Forgotten your login details? <a href="#" className="font-bold">Get help with signing in.</a>
          </p>

          {/* Login with Facebook Button */}
          <SocialLog />

          {/* Sign Up Link */}
          <p className="text-gray-500 mt-4 text-sm">
            Don't have an account? <Link href="/signUp" className="font-bold">Sign Up</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LogInForm;
