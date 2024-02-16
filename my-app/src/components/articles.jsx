import React from 'react'
import image from '../assets/img/home.jpg'
import { IoArrowForwardCircle } from "react-icons/io5";
import {Componen, useEffect, useState} from "react";
import axiosClient from "../axios-client";
import { Link } from "react-router-dom";


function Articles() {
  const [products, setProducts] = useState([]);
  useEffect( () => {
     getP()
  } , [])


  const getP = () => {
     axiosClient.get('/house/get')
     .then(({data})=>{
         setProducts(data)
          console.log(data);
         //  setNavig(true);

     })
 .catch(err => {
     const response = err.response;
     if(response && response.status == 422){
         console.log(response.data.errors);
     }
 })
  } 
  return (

<div className="articles">
    <h2 className='main-title'>articles</h2>
    <div className="container">
{products.map(h=>(<div className="box">
<img src={`data:image/jpeg;base64,${h.image}`} alt=""
                                             
                         
                        />
  <div className="content"> 
  <h3>{h.name}</h3>
  <p>{h.description}</p>
  <h3>{h.price}$</h3>
  </div>
  <div className="info">
    <Link to={'/showdetailsofhouse/'+ h.id}>Read More</Link>
    <span className="icon" ><IoArrowForwardCircle /></span>
   
    

  </div>
</div>))}


    </div>
    
    
</div>
  )
}

export default Articles