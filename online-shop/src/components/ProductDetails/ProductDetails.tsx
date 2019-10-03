import React from 'react';
import { Product, ProductArray } from '../../model/model';
import './ProductDetails.css';
export { ProductDetails };

const ProductDetails: React.FC<Product> = (product: Product) => {
    return (<div>
            <div className="flexContainer">
                <h1 className="h1Details">Product: {product.name}</h1>
                <button className="productOperationsButton editButton">EDIT</button>
                <button className="productOperationsButton deleteButton">DELETE</button>
            </div>
            <div className="productDetails">
                <img src={product.image} className="productImage"/>
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