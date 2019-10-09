import React from 'react';
import { Product } from '../../../../model/model';
import './ProductItem.scss'
import { Link } from 'react-router-dom';
import RightArrow from '../../../../images/right-arrow.png';
export { ProductItem }

const ProductItem: React.FC<Product> = (product: Product) => {

    let url: string = "/products/" + product.id;

    return (
        <div className="list-item box columns is-vcentered">
            <div className="column listItem">{product.category}</div>
            <div className="column listItem">{product.name}</div>
            <div className="column listItem">{product.price} RON</div>
            <div className="column listItem">
                <figure className="image is-128x128">
                    <img src={product.image} alt="Some placeholder"/>
                </figure>
            </div>
            <div className="column listItem">
                <Link to={url} className="button is-large is-info detailsButton">
                    
                        <figure className="image detailsImage">
                            <img src={RightArrow}/>
                        </figure>
                    
                </Link>
            </div>
        </div>
    )
}

function onClickRouting(product: Product) {

}