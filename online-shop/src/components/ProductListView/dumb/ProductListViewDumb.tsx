import React from 'react';
import { ProductDTOArray } from '../../../model/model';
import { ProductList } from '../ProductList/ProductList';
import { Link } from 'react-router-dom';
import ShoppingCart from '../../../images/shopping-cart.png';
import './ProductListViewDumb.scss';

export const ProductListViewDumb: React.FC<ProductDTOArray> = (productDTOArray: ProductDTOArray) => {
    return (
        <div>
            <div className="flexContainer">
                <h1 className="title is-1 h1List">Products</h1>
                <Link to="/shopping-cart" 
                    className="button is-primary is-large listOperationsButton shoppingCartButton">
                    <figure className="image is-48x48">
                        <img src={ShoppingCart} alt="Shopping Cart"/>
                    </figure>
                </Link>
                <Link to="/products/add" className="button is-info is-large listOperationsButton addButton">
                    ADD
                </Link>
            </div>
            <ProductList products={productDTOArray.products}/>
        </div>
    );
}
