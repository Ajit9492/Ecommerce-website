import React from 'react'
import './offers.css'
import enclusive_img from "../Assests/exclusive_image.png"

export default function Offers() {
  return (
    <div className="offers">
        <div className="offers-left">
            <h1>Enclusive</h1>
            <h1>Offers For</h1>
            <h1>You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check now</button>
        </div>
        <div className="offers-right">
            <img src={enclusive_img} alt="" />
        </div>
    </div>
  )
}
