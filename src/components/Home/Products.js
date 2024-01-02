import React from "react";
import { useLoaderData } from "react-router-dom";

const Products = () => {
  const data = useLoaderData();
  const productData = data.data;
  console.log(productData);

  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-4  gap-10  px-5" >
      {productData.map((value, i) => (
        <div key={i} className="bg-whiteText h-auto border-[1px] border-[#EEEEEE] py-5 z-30  hover:border-[transparent] Shadow-none hover:shadow-textShadow duration-200 relative">
          <div className="w-full h-auto flex items-center justify-center">
            <img
              className="w-52 h-64 object-contain"
              src={value.image}
              alt="img"
            />
          </div>
          <div className="px-4">
          <div className="flex items-center justify-between"> 
            <h3 className=" font-titleFont text-lg text-amazon_blue font-medium  tracking-wide ">{value.title.substring(0,20)}</h3>
            <p className="text-[#757575] text-md font-semibold ">${value.price}</p>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
