import React from 'react';
import './ShoppingCartViewDumb.scss';
import { CartItem } from '../../../model/model';
import ShoppingCartItem from '../ShoppingCartItem/smart/ShoppingCartItemSmart';

interface IShoppingCartViewDumbProps {
    cartItems: CartItem[];
    generateOrder: (cartItems: CartItem[]) => void;
}

export const ShoppingCartViewDumb: React.FC<IShoppingCartViewDumbProps> = (props: IShoppingCartViewDumbProps) => {
    
    const cartList = props.cartItems.map((cartItem) => 
        <ShoppingCartItem key={cartItem.product.id} product={cartItem.product} oldQuantity={cartItem.quantity}/>,
    );

    return (<div>
        <div className="flexContainer">
            <h1 className="title is-3 shoppingCartTitle">
                Shopping Cart
            </h1>
            <button className="button is-large is-info orderButton" 
                    onClick={(e) => props.generateOrder(props.cartItems)}> 
                Checkout
            </button>
        </div>
        <div className="list shoppingCart">
            {cartList}
        </div>
    </div>
    );
}
