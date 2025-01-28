
import { signIn} from 'next-auth/react';
import { useSession } from "next-auth/react";
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const SocialLog = () => {
  const session=useSession();
   const searchParams=useSearchParams()
   const path = searchParams.get("redirect")
    // console.log(session)
    console.log(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID)
    console.log(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET)
  const handleSocialLogin = async (provider) => {
    const res = await signIn(provider,{
      redirect: true,
      callbackUrl: path?path:'/'
    });
    if (res?.error) {
      console.log("Social login failed", res.error);
    }
  };

  return (
    <div className='w-full flex justify-center'>
      <button onClick={() => handleSocialLogin('google')} className="w-[50%] hover:bg-black hover:text-green-500 mt-4 p-4 md:text-green-500 lg:text-black text-center font-bold rounded-full shadow-lg cursor-pointer bg-inherit flex justify-center">
      <FaGoogle className='text-3xl' />
      </button>
      <button onClick={() => handleSocialLogin('facebook')} className="w-[50%] hover:bg-black hover:text-blue-500 mt-4 p-4 md:text-blue-500 lg:text-black text-center font-bold rounded-full shadow-lg cursor-pointer bg-inherit flex justify-center">
      <FaFacebook className='text-3xl'></FaFacebook>
      </button>
    </div>
  );
};

export default SocialLog;
