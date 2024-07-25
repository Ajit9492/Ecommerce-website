import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assests/star_icon.png'
import star_dull_icon from '../Assests/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext';


function ProductDisplay(props) {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='product-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-prices">
                    <div className="productdisplay-old-price"><i className="fa fa-inr"></i>{product.old_price}</div>
                    <div className="productdisplay-new-price"><i className="fa fa-inr"></i>{product.new_price}</div>
                </div>
                <div className="productdisplay-description">
                    A lightweight, usually knitted, pullover shirt, close fitting and with a round neckline and short sleeves, worn as an undershirt or other garment.
                </div>
                <div className="productdisplay-size">
                    <h1>Select Sizes</h1>
                    <div className="productdisplay-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                <p className="productdisplay-category"><span>Category: </span>Women, T-shirt, Crop Top</p>
                <p className="productdisplay-category"><span>Tags: </span>Modern, Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay