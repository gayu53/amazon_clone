import React from 'react';
import { footer_list } from "../../constants/Data";

function FootetMiddleList() {
  return (
    <div>
      {footer_list.map((value, index) => (
        <div  key={index}>
          <h3 className="text-whiteText">{value.title}</h3>
          {value.list.map((val, innerIndex) => (
            <ul key={innerIndex}>
              <li className="footerlink">{val.listitem}</li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
}

export default FootetMiddleList;