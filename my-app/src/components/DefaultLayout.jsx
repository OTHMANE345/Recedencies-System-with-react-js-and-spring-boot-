import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'
import Navbar from './header';


import Footer from './footer';



export default function DefaultLayout() {
   
  return (
    <>
 <Navbar/> 

<Outlet/>
<Footer/>
</>
  )
}
