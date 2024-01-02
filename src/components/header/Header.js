import React, { useState } from 'react'
import {customImages} from "../../assets/customImages"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import  {allItems} from "../../constants/Data";
import HeaderBottom from './HeaderBottom';
import "../header/header.css" ;


const Header = ()=> {
    const [showAll,setshowAll] = useState(false);
  
  return (
    <div className='w-full sticky top-0 z-50'>
       <div className=' bg-amazon_blue  text-whiteText px-4 py-2  flex items-center gap-4'>
        {/* logo */}
          <div className='header-container'>
            <img className="header_logo" src={customImages.logo} alt="logo" />
          </div>

        {/* delivery*/}
        <div className='px-2 h-[80%] flex items-center border-transparent cursor-pointer duration-100 hover:border-whiteText' >
           <LocationOnOutlinedIcon />
           <p className='text-sm  text-lightText font-light flex flex-col' > Deliver to {""}
           <span className='text-sm text-lightText font-semibold mt-1'> Jolarpet</span></p>
        </div>

         {/* Search */}
         <div className='h-10 rounded-md flex flex-grow relative '>
            <span  onClick={()=> setshowAll(!showAll)} className='w-12 h-full bg-lightText  hover:bg-lightText cursor-pointer px-2  text-sm text-amazon_blue duration-300 font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md '>All <span> </span><ArrowDropDownOutlinedIcon/></span>
            {showAll && (
                <div>
                    <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-auto overflow-x-hidden bg-whiteText border-[1px] border-amazon_blue flex-col text-amazon_blue gap-1 p-2 z-50 '>
                           { allItems.map((value,index) =>(
                             <li className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-whiteText  hover:border-b-amazon_blue cursor-pointer duration-200  gap-2 key={index}"> {value.item}</li>
                            ))}
                    </ul>
                </div>
            )}
            <input className='h-full px-2 text-base text-amazon_blue flex-grow border-none outline-none' type="text"/>
            <span className='w-12 h-full flex  items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md'> <SearchOutlinedIcon/></span>
         </div>

         {/* Sign in */}
         <div className='flex flex-col items-start justify-center '>
          <p className='text-xs text-lightText font-light'>Hello, Sign in </p>
          <p className='text-sm font-semibold -mt-1 text-whiteText '>Accounts & Lists  <span><ArrowDropDownOutlinedIcon/></span>   
          </p>
         </div>
        {/* Return */}
        <div className='flex flex-col items-start justify-center '>
        <p className='text-xs text-lightText font-light'>Returns </p>
          <p className='text-sm font-semibold -mt-1 text-whiteText '>& order </p>
        </div>
        {/* cart */}
        <div className='flex items-start justify-center relative'>
         <ShoppingCartIcon/>
         <p className='text-xs font-semibold mt-3 text-whiteText '>
           cart 
         <span className='text-xs absolute -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue flex items-center justify-center rounded-full '> 0</span></p>
         </div>
    </div>

    <HeaderBottom/>
    </div>
  )
}

export default Header