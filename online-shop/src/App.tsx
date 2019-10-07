import React from 'react';
import { Product, ProductArray } from './model/model';
import { ProductList } from './components/ProductList/ProductList'
import { ProductDetails } from './components/ProductDetails/ProductDetails';
import './App.scss';
import ShoppingCart from './images/shopping-cart.png';
import Phone from './images/phone.jpg';

const App: React.FC = () => {
    let product1 = new Product(1, 'First product', 'Best category', 100, Phone, 'looooong description');
    let product2 = new Product(2, 'Second product', 'Worst category', 200, Phone, 'looooong description no. 5');
    let product3 = new Product(3, 'Third product', 'Worst category', 300, Phone, 'looooong description no. 5');
    let product4 = new Product(4, 'Fourth product', 'Worst category', 400, Phone, 'looooong description no. 5');
    let product5 = new Product(5, 'Fifth product', 'Worst category', 500, Phone, 'looooong description no. 5');
    let product6 = new Product(6, 'Sixth product', 'Worst category', 600, Phone, 'looooong description no. 5');
    let productArray = new ProductArray([product1, product2, product3, product4, product5, product6]);

    let choice = 0;
    let loremIpsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    
    if (choice === 1) {
        return <div>
            <h1 className="title is-1 h1List">Products</h1>
            <a className="button is-primary is-large listOperationsButton shoppingCartButton">
                <figure className="image is-48x48">
                    <img src={ShoppingCart}/>
                </figure>
            </a>
            <a className="button is-info is-large listOperationsButton addButton">
                ADD
            </a>
            <ProductList products = {productArray.products} />
        </div> 
    } else {
        return <div>
            <ProductDetails key={product1.id} category={product1.category} name={product1.name} price={product1.price} 
                id={product1.id} description={loremIpsum} image={Phone}/>
        </div>
    }
}

export default App;
