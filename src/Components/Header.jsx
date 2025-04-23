import React, { useEffect } from 'react';
import { USER_AVATAR } from '../Utils/constants';
import { auth } from '../Utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { AddUser, RemoveUser } from '../Utils/UserSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(AddUser({ uid, email, displayName, photoURL }));
        navigate('/Browse');
      } else {
        dispatch(RemoveUser());
        navigate('/');
      }
    });

    // Cleanup on unmount
    return () => unsubscribe();
  }, [dispatch, navigate]);

  // ✅ Keep signOut logic inside this function
  const HandleSignOut = () => {
    signOut(auth).catch((error) => {
      // console.log('Sign out error:', error);
    });
  };

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
      <img
        className='w-44 mx-auto md:mx-0'
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix logo"
      />

      {user && (
        <div className='flex p-4 gap-2'>
          <img alt="UserAvatar" className='w-8 h-8' src={user?.photoURL || USER_AVATAR} />
          <button onClick={HandleSignOut} className='font-bold text-white'>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
