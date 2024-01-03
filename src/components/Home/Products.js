import React from "react";
import { useLoaderData } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import ApiIcon from '@mui/icons-material/Api';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/amazonSlice";



const Products = () => {
  const dispatch = useDispatch();
  const data = useLoaderData();
  const productData = data.data;
  // console.log(productData);

  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-4  gap-10  px-5 pt-5">
      {productData.map((value, i) => (
        <div
          key={i}
          className="bg-whiteText h-auto border-[1px] border-[#EEEEEE] py-8 z-30  hover:border-[transparent] Shadow-none hover:shadow-textShadow duration-200 flex flex-col gap-5 relative"
        >
           <span className="text-xs capitalize italic text-[#9e9e9e] absolute top-2 right-2 ">{value.category}</span>
          <div className="w-full h-auto flex items-center justify-center relative group ">
            <img
              className="w-52 h-64 object-contain "
              src={value.image}
              alt="img"
            />
            <ul className="w-full h-36 bg-[#f5f5f5] absolute bottom-[-170px] flex flex-col justify-center items-end  border-l border-r  border-[#9e9e9e] px-2 gap-2 font-titleFont group-hover:bottom-0 duration-700">
              <li className="productli">Compare <span><ApiIcon/></span></li>
              <li className="productli">Add to Cart <span><ShoppingCartIcon/></span></li>
              <li className="productli">View Details <span><ArrowCircleRightIcon/></span></li>
              <li className="productli">Add to Wish List <span><FavoriteIcon/></span></li>
            </ul>
          </div>

          <div className="px-4 z-10  bg-whiteText py-4 ">
            <div className="flex items-center justify-between">
              <h3 className=" font-titleFont text-lg text-amazon_blue font-medium  tracking-wide ">
                {value.title.substring(0, 20)}
              </h3>
              <p className="text-[#757575] text-md font-semibold ">
                ${value.price}
              </p>
            </div>
            <div>
              <p className="text-xs mb-1">
                {value.description.substring(0, 100)}...
              </p>
              <div className="text-[#FFEB3B]">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
            <button onClick={()=>dispatch(addToCart({
               id:value.id,
               category:value.category,
               image:value.image,
               title: value.title,
               price: value.price,
               description:value.description,
               quantity:1,
            }))} 
            className=" mt-3 w-full font-titleFont font-medium tect-base bg-gradient-to-tr from-[#ffee58] to-[#fff59d] border hover:from-[#fff176] hover:to-[#ffeb3b] border-[#fbc02d] hover:border-[#ffee58] active:to-[#ffeb3b] duration-200 py-1.5 rounded-md ">
              {" "}
              Add to Cart{" "}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
