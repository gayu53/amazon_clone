import React, { useEffect, useRef, useState } from 'react'
import "../header/header.css"
import MenuIcon from '@mui/icons-material/Menu';
import {header_list} from "../../constants/Data"
import SideNavMenu from './SideNavMenu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';


function HeaderBottom() {
    const ref = useRef();
    const [sidebar , setsidebar] = useState(false);
    
    useEffect (()=>{
        document.body.addEventListener("click",(e)=>{
           if(e.target.contains(ref.current)){
            setsidebar(false)
           }
        })

    } ,[ref,sidebar])
   


  return (
    <>
    <div className='header_container'>

        
        <ul className='headerBottom_list'>

            {/* <li className='headerBottom_listitem flex items-center gap-1' > <MenuIcon/>All</li> */}

             <span onClick={()=>setsidebar(true)}><MenuIcon/></span>
             
            {header_list.map((value,index)=>(
                
                <li  className='headerBottom_listitem flex items-center gap-1  text-xs ' key={index}> {value.listitem}</li>
            ))}

        </ul> 
        
       
    </div>
    {sidebar && (
            <div className='header_sidebar'>
                    <div className='sideBar'>
                          <div className='sidebar_layout' ref={ref}>
                               <div className='sidebar_header'>
                                    <AccountCircleIcon/>
                                    <h3 className='font-titleFont font-bold text-lg tracking-wide '>  Hello , Sign In</h3>
                               </div>

                               <SideNavMenu 
                               title ="Digital Content And Devices"
                               one ="Amazon music"
                               two ="hgkjhkj"
                               three ="gjhghkjhlk"
                               />
                                <SideNavMenu 
                               title ="Amazon Service"
                               one ="Amazon music"
                               two ="hgkjhkj"
                               three ="gjhghkjhlk"
                               />
                                <SideNavMenu 
                               title ="Digital Content And Devices"
                               one ="Amazon music"
                               two ="hgkjhkj"
                               three ="gjhghkjhlk"
                               />
                                <SideNavMenu 
                               title ="Digital Content And Devices"
                               one ="Amazon music"
                               two ="hgkjhkj"
                               three ="gjhghkjhlk"
                               />
                               
                 </div>
                 <span onClick={()=>setsidebar(false)} className='closeIcon'> <CloseIcon/></span>

                     </div>
            </div>
        ) } 
   
     

    
     </>
  )
}

export default HeaderBottom