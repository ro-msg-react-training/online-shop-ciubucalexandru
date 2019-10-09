import React, { Props } from 'react';
import { Product, ProductArray } from './model/model';
import { ProductListView } from './components/ProductListView/ProductListView';
import './App.scss';
import Phone from './images/phone.jpg';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ProductDetails } from './components/ProductDetails/ProductDetails';
import { ShoppingCartView } from './components/ShoppingCartView/ShoppingCartView';

const loremIpsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " + 
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type " +
    "and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, " +
    "remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, " +
    "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

var shoppingCart: ProductArray = new ProductArray([]);
var initializedArray: ProductArray = initializeProducts();

class App extends React.Component<{}, { productArray: ProductArray, shoppingCartCurrent: ProductArray }> {
    
    constructor(props: any) {
        super(props);
        this.state = ({
            productArray: initializedArray,
            shoppingCartCurrent: shoppingCart
        })
    }

    private updateShoppingCart(newShoppingCart: ProductArray) {
        this.setState({
            shoppingCartCurrent: newShoppingCart
        });
    }

    private renderProductDetails(props: any, initializedArray: ProductArray) {
        let idValue: number = props.match.params.id;
        let product: Product = this.getProductById(idValue, initializedArray);
    
        return <ProductDetails product={product} shoppingCart={this.state.shoppingCartCurrent} />
    }
    
    private getProductById(idVal: number, productArray: ProductArray): Product {
        let foundProduct: Product = new Product(0, '', '', 0, Phone, '');
    
        productArray.products.forEach((product) => {
            if (product.id == idVal) foundProduct = product;
        })
    
        return foundProduct;
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/shopping-cart">
                            <ShoppingCartView products={this.state.shoppingCartCurrent.products} updateArray={ (e: Product[]) => {
                                this.updateShoppingCart(new ProductArray(e));
                            } }/>
                        </Route>
                        <Route path="/products/:id" render = {(props) => (
                                this.renderProductDetails(props, this.state.productArray)
                        )}/>
                        <Route path="/products">
                            <ProductListView products={this.state.productArray.products} updateArray = {(e) => this.state.productArray.updateArray(e)}/>
                        </Route>
                        <Route exact path="/">
                            <Redirect to="/products"/>
                        </Route>
    
                    </Switch>
                </div>
            </BrowserRouter>
        ) 
    }
}

export default App;

function initializeProducts(): ProductArray {
    let product1 = new Product(1, 'First product', 'Best category', 100, Phone, loremIpsum);
    let product2 = new Product(2, 'Second product', 'Worst category', 200, Phone, loremIpsum);
    let product3 = new Product(3, 'Third product', 'Worst category', 300, Phone, loremIpsum);
    let product4 = new Product(4, 'Fourth product', 'Worst category', 400, Phone, loremIpsum);
    let product5 = new Product(5, 'Fifth product', 'Worst category', 500, Phone, loremIpsum);
    let product6 = new Product(6, 'Sixth product', 'Worst category', 600, Phone, loremIpsum);
    return new ProductArray([product1, product2, product3, product4, product5, product6]);
}