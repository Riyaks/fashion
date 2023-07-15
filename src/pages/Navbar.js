import React, { useState } from 'react'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.css';
import { FaCartPlus } from "react-icons/fa";
function Navbar() {
    const [navActive, setNavActive] = useState(null);
  return (
    
    <>

<header>

   <nav className={`nav`}  style={{position:"fixed", width:"100%",padding:"10px",boxShadow:" rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}}>
    
     <a href={"/"}>
     <img class=" navbar-brand rounded-circle " style={{width:"50px",height:"70px",marginLeft:"70px"}} src="https://previews.123rf.com/images/kaidash/kaidash1606/kaidash160600017/58060852-beautiful-woman-face-and-hair-fashion-icon.jpg" ></img> 
          </a>
           
     <div className='maximumtwo' >

<a class="hoveraone" href="/" style={{color:"black"}}>Home</a>
<a  class="hovera" href="#" style={{color:"black"}}>About Us</a>
<a class="hovera" href="#" style={{color:"black"}}>Services</a>


</div>
<FaCartPlus style={{float:"right",marginRight:"30px",marginTop:"30px",fontSize:"25px"}}/>
 <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
          </div> 
        <div className={`${navActive ? "active" : ""} nav__menu-list `}>
<a href="/" >Home</a>
<a href="#" >Services</a>
<a href="#" style={{marginRight:"100px"}}>Contact</a>

</div>

 </nav>

    </header>

    </>
  )
}

export default Navbar


