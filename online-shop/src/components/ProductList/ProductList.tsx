import React from 'react';
import { ProductArray, Product } from '../../model/model'
import { ProductItem } from "./ProductItem/ProductItem";
import './ProductList.scss'
export { ProductList };

const ProductList: React.FC<ProductArray> = (productArray: ProductArray) => {

    const productItems = productArray.products.map((product) =>
        <ProductItem key={product.id} category={product.category} name={product.name} price={product.price} 
            id={product.id} description={product.description} image={product.image}/>
    );

    const tableHeader = <a className="list-item columns box is-selected has-text-bold header">
        <div className="column headerItem">Category</div>
        <div className="column headerItem">Product Name</div>
        <div className="column headerItem">Price</div>
        <div className="column"></div>
        <div className="column headerItem">Quantity</div>
    </a>

    return <div className="list is-hoverable productsList">
        {tableHeader}
        {productItems}
    </div>
}