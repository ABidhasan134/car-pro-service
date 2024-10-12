import React from 'react'

const LogInForm = () => {
  return (
    <>
      <div className="w-full">
        <div className="grid items-center justify-center h-full py-16 bg-gray-100">
          <form action="" className="flex flex-col items-center justify-center w-full">
            <div className="text-4xl font-semibold text-black mb-8 text-center">Log In <br />Car Doctor</div>
            <div className='flex justify-start  w-full'>
                {/* border-2 border-red-500 */}
            <label htmlFor="email" className=''>Enter your Email</label>
            </div>
            <input 
              type="email" 
              name="email" 
              id="email" 
              required 
              className="w-full p-4 mb-4 rounded-full shadow-inner focus:outline-none bg-inherit text-red-600" 
              placeholder="Phone, email address or username" 
            />
            <div className='flex justify-start  w-full'>
                {/* border-2 border-red-500 */}
            <label htmlFor="password" className=''>Password</label>
            </div>
            <input 
              type="password" 
              name="password" 
              id="password" 
              required 
              className="text-red-600 w-full p-4 mb-4 rounded-full shadow-inner focus:outline-none bg-inherit " 
              placeholder="Password" 
            />
            <button className="w-full hover:bg-black hover:text-white p-4 mt-5 font-bold text-gray-500 rounded-full shadow-lg cursor-pointer bg-inherit">
                Log In
            </button>
               </form>
            <p className="text-center text-sm text-gray-500 w-4/5 my-4">
              Forgotten your login details? <a href="#" className="font-bold">Get help with signing in.</a>
            </p>
            <div className="relative font-bold text-gray-500">
            </div>
            <div className="w-full hover:bg-black hover:text-white mt-4 p-4 text-black text-center font-bold rounded-full shadow-lg cursor-pointer bg-inherit">
              Login with Facebook
            </div>
            <p className="text-gray-500 mt-4 text-sm">
              Don't have an account? <a href="#" className="font-bold">Sign Up</a>
            </p>
       
        </div>
      </div>
    </>
  )
}

export default LogInForm
