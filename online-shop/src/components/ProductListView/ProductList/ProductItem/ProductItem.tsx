import React from 'react';
import { ProductDTO } from '../../../../model/model';
import './ProductItem.scss'
import { Link } from 'react-router-dom';
import RightArrow from '../../../../images/right-arrow.png';
export { ProductItem }

const ProductItem: React.FC<ProductDTO> = (product: ProductDTO) => {

    const url: string = "/products/" + product.id;

    return (
        <div className="list-item box columns is-vcentered">
            <div className="column listItem">{product.category}</div>
            <div className="column listItem">{product.name}</div>
            <div className="column listItem">
                {product.price.toLocaleString('en-US', {minimumFractionDigits: 2})} RON
            </div>
            <div className="column listItem">
                <Link to={url} className="button is-large is-info detailsButton">
                    
                        <figure className="image detailsImage">
                            <img src={RightArrow} alt={product.name}/>
                        </figure>
                    
                </Link>
            </div>
        </div>
    )
}
