import React, { useRef, useState } from 'react'
import Header from './Header'
import { ValidateEmailAndPassword, ValidateUserName } from '../Utils/Validator'
const Login = () => {
    // Variables
    const [IsSignIn,setIsSignIn] = useState(true);
    const [Message, setMessage] = useState(null);
    const Email = useRef(null);
    const Password = useRef(null);
    const UserName = useRef(null);


    // Toggle sign in to create two both sign in and sign up using the state variables 
    const toggleSignInButton = () => {
        setIsSignIn(!IsSignIn);
    }

    // form Validation
    const HandleButtonClick = () => {
      const emailValue = Email.current.value;
      const passwordValue = Password.current.value;
      const userNameValue = UserName.current?.value || ""; // in case of SignIn mode
  
      const message = ValidateEmailAndPassword(emailValue, passwordValue);
      setMessage(message);
  }
    
    
    
  return (
    <div>
      <Header />
      <div className='absolute'>
      <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_medium.jpg" 
        alt="Background Image" />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='absolute p-12 bg-black/70 w-3/12 my-36 mx-auto right-0 left-0 rounded-lg'>
        <h1 className='font-bold text-white py-4 text-3xl'>
            {IsSignIn ? "Sign In " : "Sign Up"}
        </h1>
        {!IsSignIn &&
        <input ref={UserName} type="Text" placeholder='Full Name' className='p-2 my-2 bg-gray-700 w-full text-white'/>
        }
        <input ref={Email} type="text" placeholder='Email Address' className='p-2 my-2 bg-gray-700 w-full text-white' />
        <input ref={Password} type="password" placeholder='password' className='p-2 my-2 bg-gray-700 w-full text-white'/>
        <p className='text-2xl text-red-500 font-bold'>{Message}</p>
        
        <button className='p-4 my-2 bg-red-700 text-white w-full' onClick={HandleButtonClick}>Sign In</button>
        <p className='py-4 text-white' onClick={toggleSignInButton}>
            {IsSignIn ? "New to Netflix? Sign Up Now!" : "Already Registered User! Sign In Now"} 
        </p>
      </form>
    </div>
  )
}

export default Login
