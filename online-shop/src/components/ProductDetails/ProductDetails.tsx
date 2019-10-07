import React from 'react';
import { Product } from '../../model/model';
import './ProductDetails.scss';
export { ProductDetails };

const ProductDetails: React.FC<Product> = (product: Product) => {
    return (<div>
            <div className="flexContainer">
            <h1 className="title is-3 titleDetails">Product: {product.name}</h1>
            <a className="button is-primary is-large productOperationsButton editButton">EDIT</a>
            <a className="button is-danger is-large productOperationsButton deleteButton">DELETE</a>
        </div>
        <div className="box productDetails">
            <figure className="image productImage is-pulled-left">
                <img src={product.image}/>
            </figure>
            <div className="flexContainer">
                <p className="informativeLabel">Name</p> <p className="detailedInfo">{product.name}</p>
            </div>
            <div className="flexContainer">
                <p className="informativeLabel">Category</p> <p className="detailedInfo">{product.category}</p>
            </div>
            <div className="flexContainer">
                <p className="informativeLabel">Price</p> <p className="detailedInfo">{product.price} RON</p>
            </div>
            <div className="flexContainer">
                <p className="informativeLabel">Description</p> <p className="detailedInfo">{product.description}</p>
            </div>
        </div>
    </div>
    )
}