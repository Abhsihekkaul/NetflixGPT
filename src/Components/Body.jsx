import React, { useEffect } from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import Browse from './Browse';
import Login from './Login';
import { useDispatch } from 'react-redux';
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { AddUser, RemoveUser } from '../Utils/UserSlice';

const Body = () => {
    const dispatch = useDispatch();
    const Approuter = createBrowserRouter([
      ...['/', '/login'].map((path) => ({
        path: path,
        element: <Login />,
      })),
        {
            path: '/Browse',
            element : <Browse />
        }
      ]);

    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName, photoURL} = user;
          dispatch(AddUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
        } else {
          dispatch(RemoveUser())
        }
      });
    },[])
       
  return (
    <RouterProvider router={Approuter}></RouterProvider>
  )
}

export default Body
