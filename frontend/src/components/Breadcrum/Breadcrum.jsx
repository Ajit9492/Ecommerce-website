import React from 'react'
import './Breadcrum.css'
import breadcrum_arrow from '../Assests/breadcrum_arrow.png'

function Breadcrum(props) {
    const {product} = props;
  return (
    <div className='breadcrum'>
        Home <img src={breadcrum_arrow} alt="" /> Shop <img src={breadcrum_arrow} alt="" /> men <img src={breadcrum_arrow} alt="" /> {product.category} <img src={breadcrum_arrow} alt="" /> {product.name};
    </div> 
  )
}

export default Breadcrum;