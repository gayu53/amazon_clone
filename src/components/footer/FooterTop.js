import React from "react";

function FooterTop() {
  return (
    <div className="w-full bg-whiteText py-6  ">
      <div className="footer_top border-t-[1px] border-b-[1px]  border-[#DDDD] py-8 ">
        <div className="footerTop_contain">
          <p>See personalized recommendations</p>
          <button className="btn font-semibold rounded-md py-1"> Sign In </button>
          <p className="text-xs mt-1 "> New Customer? <span className="text-xs text-[blue] ml-1 cursor-pointer"> Start here.</span></p>
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
