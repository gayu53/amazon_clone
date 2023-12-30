import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// const allSideitem=[
//     {title :"Device and Service " ,one:"amazon Music", two:" products", three:"beauty products"},
//     {title :"Device and Service " ,one:"amazon Music", two:" products", three:"beauty products"},
//     {title :"Device and Service " ,one:"amazon Music", two:" products", three:"beauty products"},
//     {title :"Device and Service " ,one:"amazon Music", two:" products", three:"beauty products"},
//     {title :"Device and Service " ,one:"amazon Music", two:" products", three:"beauty products"},
// ]

function SideNavMenu({title,one,two,three}) {
  return (
    <div className='sideNavMenu'>
    <h3 className='font-titleFont font-semibold text-md  mb-1 px-6 '>{title}</h3>
    <ul className='text-xs'>
        <li className="menu_list">
            {one}<span className="text-lightText"><KeyboardArrowRightIcon/> </span>
        </li>
        <li className="menu_list">
            {two}<span className="text-lightText"><KeyboardArrowRightIcon/> </span>
        </li>
        <li className="menu_list">
            {three}<span className="text-lightText"><KeyboardArrowRightIcon/> </span>
        </li>
    </ul>
   </div>
  )
}

export default SideNavMenu