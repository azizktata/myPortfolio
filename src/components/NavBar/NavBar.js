import React, { useState } from 'react'
import "./NavBar.css"
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';
function NavBar() {
   
    const [disclosure, setDisclosure] = useState(false)
  // const [click, setClick] = useState(false)

    const handleClick =  e =>{
        // let btnContainer =   document.getElementById("navbar");
        // let btns =  btnContainer.getElementsByClassName("btn");

        // for(let i=0; i<btns.length; i++){
          
        //   btns[i].addEventListener('click',  function(){
        //      let current =  document.getElementsByClassName("active");
            
        //     if(e.target.className===btns[i].className )
        //     {
        //       current[0].className = current[0].className.replace("active", "btn")
        //       e.target.className = e.target.className.replace("btn","active")
              
        //     }
             
            
        //   })
        //   console.log(e.target.className)
        // }
        

    }
    const handleOpen = e =>{
        setDisclosure(prev => !prev)
    }

    const menu = <>
    <p onClick={handleClick}  className=' active helo '><Link to="/" style={{textDecoration:"none",color:"#607B96"}}>_hello</Link></p>
    <p onClick={handleClick}  className='btn abt'><Link to="/aboutme" style={{textDecoration:"none",color:"#607B96"}}>_about-me</Link></p>
    <p onClick={handleClick} className='btn prj'><Link to="/project" style={{textDecoration:"none",color:"#607B96"}}>_projects</Link></p>
    
       
    </>
    
  return (
      <>
      
    <div id='navbar' className='nav '>
        <p onClick={handleClick}  className=' btn name '>aziz-ktata</p>
        
        {menu}
            
        <p onClick={handleClick}  className='btn contact-me'><Link to="/contactus" style={{textDecoration:"none",color:"#607B96"}}>_contact-me</Link></p>

    </div>
    <div className={disclosure ? 'mobile show': 'mobile'}>
      <div className='container'>
        <div className='header'>
            <p className='name '>aziz-ktata</p>
           <button onClick={handleOpen} className='menu-btn'><AiOutlineMenu  className='menu-icon'/> </button>

        </div>
        {disclosure && <div className='menu-links'>{menu}<p onClick={handleClick} className='btn prj'><Link to="/contactus" style={{textDecoration:"none",color:"#607B96"}}>_contact-me</Link></p> </div>}
        </div>
    </div>  
    </>
  )
}

export default NavBar