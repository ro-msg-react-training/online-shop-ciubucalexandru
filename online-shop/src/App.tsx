import React from 'react';
import ProductListView from './components/ProductListView/smart/ProductListViewSmart';
import './App.scss';
import { BrowserRouter, Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom';
import ShoppingCartView from './components/ShoppingCartView/smart/ShoppingCartViewSmart';
import { NavbarCustom } from './util/NavbarCustom';
import ProductDetails from './components/ProductDetails/smart/ProductDetailsSmart';
import EditableProductView from './components/EditableProductView/smart/EditableProductViewSmart';
import SalesChartsView from './components/SalesChartsView/smart/SalesChartsViewSmart';
import CarouselView from './components/CarouselView/CarouselView';

class App extends React.Component {

    private renderProductDetails(props: RouteComponentProps<{id: string}>) {
        const idValue: number = Number(props.match.params.id);
        return <ProductDetails productId={idValue}/>
    }

    private renderEditableProduct(
        props: RouteComponentProps<{id: string}>, 
        operationName: string, 
        operationMethod: string) {
            
        const idValue: number = Number(props.match.params.id);
        return <EditableProductView productId={idValue} 
            operationName={operationName} operationMethod={operationMethod} />
    }

    public render() {
        return (
            <div>
                <BrowserRouter>
                    <NavbarCustom />
                    <div>
                        <Switch>
                            <Route path="/sales">
                                <SalesChartsView />
                            </Route>
                            <Route path="/shopping-cart">
                                <ShoppingCartView />
                            </Route>
                            <Route path="/products/add" render = {(props) => (
                                this.renderEditableProduct(props, "Add", "post")
                            )} />
                            <Route path="/products/:id/edit" render = {(props) => (
                                this.renderEditableProduct(props, "Edit", "put")
                            )} />
                            <Route path="/products/:id" render = {(props) => (
                                    this.renderProductDetails(props)
                            )}/>
                            <Route path="/products">
                                <ProductListView />
                            </Route>
                            <Route exact path="/home">
                                <CarouselView ></CarouselView>
                            </Route>
                            <Route exact path="/">
                                <Redirect to="/home" />
                            </Route>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        ) 
    }
}

export default App;
