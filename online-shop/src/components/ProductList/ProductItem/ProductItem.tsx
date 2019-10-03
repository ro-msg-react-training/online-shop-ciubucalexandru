import React from 'react';
import { Product } from '../../../model/model';
import './ProductItem.css'
export { ProductItem }

const ProductItem: React.FC<Product> = (product: Product) => {
    return (<tr className="">
        <td className="productData textData">{product.category}</td>
        <td className="productData textData">{product.name}</td>
        <td className="productData textData">{product.price} RON</td>
        <td className="productData imageData"><img src={product.image} width="50%" height="5%"
            alt="Some placeholder"/> </td>
    </tr>
    )
}