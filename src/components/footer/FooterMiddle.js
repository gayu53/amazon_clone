import React from "react";
import FootetMiddleList from "./FootetMiddleList";
import { middleList ,country_List } from "../../constants/Data";
import { customImages } from "../../assets/customImages";
import FooterBottom from "./FooterBottom";



// const FooterMiddle = ({ data }) => {
//   return (
//     <div>
//       {data.map((item, index) => (
//         <div key={index}>
//           {/* Your content for each item */}
//           {item.name}
//         </div>
//       ))}
//     </div>
//   );
// };


function FooterMiddle({data}) {
  return (
   <>
      <div className="sectionOne text-lightText text-md">
        <p> Back to Top</p>
       </div>
       <div className="w-full bg-amazon_light text-whiteText">
       <div className="w-full border-b-[1px] border-[#9E9E9E] py-10" >
       <div className="max-w-5xl mx-auto text-[#E0E0E0] ">
        <div className="w-full grid grid-cols-4 place-items-center items-start">

          {middleList.map((item ,i)=>(
               <FootetMiddleList
                 data={middleList}
                 key={i}
                 title={item.title}
                 ListItem={item.ListItem}          
               />
          ))}
       
        </div>
       </div>
       </div>
       <div className="w-full flex  items-center justify-center py-2  flex-col ">
        <div  className="flex  pt-3 gap-5 tems-center justify-center py-2" >
        <img  className="w-20 " src={customImages.logo} alt="logo" />
        <div >
        <p className="border-[1px] border-y-lightText  text-xs text-lightText tems-center justify-center">English</p>
        </div>
       </div>

       <div className="flex">
        {
          country_List.map((value,i) => (
            <p key={i} className="footerlink p-1 text-xs text-lightText">  {value.country}</p>
          ))
        } 
       </div>

       </div>    
 </div>
 <FooterBottom/>
    </>
  );
}

export default FooterMiddle;
