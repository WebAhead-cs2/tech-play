import React from "react";
import data from "./data";

function Product(){
    return(
        <div className="product-container">
            <h2>{data[0].name}</h2>
            <h5>by - {data[0].brand}</h5>
            <div className="img-desc-product">
                <img src={data[0].img} alt=""/>
                <p>{data[0].description}</p>
            </div>
            <button id="add-to-cart-btn-product">Add to cart</button>
        </div>
    )
}

export default Product;