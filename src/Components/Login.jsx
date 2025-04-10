import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
    const [IsSignIn,setIsSignIn] = useState(true)
    const toggleSignInButton = () => {
        setIsSignIn(!IsSignIn);
    }
  return (
    <div>
      <Header />
      <div className='absolute'>
      <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_medium.jpg" 
        alt="Background Image" />
      </div>
      <form className='absolute p-12 bg-black/70 w-3/12 my-36 mx-auto right-0 left-0 rounded-lg'>
        <h1 className='font-bold text-white py-4 text-3xl'>
            {IsSignIn ? "Sign In " : "Sign Up"}
        </h1>
        {!IsSignIn &&
        <input type="Text" placeholder='Full Name' className='p-2 my-2 bg-gray-700 w-full text-white'/>
        }
        <input type="text" placeholder='Email Address' className='p-2 my-2 bg-gray-700 w-full text-white' />
        <input type="password" placeholder='password' className='p-2 my-2 bg-gray-700 w-full text-white'/>
        
        <button className='p-4 my-2 bg-red-700 text-white w-full'>Sign In</button>
        <p className='py-4 text-white cursor-pointer' onClick={toggleSignInButton}>
            {IsSignIn ? "New to Netflix? Sign Up Now!" : "Already Registered User! Sign In Now"} 
        </p>
      </form>
    </div>
  )
}

export default Login
