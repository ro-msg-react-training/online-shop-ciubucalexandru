import React from 'react';
import ShoppingCart from '../../images/shopping-cart.png';
import { ProductList } from './ProductList/ProductList';
import { ProductArray } from '../../model/model';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import './ProductListView.scss';

const ProductListView: React.FC<ProductArray> = (productArray: ProductArray) => {
    return (
        <div>
             <div className="flexContainer">
                <h1 className="title is-1 h1List">Products</h1>
                <Link to="/shopping-cart" className="button is-primary is-large listOperationsButton shoppingCartButton">
                    <figure className="image is-48x48">
                        <img src={ShoppingCart}/>
                    </figure>
                </Link>
                <a className="button is-info is-large listOperationsButton addButton">
                    ADD
            </a>
            </div>
            <ProductList products = {productArray.products} updateArray={(e) => productArray.updateArray(e)}/>
        </div>
    );
};
 
export { ProductListView };