
import { signIn} from 'next-auth/react';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router';
import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const SocialLog = () => {
  const session=useSession();
   
    // console.log(session)

  const handleSocialLogin = async (provider) => {
    
    const res = await signIn(provider);
    if (res?.error) {
      console.log("Social login failed", res.error);
    }
  };

  return (
    <div className='w-full'>
      <button onClick={() => handleSocialLogin('google')} className="w-[50%] hover:bg-black hover:text-white mt-4 p-4 text-black text-center font-bold rounded-full shadow-lg cursor-pointer bg-inherit">
        <GiHamburgerMenu></GiHamburgerMenu>Login with Google
      </button>
      <button onClick={() => handleSocialLogin('facebook')} className="w-[50%] hover:bg-black hover:text-white mt-4 p-4 text-black text-center font-bold rounded-full shadow-lg cursor-pointer bg-inherit">
        Login with Facebook
      </button>
    </div>
  );
};

export default SocialLog;
