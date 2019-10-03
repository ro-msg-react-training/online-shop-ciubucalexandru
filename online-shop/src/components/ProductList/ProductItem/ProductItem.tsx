import React from 'react';
import { Product } from '../../../model/model';
import './ProductItem.css'

export default class ProductItem extends React.Component<Product> {
    render() {
        return <tr className="">
            <td className="productData textData">{this.props.category}</td>
            <td className="productData textData">{this.props.name}</td>
            <td className="productData textData">{this.props.price} RON</td>
            <td className="productData imageData"><img src={this.props.image} width="50%" height="5%"
              alt="Some placeholder"/> </td>
        </tr>
    }
}