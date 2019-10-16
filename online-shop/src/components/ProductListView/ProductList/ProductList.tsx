import React from 'react';
import { ProductDTOArray } from '../../../model/model'
import { ProductItem } from "./ProductItem/ProductItem";
import './ProductList.scss';
export { ProductList };

const ProductList: React.FC<ProductDTOArray> = (productArray: ProductDTOArray) => {

    const productItems = productArray.products.map((product) => {
        return <ProductItem key={product.id} {...product}/>
    });

    const tableHeader = <div className="list-item columns box is-selected has-text-bold header">
        <div className="column headerItem">Category</div>
        <div className="column headerItem">Product Name</div>
        <div className="column headerItem">Price</div>
        <div className="column headerItem"></div>
    </div>

    return <div className="list is-hoverable productsList">
        {tableHeader}
        {productItems}
    </div>
}