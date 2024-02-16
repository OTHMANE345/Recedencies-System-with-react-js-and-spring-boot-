import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider.jsx";

const NavBarFor = () => {
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
                <li><Link to="/login" >login</Link></li>

             )}
              {!token && (
                <li><Link to="/singup" >sign up</Link></li>

             )}
                
               {token && (
                <li><Link to="/login"  onClick={logout}>log out</Link></li>
               )}

{!token && (    <li ><Link to="/admin/login" >login admin</Link></li>
  )}
    
  </ul>
</div>
</div>
  </>
  );
};

export default NavBarFor                  ; 