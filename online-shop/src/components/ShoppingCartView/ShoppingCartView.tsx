import React from 'react';
import { ProductArray, CartItem, Product } from '../../model/model';
import { ShoppingCartItem } from './ShoppingCartItem/ShoppingCartItem';
import './ShoppingCartView.scss';
import { Method } from '@babel/types';

export { ShoppingCartView };

class ShoppingCartView extends React.Component<ProductArray, { shoppingCart: CartItem[] }> {

    constructor(props: any) {
        super(props);

        let cartQuantities: CartItem[] = mapArrayToCart(this.props);
        this.state = ({
            shoppingCart: cartQuantities
        });
    }

    private updateCartQuantity(value: number, cartItem: CartItem) {
        cartItem.quantity = value;
        let newShoppingCart: CartItem[] = this.state.shoppingCart;

        for (let cartItemIter of newShoppingCart) {
            if (cartItemIter.product.id == cartItem.product.id) {
                cartItemIter.quantity = cartItem.quantity;
            }
        }

        this.setState({
            shoppingCart: newShoppingCart
        })

        this.props.updateArray(this.generateShoppingCartArray());
    }

    private generateShoppingCartArray(): Product[] {
        let products: Product[] = [];

        for(let cartItem of this.state.shoppingCart) {
            for (let i = 0; i < cartItem.quantity; i++) {
                products.push(cartItem.product);
            }
        }

        console.log(products);

        return products;
    }

    render() {
        const cartList = this.state.shoppingCart.map((cartItem) => 
            <ShoppingCartItem key={cartItem.product.id} product={cartItem.product} quantity={cartItem.quantity} 
            updateQuantity={(value: number) => {
                this.updateCartQuantity(value, cartItem);
            }}/>
        );

        return (<div>
            <h1 className="title is-3 shoppingCartTitle">
                Shopping Cart
            </h1>
            <div className="list shoppingCart">
                {cartList}
            </div>
        </div>
    );
    }
}

function mapArrayToCart(productArray: ProductArray): CartItem[] {
    let cartItems: number[] = [];
    let cartQuantities: CartItem[] = [];
    let arrayLength: number = productArray.products.length;

    for (let i = 0; i < arrayLength; i++) {
        let currentId = productArray.products[i].id;
        if (cartItems[currentId] == undefined) {
            cartItems[currentId] = 1;
        } else {
            cartItems[currentId]++;
        }
    }

    for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i] != 0 && cartItems[i] != undefined) {
            let cartItem: CartItem = new CartItem(findProductById(productArray, i), cartItems[i]);
            cartQuantities.push(cartItem);
        }
    }

    return cartQuantities;
}

function findProductById(productArray: ProductArray, id: number): Product {
    let finalProduct: Product = productArray.products[0];

    for (let product of productArray.products) {
        if (product.id == id) finalProduct = product;
    }

    return finalProduct;
}