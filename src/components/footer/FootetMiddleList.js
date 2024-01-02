import React from 'react';


function FootetMiddleList({title,ListItem}) {
  return (   
    <div>
        <h3 className='font-titleFont text-whiteText text-base font-semibold mb-3'> {title} </h3>
        <ul className='flex flex-col gap-2 font-bodyFont'>
     
          {
             ListItem.map((item)=> 
             item.ListData.map((data,i)=>
              <li key={i} className='footerlink'>{data}</li>
             ))
          }   
      
        </ul>

    </div>
  );
}

export default FootetMiddleList;