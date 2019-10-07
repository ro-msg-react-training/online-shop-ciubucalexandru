import React from 'react';
import { Product } from '../../../model/model';
import './ProductItem.scss'
export { ProductItem }

const ProductItem: React.FC<Product> = (product: Product) => {
    return (
        <a className="list-item box columns is-vcentered">
            <div className="column listItem">{product.category}</div>
            <div className="column listItem">{product.name}</div>
            <div className="column listItem">{product.price} RON</div>
            <div className="column listItem">
                <figure className="image is-128x128">
                    <img src={product.image} alt="Some placeholder"/>
                </figure>
            </div>
            <div className="column listItem">
                <div className="control">
                    <input className="input has-text-centered" type="number" placeholder="0" min="0"/>
                </div>
            </div>
        </a>
    )
}