import React from 'react'
import image from '../assets/img/home.jpg'
import Sidebar from './sidebar';
import { useEffect, useState } from "react";
import axiosClient from "../axios-client";
import { useStateContext } from '../contexts/ContextProvider';
import { useRef } from 'react';
import { Link } from 'react-router-dom';



function DisplayHouses() {
  const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const idORef = useRef();
    const idfRef = useRef();
    const idRef = useRef();


    

    useEffect(() => {
        getP()
    }, [])

    useEffect(() => {
        const idInput = document.getElementById("id_delete")
        if (idInput) {
            idRef.current = idInput;
        }
    }, [])


    const getP = () => {
        axiosClient.get('/house/get')
            .then(({ data }) => {

                setLoading(false)
                setProducts(data)
                console.log(data);
                //  setNavig(true);

            })
            .catch(err => {
                setLoading(true)
                const response = err.response;
                if (response && response.status == 422) {
                    console.log(response.data.errors);
                }
            })
    }




    const onSubmitfordelete = (p) => {
        if(!window.confirm("Are you sure you want to delete this product")){
            return
        }
        const payloadd = {

            id: p.id,

        }
        axiosClient.post('/house/delete', payloadd)
            .then(({ data }) => {
                getP()
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status == 422) {
                    console.log(response.data.errors);
                }
            })


    }

 
  return (

<div className="table_d">
    <div className="container">
   
     <div className="sidedbar">
       <Sidebar/> 
        </div> 
    <div >
     
        <div className='header_for_d'>
        <h1> houses</h1>  <Link className='link_for_d' to="/admin/create">Add new House</Link>
        </div>
            
       
        <section >
        <table className="table">
                        <thead>
                            <tr>
                                <th scope='col'>Image</th>
                                <th scope='col'>Titre</th>
                                <th scope='col'>prix</th>
                                <th scope='col'>description</th>
                                <th>Update</th>
                                <th scope='col'>delete</th>
                                


                            </tr>

                        </thead>
                        {loading && <tbody>
                            <tr>
                                <td colSpan={6} className='text-center'>
                                    Loading...
                                </td></tr>
                        </tbody>
                        }
                        {!loading && <tbody>
                            {products.map(p => (<tr key={p.id}>
                                <td>
                                <img src={`data:image/jpeg;base64,${p.image}`} alt=""
                         width={50}
                         height={50}                      
                         className='img-fluid rounded'
                        />
                                </td>
                                <td>{p.name}</td>
                                <td>{p.price}$</td>
                                <td>{p.description.slice(0, 20)} </td>
                          

                                <td>
                                    <Link className="btn btn-outline-warning" to={'/admin/update/' + p.id} >Update</Link>

                                </td>
                                <td>

                                    <button  onClick={ev => onSubmitfordelete(p)} className='btn btn-danger'>
                                        supprimer
                                    </button>

                                </td>
                            </tr>))}
                          
                        </tbody>}
                    </table>
          </section>
      </div>
       </div>

    </div>

  )
}

export default DisplayHouses