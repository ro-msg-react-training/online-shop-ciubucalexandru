import React from 'react';
import { Product, ProductArray, ProductDTO, ProductDTOArray } from './model/model';
import { ProductListView } from './components/ProductListView/ProductListView';
import './App.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ProductDetails } from './components/ProductDetails/ProductDetails';
import { ShoppingCartView } from './components/ShoppingCartView/ShoppingCartView';
import { API_PRODUCTS } from './util/API';

const loremIpsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " + 
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type " +
    "and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, " +
    "remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, " +
    "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

class App extends React.Component<{}, { productArray: ProductDTOArray, shoppingCartCurrent: ProductArray }> {

    constructor(props: any) {
        super(props);
        this.state = ({
            productArray: new ProductDTOArray([new ProductDTO(1, "NAME", "CAT", 105.5), new ProductDTO(2, "NAME", "CAT", 105.5)]),
            shoppingCartCurrent: new ProductArray([]),
        })

        this.deleteItem = this.deleteItem.bind(this);
    }

    async componentDidMount() {
        await fetch(API_PRODUCTS)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    productArray: new ProductDTOArray(data)
                });
            });
    }

    private updateShoppingCart(newShoppingCart: ProductArray) {
        this.setState({
            shoppingCartCurrent: newShoppingCart
        });
    }

    private deleteItem(product: Product) {

        let temporalCart: ProductArray = new ProductArray([]);
        let temporalProducts: ProductDTOArray = new ProductDTOArray([]);

        this.state.productArray.products.forEach((item, index) => {
            if (item.id != product.id) {
                temporalProducts.products.push(item);
            }
        });

        this.state.shoppingCartCurrent.products.forEach((item, index) => {
            if (item.id != product.id) {
                temporalCart.products.push(item);
            }
        })

        this.setState({
            productArray: temporalProducts,
            shoppingCartCurrent: temporalCart
        });
    }

    private renderProductDetails(props: any, shoppingCart: ProductArray) {
        let idValue: number = props.match.params.id;

        return <ProductDetails productId={idValue} shoppingCart={this.state.shoppingCartCurrent} deleteItem={(e: Product) => this.deleteItem(e)} />
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
                                this.renderProductDetails(props, this.state.shoppingCartCurrent)
                        )}/>
                        <Route path="/products">
                            <ProductListView {...this.state.productArray}/>
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