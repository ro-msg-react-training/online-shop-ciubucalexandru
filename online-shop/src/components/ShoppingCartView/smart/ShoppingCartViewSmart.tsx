import React from 'react';
import { ProductArray, CartItem, Product, OrderDTO, OrderItem } from '../../../model/model';
import { AppState } from '../../../store/store';
import { ShoppingCartViewDumb } from '../dumb/ShoppingCartViewDumb';
import { connect } from 'react-redux';
import { setLoadingCart, createOrderRequest, clearCreateOrderStatus } from '../../../actions/ShoppingCartActions';
import { LoadingIndicator } from '../../../util/LoadingIndicator/LoadingIndicator';
import { Dispatch } from 'redux';
import { ZERO, STATUS_FAIL, STATUS_SUCCESS } from '../../../util/util';
import { ErrrorMessageLabel } from '../../../util/ErrorMessageLabel/ErrorMessageLabel';
import { Redirect } from 'react-router';

interface IShoppingCartViewProps {
    shoppingCartArray: ProductArray;
    isLoading: boolean;
    createOrderStatus: string;
    createOrder: (orderDTO: OrderDTO) => void;
    setLoadingStatus: (loadingStatus: boolean) => void;
    clearCreateOrderStatus: () => void;
}

class ShoppingCartViewSmart extends React.Component<IShoppingCartViewProps> {

    public componentDidMount() {
        this.props.setLoadingStatus(false);
        this.props.clearCreateOrderStatus();
    }

    private mapArrayToCartItems(): CartItem[] {

        const itemsMap: Map<Product, number> = new Map();
        const cartItems2: CartItem[] = [];

        this.props.shoppingCartArray.products.forEach((product) => {
            const currentNumber: number | undefined = itemsMap.get(product);

            if (currentNumber === undefined) {
                itemsMap.set(product, 1);
            } else {
                itemsMap.set(product, currentNumber + 1);
            }
        });

        itemsMap.forEach((value: number, key: Product) => {
            cartItems2.push(new CartItem(key, value));
        });

        return cartItems2;
    }

    private generateOrder(cartItems: CartItem[]): OrderDTO {
        const orderItems: OrderItem[] = [];

        cartItems.forEach((item) => {
            orderItems.push(new OrderItem(item.product.id, item.quantity));
        });

        return new OrderDTO("doej", orderItems);
    }

    private createOrder(cartItems: CartItem[]): void {

        if (cartItems.length > ZERO) {
            this.props.createOrder(this.generateOrder(cartItems));
        }
    }

    public render() {

        if (this.props.isLoading) {
            return (
                <LoadingIndicator />
            );
        } else if (this.props.createOrderStatus === STATUS_FAIL) { 
            return (
                <ErrrorMessageLabel errorMessage={CREATE_ORDER_ERROR} />
            );
        } else if (this.props.createOrderStatus === STATUS_SUCCESS) {
            this.props.clearCreateOrderStatus();
            return (
                <Redirect to="/products"></Redirect>
            );
        }

        return (
            <ShoppingCartViewDumb cartItems={this.mapArrayToCartItems()} 
                        generateOrder={(e: CartItem[]) => this.createOrder(e)}/>
        );
    }
}

const CREATE_ORDER_ERROR = "Failed to create order.";

const mapStateToProps = (state: AppState) => {
    return {
        shoppingCartArray: state.shoppingCart.productArray,
        isLoading: state.shoppingCart.isLoading,
        createOrderStatus: state.shoppingCart.createOrderStatus,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        createOrder: (orderDTO: OrderDTO) => dispatch(createOrderRequest(orderDTO)),
        setLoadingStatus: (loadingStatus: boolean) => dispatch(setLoadingCart(loadingStatus)),
        clearCreateOrderStatus: () => dispatch(clearCreateOrderStatus()),
    }
}

const ShoppingCart = connect(
    mapStateToProps,
    mapDispatchToProps,
) (ShoppingCartViewSmart);

export default ShoppingCart;
