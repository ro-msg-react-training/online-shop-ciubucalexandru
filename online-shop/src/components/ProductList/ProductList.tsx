import React from 'react';
import { ProductArray, Product } from '../../model/model'
import { ProductItem } from "./ProductItem/ProductItem";
import './ProductList.css'
export { ProductList };

const ProductList: React.FC<ProductArray> = (productArray: ProductArray) => {

    const productItems = productArray.products.map((product) =>
        <ProductItem key={product.id} category={product.category} name={product.name} price={product.price} 
            id={product.id} description={product.description} image={product.image}/>
    );

    const tableHeader = <tr>
        <td className="headerItem">Category</td>
        <td className="headerItem">Product Name</td>
        <td className="headerItem">Price</td>
        <td className="headerItem"></td>
    </tr>

    return <table className="productsList">
        <thead>{tableHeader}</thead>
        <tbody>{productItems}</tbody>
    </table>
}