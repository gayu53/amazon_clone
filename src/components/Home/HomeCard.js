// import { Label } from '@mui/icons-material';
// import React from 'react'
// import "./home.scss"

// const cardData=[
//     {

// title: "Up to 75% off | Headphones",
//   item :[
//    {
//       img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Boat_Desktop_Qc_1x._SY116_CB577919562_.jpg",
//       Label:"Up to 75% off | boAt",
//    },
//    {
//     img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Boult_Desktop_Qc_1x._SY116_CB577919562_.jpg",
//     Label:"Up to 75% off | Boult",
//    },
//    {
//     img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Noise_Desktop_Qc_1x._SY116_CB577919562_.jpg",
//     Label:"Up to 75% off | Noise",
//    },
//    {
//     img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Zebronics_Desktop_Qc_1x._SY116_CB577919562_.jpg",
//     Label:"Up to 75% off | Zebronics",
//    },
//   ],
// }

// ];

// function HomeCard() {
//   return (
//     <div className='home_cardContainer'>

//         {cardData.map((value,index)=> (
//             <div className='home_cardbox' key={index}>
//             <span className='title_card'> {value.title} </span>
//             {item.map((value,index)=> (
//             <div className='img_container'>
//             <img src={value.img} alt='cardimage' />
//             <span className='card_text'>{value.Label}</span>
//             </div>
//             ))}

//             </div>
//         ))}

//     </div>
//   )
// }

// export default HomeCard

import { Label } from "@mui/icons-material";
import React from "react";
import "./home.scss";

const cardData = [
  {
    title: "Up to 75% off | Headphones",
    seemore :"See all offers",
    item: [
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Boat_Desktop_Qc_1x._SY116_CB577919562_.jpg",
        Label: "Up to 75% off | boAt",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Boult_Desktop_Qc_1x._SY116_CB577919562_.jpg",
        Label: "Up to 75% off | Boult",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Noise_Desktop_Qc_1x._SY116_CB577919562_.jpg",
        Label: "Up to 75% off | Noise",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Zebronics_Desktop_Qc_1x._SY116_CB577919562_.jpg",
        Label: "Up to 75% off | Zebronics",
      },
    ],
  },
  {
    title: "Up to 60% off | Styles for men",
    seemore :"End of season sale",
    item: [
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg",
        Label: "Up to 75% off | boAt",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg",
        Label: "Up to 75% off | Boult",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg",
        Label: "Up to 75% off | Noise",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg",
        Label: "Up to 75% off | Zebronics",
      },
    ],
  },
  {
    title: "Get the perfect screen size | TVs Starting ₹6,999",
    seemore :"see more",
    item: [
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/Suma/MSO/Dec/DesktopQC/Christmas/2x_Desktop_Quad_card_w_title_-_Card_10.5x._SY116_CB570558331_.jpg",
        Label: "Up to 75% off | Boult",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/Suma/MSO/Dec/DesktopQC/Christmas/2x_Desktop_Quad_card_w_title_-_Card_20.5x._SY116_CB570558331_.jpg",
        Label: "Up to 75% off | Boult",
      },
      {
        img: " https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/Suma/MSO/Dec/DesktopQC/Christmas/2x_Desktop_Quad_card_w_title_-_Card_30.5x._SY116_CB570558331_.jpg",
        Label: "Up to 75% off | Noise",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/Suma/MSO/Dec/DesktopQC/Christmas/2x_Desktop_Quad_card_w_title_-_Card_40.5x._SY116_CB570558331_.jpg",
        Label: "Up to 75% off | Zebronics",
      },
    ],
  },
  {
    title: "Appliances for your home | Up to 55% off",
    seemore :"See all offers",
    item: [
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg ",
        Label: "Up to 75% off | boAt",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
        Label: "Up to 75% off | boAt",

      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg",
        Label: "Up to 75% off | Noise",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg",
        Label: "Up to 75% off | Zebronics",
      },
    ],
  },
  
  {
    title: "Revamp your home in style",
    seemore :"Explore all",
    item: [
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_1_Low._SY116_CB670263840_.jpg",
        Label: "Up to 75% off | boAt",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_2_Low._SY116_CB670263840_.jpg",
        Label: "Up to 75% off | boAt",

      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_3_Low._SY116_CB670263840_.jpg",
        Label: "Up to 75% off | Noise",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_4_Low._SY116_CB670263840_.jpg",
        Label: "Up to 75% off | Zebronics",
      },
    
    ],
  },
  {
    title: "Automotive essentials | Up to 60% off",
    seemore :"see more",
    item: [
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg ",
        Label: "Up to 75% off | boAt",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg",
        Label: "Up to 75% off | boAt",

      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg",
        Label: "Up to 75% off | Noise",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg",
        Label: "Up to 75% off | Zebronics",
      },
    
    ],
  },
  {
    title: "Up to 60% off | Styles for women",
    seemore :"see more",
    item: [
      {
        img: " https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg",
        Label: "Up to 75% off | boAt",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg",
        Label: "Up to 75% off | boAt",

      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-186-116._SY116_CB636048992_.jpg",
        Label: "Up to 75% off | Noise",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-186-116._SY116_CB636048992_.jpg",
        Label: "Up to 75% off | Zebronics",
      },
    
    ],
  },
  {
    title: "Starting ₹89 | Amazon Brands & more",
    seemore :"see more",
    item: [
      {
        img: " https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Bikram/Bikram1/PC_QC_186x116_1_Kitchen_Week52_4._SY116_CB571434851_.jpg",
        Label: "Up to 75% off | boAt",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Bikram/Bikram1/PC_QC_186x116_1_Kitchen_Week52_1._SY116_CB571434851_.jpg",
        Label: "Up to 75% off | boAt",

      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Bikram/Bikram1/PC_QC_186x116_1_Kitchen_Week52_3._SY116_CB571434851_.jpg",
        Label: "Up to 75% off | Noise",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Bikram/Bikram1/PC_QC_186x116_1_Kitchen_Week52_2._SY116_CB571434851_.jpg",
        Label: "Up to 75% off | Zebronics",
      },
    
    ],
  },
  
];

function HomeCard() {
  return (
    <div className="home_cardContainer">
      {cardData.map((value, index) => (
        <div className="home_cardbox" key={index}>
          <div className="img_box">
          <span className="title_card">{value.title}</span>
          </div>
          <div className="full_contain">
            {value.item.map((itemValue, itemIndex) => (
              <div className="img_container" key={itemIndex}>
                <img src={itemValue.img} alt="cardimage" />
                <span className="card_text">{itemValue.Label}</span>
              </div>
            ))}    
          </div>
          <div className="seelink">
            <a href="/"className="linkbottom">{value.seemore}</a>
          </div>

        </div>
      ))}
    </div>
  );
}

export default HomeCard;