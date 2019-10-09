import React from 'react';
import { Product, ProductArray } from '../../model/model';
import './ProductDetails.scss';
export { ProductDetails };

function ProductDetails(data: { product: Product, shoppingCart: ProductArray }) {
   
    return (<div>
        <div className="flexContainer">
            <h1 className="title is-3 titleDetails">Product: {data.product.name}</h1>
            <a className="button is-primary is-large productOperationsButton editButton">EDIT</a>
            <a className="button is-info is-large productOperationsButton addButton" onClick={(e) => addOnClick(data.product, 
                data.shoppingCart)}>ADD</a>
        </div>
        <div className="box productDetails">
            <figure className="image productImage is-pulled-left">
                <img src={data.product.image}/>
            </figure>
            <div className="flexContainer">
                <p className="informativeLabel">Name</p> <p className="detailedInfo">{data.product.name}</p>
            </div>
            <div className="flexContainer">
                <p className="informativeLabel">Category</p> <p className="detailedInfo">{data.product.category}</p>
            </div>
            <div className="flexContainer">
                <p className="informativeLabel">Price</p> <p className="detailedInfo">{data.product.price} RON</p>
            </div>
            <div className="flexContainer">
                <p className="informativeLabel">Description</p> <p className="detailedInfo">{data.product.description}</p>
            </div>
    </div>
    </div>
    )
}

function addOnClick(product: Product, shoppingCart: ProductArray) {
    shoppingCart.products.push(product);
}