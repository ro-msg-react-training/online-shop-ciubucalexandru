import React from 'react';
import './ShoppingCartViewDumb.scss';
import { CartItem, ProductArray, Product, OrderDTO, OrderItem } from '../../../model/model';
import ShoppingCartItem from '../ShoppingCartItem/smart/ShoppingCartItemSmart';
import { STATUS_FAIL, STATUS_SUCCESS, ZERO } from '../../../util/util';
import { IShoppingCartViewProps } from '../smart/ShoppingCartViewSmart';
import { ErrrorMessageLabel } from '../../../util/ErrorMessageLabel/ErrorMessageLabel';
import { Redirect } from 'react-router';

export const ShoppingCartViewDumb: React.FC<IShoppingCartViewProps> = (props: IShoppingCartViewProps) => {
    
    const CREATE_ORDER_ERROR = "Failed to create order.";

    const cartItems: CartItem[] = mapArrayToCartItems(props.shoppingCartArray);
    const cartList = cartItems.map((cartItem) => 
        <ShoppingCartItem key={cartItem.product.id} product={cartItem.product} oldQuantity={cartItem.quantity}/>,
    );

    if (props.createOrderStatus === STATUS_FAIL) { 
        return (
            <ErrrorMessageLabel errorMessage={CREATE_ORDER_ERROR} />
        );
    } else if (props.createOrderStatus === STATUS_SUCCESS) {
        props.clearCreateOrderStatus();
        return (
            <Redirect to="/products"></Redirect>
        );
    }

    return (<div>
        <div className="flexContainer">
            <h1 className="title is-3 shoppingCartTitle">
                Shopping Cart
            </h1>
            <button className="button is-large is-info orderButton" 
                    onClick={(e) => sendOrderRequest(cartItems, (e) => props.createOrder(e))}> 
                Checkout
            </button>
        </div>
        <div className="list shoppingCart">
            {cartList}
        </div>
        <hr className="divider"></hr>
        <h4 className="subtitle is-4 totalSum">Total sum: {generateTotalSum(cartItems)} RON</h4>
        <div>
            
        </div>
    </div>
    );
}

const mapArrayToCartItems = (productArray: ProductArray) => {
    const itemsMap: Map<Product, number> = new Map();
    const cartItems: CartItem[] = [];

    productArray.products.forEach((product) => {
        const currentNumber: number | undefined = itemsMap.get(product);

        if (currentNumber === undefined) {
            itemsMap.set(product, 1);
        } else {
            itemsMap.set(product, currentNumber + 1);
        }
    });

    itemsMap.forEach((value: number, key: Product) => {
        cartItems.push(new CartItem(key, value));
    });

    return cartItems;
}

const sendOrderRequest = (cartItems: CartItem[], createOrder: (orderDTO: OrderDTO) => void): void => {

    if (cartItems.length > ZERO) {
        createOrder(generateOrder(cartItems));
    }
}

const generateOrder = (cartItems: CartItem[]): OrderDTO => {
    const orderItems: OrderItem[] = [];

    cartItems.forEach((item) => {
        orderItems.push(new OrderItem(item.product.id, item.quantity));
    });

    return new OrderDTO("doej", orderItems);
}

const generateTotalSum = (cartItems: CartItem[]): number => {
    let sum = 0;

    cartItems.forEach((item) => {
        sum += item.quantity * item.product.price
    });

    return sum;
}
