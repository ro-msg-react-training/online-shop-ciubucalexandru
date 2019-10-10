import React from 'react';
import { Product, ProductArray } from '../../model/model';
import './ProductDetails.scss';
import { Link } from 'react-router-dom';
import { API_PRODUCTS } from '../../util/API';

export { ProductDetails };

class ProductDetails extends React.Component<{ productId: number, shoppingCart: ProductArray, deleteItem: any }, { product: Product }> {
   
    constructor(props: any) {
        super(props);
        this.state = ({ 
            product: new Product(0, "LOADING", "LOADING", 0, "LOADING", "LOADING",)
        });

        this.deleteOnClick = this.deleteOnClick.bind(this);
    }

    async componentDidMount() {
        await fetch(API_PRODUCTS + "/" + this.props.productId)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    product: data
                });
            });
    }

    private addOnClick(product: Product, shoppingCart: ProductArray) {
        shoppingCart.products.push(product);
    }

    private async deleteOnClick() {
        await fetch(API_PRODUCTS + "/" + this.props.productId, {
            method: 'delete'});
        this.props.deleteItem(this.state.product);
    }

    render() {
        return (<div>
            <div className="flexContainer">
                <h1 className="title is-3 titleDetails">Product: {this.state.product.name}</h1>
                <a className="button is-primary is-large productOperationsButton editButton">EDIT</a>
                <Link to="/products" className="button is-info is-large productOperationsButton addButton" onClick={(e) => this.addOnClick(this.state.product, 
                    this.props.shoppingCart)}>ADD</Link>
                <Link to="/products" className="button is-danger is-large productOperationsButton deleteButton" onClick={(e) => {
                    this.deleteOnClick();
                }}>DELETE</Link>
            </div>
            <div className="box productDetails">
                <figure className="image productImage is-pulled-left">
                    <img src={this.state.product.image}/>
                </figure>
                <div className="flexContainer">
                    <p className="informativeLabel">Name</p> <p className="detailedInfo">{this.state.product.name}</p>
                </div>
                <div className="flexContainer">
                    <p className="informativeLabel">Category</p> <p className="detailedInfo">{this.state.product.category}</p>
                </div>
                <div className="flexContainer">
                    <p className="informativeLabel">Price</p> <p className="detailedInfo">{this.state.product.price} RON</p>
                </div>
                <div className="flexContainer">
                    <p className="informativeLabel">Description</p> <p className="detailedInfo">{this.state.product.description}</p>
                </div>
        </div>
    </div>
    )
    }
    
}