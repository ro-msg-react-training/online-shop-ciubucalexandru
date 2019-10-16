import React from 'react';
import { ProductArray, CartItem, Product, OrderDTO, OrderItem } from '../../../model/model';
import { AppState } from '../../../store/store';
import { ShoppingCartViewDumb } from '../dumb/ShoppingCartViewDumb';
import { connect } from 'react-redux';
import { API_ORDERS } from '../../../util/API';
import { clearShoppingCart, setLoadingCart } from '../../../actions/ShoppingCartActions';
import { LoadingIndicator } from '../../../util/LoadingIndicator/LoadingIndicator';
import { Dispatch } from 'redux';

interface IShoppingCartViewProps {
    shoppingCartArray: ProductArray;
    isLoading: boolean;
    clearShoppingCart: () => void;
    setLoadingStatus: (loadingStatus: boolean) => void;
}

class ShoppingCartViewSmart extends React.Component<IShoppingCartViewProps> {

    public componentDidMount() {
        this.props.setLoadingStatus(false);
    }

    private mapArrayToCartItems(): CartItem[] {
        const cartItems: number[] = [];
        const cartQuantities: CartItem[] = [];
        const arrayLength: number = this.props.shoppingCartArray.products.length;

        for (let i = 0; i < arrayLength; i++) {
            const currentId = this.props.shoppingCartArray.products[i].id;
            if (cartItems[currentId] === undefined) {
                cartItems[currentId] = 1;
            } else {
                cartItems[currentId]++;
            }
        }
    
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i] !== ZERO && cartItems[i] !== undefined) {
                const cartItem: CartItem = 
                    new CartItem(this.findProductById(this.props.shoppingCartArray, i), cartItems[i]);
                cartQuantities.push(cartItem);
            }
        }
    
        return cartQuantities;
    }

    private findProductById(productArray: ProductArray, id: number): Product {
        let finalProduct: Product = productArray.products[ZERO];
    
        for (const product of productArray.products) {
            if (product.id === id) finalProduct = product;
        }
    
        return finalProduct;
    }

    private generateOrder(cartItems: CartItem[]): OrderDTO {
        const orderItems: OrderItem[] = [];

        cartItems.forEach((item) => {
            orderItems.push(new OrderItem(item.product.id, item.quantity));
        });

        return new OrderDTO("doej", orderItems);
    }

    private async createOrder(cartItems: CartItem[]): Promise<void> {

        this.props.setLoadingStatus(true);

        if (this.props.shoppingCartArray.products.length > ZERO) {
            await fetch(API_ORDERS, { 
                    method: 'post',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify(this.generateOrder(cartItems)),
                });
        }

        this.props.clearShoppingCart();
        this.props.setLoadingStatus(false);
    }

    public render() {

        if (this.props.isLoading) {
            return (
                <LoadingIndicator />
            );
        }

        return (
            <ShoppingCartViewDumb cartItems={this.mapArrayToCartItems()} 
                        generateOrder={(e: CartItem[]) => this.createOrder(e)}/>
        );
    }
}

const ZERO = 0;

const mapStateToProps = (state: AppState) => {
    return {
        shoppingCartArray: state.shoppingCart.productArray,
        isLoading: state.shoppingCart.isLoading,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        clearShoppingCart: () => dispatch(clearShoppingCart()),
        setLoadingStatus: (loadingStatus: boolean) => dispatch(setLoadingCart(loadingStatus)),
    }
}

const ShoppingCart = connect(
    mapStateToProps,
    mapDispatchToProps,
) (ShoppingCartViewSmart);

export default ShoppingCart;
