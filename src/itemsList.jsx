import React from "react";
import data from "./data";

function ItemCard(props){
    const products = data.map(product => (
        
        <li key={product.id} className="card">
            <h3>{product.name}</h3>
            <a href="/product">
                <img src={product.img} alt="product img"/>
            </a>
            <div>{product.description.substring(0,100)}...</div>
            <div className="price-add-box">
                <div id="product-price">{product.price} ₪</div>
                <button id="add-to-cart-btn">Add to cart</button>
            </div>
        </li>
    ));
    return(
        <ul className="grid">
            {products.length ? (products) : (<li className="card">No Results Found!</li>)}
        </ul>
    );
}

export default ItemCard;