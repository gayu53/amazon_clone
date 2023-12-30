import React from 'react'
import FooterTop from './FooterTop'
import "../footer/footer.css"
import FooterMiddle from './FooterMiddle'

function Footer() {
  return (
    <div className="font-titleFont"> 
        <FooterTop/>
        <FooterMiddle/>
    </div>
  )
}

export default Footer