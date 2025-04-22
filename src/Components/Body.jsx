import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import Browse from './Browse';
import Login from './Login';

const Body = () => {
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
       
  return (
    <RouterProvider router={Approuter}></RouterProvider>
  )
}

export default Body
