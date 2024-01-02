import React from 'react'
import {FooterBottom_List} from "../../constants/Data"

function FooterBottom() {
  return (
    <div className='w-full bg-footerBottom py-8'>
      
     <div className='max-w-5xl mx-auto '>
      <div className='w-full grid grid-cols-4 gap-3 place-content-center text-[#BDBDBD]'>
        {FooterBottom_List.map((item ,i) =>(
        <div className="cursor-pointer" key={i}>
          <h3 className='text-[#DDD] text-xs hover:underline leading-3 mb-[2px]'>{item.title}</h3>
          <p className=' text-xs tracking-tight  text-[#999] hover:underline leading-3'>{item.des}</p>
         </div>
        ))}
      </div>
     </div>
     <div className='flex items-center justify-center pt-8 text-[#DDD] text-xs  flex-col'>
      <p><span className='hover:underline leading-3 mb-[2px]  px-1'> Condition of Use & Sale</span> <span className='hover:underline leading-3 mb-[2px]  px-1'> Privacy Notice </span> <span className='hover:underline leading-3 mb-[2px]  px-1'>Interest-Based Ads</span></p>
      <p> ©1996-2023, Amazon.com, Inc. or its affiliates</p>
     </div>
      
      
    </div>
  ) 
}

export default FooterBottom 