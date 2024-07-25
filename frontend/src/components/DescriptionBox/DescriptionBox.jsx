import React from 'react'
import './DescriptionBox.css'

function DescriptionBox() {
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
                An e-commerce is an online plateform that facilitate buying and selling products or services over the internet. 
                It serves as a virtual marketplace where businesses and indviduals can showcase there products, interact with customers and conduct
                transactions without the need for physical presence. E-Commerce website have gained immence popularity due to their conveinence, accesibility
                and global reach they offer. 
            </p>
            <p>E-Commerce website typically display products or services along with detailed description, images, prices, and any
            available variations (e.g. sizes, colors). Each product usually has its owm dedicated page with relevant information.</p>
        </div>
    </div>
  )
}

export default DescriptionBox