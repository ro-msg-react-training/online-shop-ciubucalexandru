import React from 'react';
import ProductListView from './components/ProductListView/smart/ProductListViewSmart';
import './App.scss';
import { BrowserRouter, Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom';
import ShoppingCartView from './components/ShoppingCartView/smart/ShoppingCartViewSmart';
import { NavbarCustom } from './util/Navbar/NavbarCustom';
import ProductDetails from './components/ProductDetails/smart/ProductDetailsSmart';
import EditableProductView from './components/EditableProductView/smart/EditableProductViewSmart';
import SalesChartsView from './components/SalesChartsView/smart/SalesChartsViewSmart';
import CarouselView from './components/CarouselView/smart/CarouselViewSmart';
import LoginViewSmart from './components/LoginView/smart/LoginViewSmart';
import { connect } from 'react-redux';
import { AppState } from './store/store';
import { NO_USER } from './util/util';
import { LoggedUser } from './model/model';

interface IAppProps {
    loggedUser: LoggedUser;
}

class App extends React.Component<IAppProps> {

    private renderProductDetails(props: RouteComponentProps<{id: string}>) {

        if (this.props.loggedUser === NO_USER) {
            return <Redirect to="/login" />;
        }

        const idValue: number = Number(props.match.params.id);
        return <ProductDetails productId={idValue}/>
    }

    private renderEditableProduct(
        props: RouteComponentProps<{id: string}>, 
        operationName: string, 
        operationMethod: string) {
            
        if (this.props.loggedUser === NO_USER) {
            return <Redirect to="/login" />;
        }

        const idValue: number = Number(props.match.params.id);
        return <EditableProductView productId={idValue} 
            operationName={operationName} operationMethod={operationMethod} />
    }

    private renderIfLoggedIn(ComponentToRender: React.ComponentType) {

        if (this.props.loggedUser === NO_USER) {
            return <Redirect to="/login" />;
        }

        return <ComponentToRender />;
    }

    public render() {
        return (
            <div>
                <BrowserRouter>
                    <NavbarCustom />
                    <div>
                        <Switch>
                            <Route path="/login">
                                <LoginViewSmart />
                            </Route>
                            <Route path="/sales" render={() => this.renderIfLoggedIn(SalesChartsView)} />
                            <Route path="/shopping-cart" render={() => this.renderIfLoggedIn(ShoppingCartView)} />
                            <Route path="/products/add" render = {(props) => (
                                this.renderEditableProduct(props, "Add", "post")
                            )} />
                            <Route path="/products/:id/edit" render = {(props) => (
                                this.renderEditableProduct(props, "Edit", "put")
                            )} />
                            <Route path="/products/:id" render = {(props) => (
                                    this.renderProductDetails(props)
                            )}/>
                            <Route path="/products" render={() => this.renderIfLoggedIn(ProductListView)} />
                            <Route path="/home" render={() => this.renderIfLoggedIn(CarouselView)} />
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

const mapStateToProps = (state: AppState) => {
    return {
        loggedUser: state.login.loggedUser,
    };
};

const AppStateful = connect(
    mapStateToProps,
    {},
) (App);

export default AppStateful;
