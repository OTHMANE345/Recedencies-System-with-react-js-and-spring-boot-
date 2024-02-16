import React from 'react'
import image from '../assets/img/home.jpg'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

import axiosClient from "../axios-client";
import { useEffect, useState } from "react";
import { useRef } from 'react';
import { useStateContext } from '../contexts/ContextProvider'

function Read() {

  const { id } = useParams();
  const [errors, setErrors] = useState(null);

  const { user } = useStateContext();
  const userId = user ? user.id : null;
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getP()
  }, []);


  const getP = () => {
    const payload = {
      id: id,
    }
    console.log(id);

    axiosClient.post('/house/show', payload)
      .then(({ data }) => {
        setProducts(data)
        console.log(data)
        //  setNavig(true);

      })
      .catch(err => {
        const response = err.response;
        if (response && response.status == 422) {
          console.log(response.data.errors);
        }
      })
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    const payload = {
      price: products.price,
      house_id: products.id,
      house_name: products.name,
      user_id: user.id,

    }
    console.log("hehehegvg")
    console.log(payload);
    axiosClient.post('/order/add', payload)
      .then(({ data }) => {
        console.log(data);

        navigate('/houses')

      })
      .catch(err => {
        const response = err.response;
        if (response && response.status == 422) {
          console.log(response.data.errors);
        }
      })


  }


  return (

    <div className="landing_r">

      <div className="container">
        <div className="text">
          <h1>{products.name} </h1>
          <p>{products.description}</p>
          <h2>{products.price} </h2>
          <form onSubmit={onSubmit} >
          <button  >Order now</button>
          </form>
        </div>
        <div className="image_read_more">
          <img src={`data:image/jpeg;base64,${products.image}`} alt=""


          />
        </div>
      </div>

    </div>
  )
}

export default Read