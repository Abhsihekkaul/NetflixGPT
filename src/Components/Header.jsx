import React from 'react'
import { USER_AVATAR } from '../Utils/constants'
import { auth } from '../Utils/firebase';
import {signOut } from "firebase/auth";
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const HandleSignOut = ()=>{
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <div className='absolute w-screen px-18 py-2 bg-gradient-to-b from-black z-2 flex justify-between'>
      <img className='w-36' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
      alt="Netflix logo" />

    {user && (<div className='flex p-4 gap-2'>
      <img  alt="UserAvatar" className='w-8 h-8 ' src={user?.photoURL} />
      <button onClick={HandleSignOut} className='text-white font-bold cursor-pointer'>Sign Out</button>
    </div>)}
    </div>
  )
}

export default Header
