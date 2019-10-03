import React from 'react';
import { Product } from '../../model/model';
import './ProductDetails.css';

export default class ProductDetails extends React.Component<Product> {
    render() {
        return <div>
            <div className="flexContainer">
                <h1 className="h1Details">Product: {this.props.name}</h1>
                <button className="productOperationsButton editButton">EDIT</button>
                <button className="productOperationsButton deleteButton">DELETE</button>
            </div>
            <div className="productDetails">
                <img src={this.props.image} className="productImage"/>
                <div className="flexContainer">
                    <p className="informativeLabel">Name</p> <p className="detailedInfo">{this.props.name}</p>
                </div>
                <div className="flexContainer">
                    <p className="informativeLabel">Category</p> <p className="detailedInfo">{this.props.category}</p>
                </div>
                <div className="flexContainer">
                    <p className="informativeLabel">Price</p> <p className="detailedInfo">{this.props.price} RON</p>
                </div>
                <div className="flexContainer">
                    <p className="informativeLabel">Description</p> <p className="detailedInfo">{this.props.description}</p>
                </div>
            </div>
        </div>
    }
}