import React from 'react';
import { ProductDTOArray } from '../../../model/model'
import { ProductItem } from "./ProductItem/ProductItem";
import './ProductList.scss';
export { ProductList };

const ProductList: React.FC<ProductDTOArray> = (productArray: ProductDTOArray) => {

    const productItems = productArray.products.map((product) => {
        var url = "/products/" + product.id;
        return <ProductItem key={product.id} category={product.category} name={product.name} price={product.price} 
                id={product.id}/>
    });

    const tableHeader = <a className="list-item columns box is-selected has-text-bold header">
        <div className="column headerItem">Category</div>
        <div className="column headerItem">Product Name</div>
        <div className="column headerItem">Price</div>
        <div className="column headerItem"></div>
    </a>

    return <div className="list is-hoverable productsList">
        {tableHeader}
        {productItems}
    </div>
}