import React from 'react';
import { ProductArray } from '../../model/model'
import ProductItem from "./ProductItem/ProductItem";
import './ProductList.css'

export default class ProductList extends React.Component<ProductArray>{

    render() {
        const productItems = this.props.products.map((product) =>
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
}