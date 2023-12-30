import React, { useState } from 'react'
import Slider from "react-slick";
import { customImages } from '../../assets/customImages';

function Banner() {

  const [dotActive ,setdotActive] =useState("0");

  const customDots = (dots) => (
    <ul style={{ margin: '0', padding: '0', textAlign: 'center' }}>
      {dots.map((dot, index) => (
        <li key={index} style={{ display: 'inline-block', margin: '0 5px' }}>
          <span 
          style={{ 
            width: '10px',
             height: '10px', 
             borderRadius: '50%',
             background: index === dotActive ? '#333' : '#E0E0E0', 
             display: 'inline-block' 
              }} onClick={() => dot.onClick()}>
                
            </span>
        </li>
      ))}
    </ul>
  );

  var settings = {
    dots: true,
    infinite: true,
    // speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    arrows:false,
    appendDots: customDots,
    beforeChange: (prev, next) => {
      setdotActive(next + 1);
    },

  };
  return (
    <div className='w-full'>
      <div className='w-full h-full relative'>
        <Slider {...settings}>
      <div>
       <img src={customImages.bannerImgOne} alt="banner ImgOne"/>
      </div>
      <div>
       <img src={customImages.bannerImgTwo} alt="banner ImgOne"/>
      </div>
      <div>
       <img src={customImages.bannerImgThree} alt="banner ImgOne"/>
      </div>
      <div>
       <img src={customImages.bannerImgFour} alt="banner ImgOne"/>
      </div>
      <div>
       <img src={customImages.bannerImgFive} alt="banner ImgOne"/>
      </div>
      <div>
       <img src={customImages.bannerImgOne} alt="banner ImgOne"/>
      </div>
    </Slider>
    </div>
    </div>
  )
}

export default Banner

