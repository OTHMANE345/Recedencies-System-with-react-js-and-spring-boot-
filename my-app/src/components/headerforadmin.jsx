import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider.jsx";

const NavBarForAdmin = () => {
const {user, token} = useStateContext()
const navigate = useNavigate();
const {setUser, setToken} = useStateContext();

const logout = (ev) =>{
         setUser({})
         setToken(null)
        localStorage.removeItem('ACCESS_TOKEN')
        navigate('/login')
        console.log(data);
}

  return (
<>
  

  <div className="header">
<div className="container">

  <a href="#" className='logo'>Recedencies  System </a>
  <ul className='main-nav'>
  {!token && (
                <li><Link to="/login" >login for users</Link></li>

             )}
              
                
               
               

{!token && (    <li ><Link to="/admin/login" >login admin</Link></li>
  )}
    
  </ul>
</div>
</div>
  </>
  );
};

export default NavBarForAdmin                  ; 