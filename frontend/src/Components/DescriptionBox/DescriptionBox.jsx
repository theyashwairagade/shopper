import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilate buying and selling of products or services over the internet serves as a virtual market place where business and individuals showcase their products, interact with customers, and conduct transactions over without the need of a physical presence. E-commerce websites have gained immense popularity due to their converting accessibility, and the global reach they offer.</p>
            <p>
                E-commerce websites typically display products or services a detailed descriptions, images, prices, and any availabe variety(e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox