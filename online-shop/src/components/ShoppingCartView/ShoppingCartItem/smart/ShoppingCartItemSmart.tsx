import React from 'react';
import { Product } from '../../../../model/model';
import { ShoppingCartItemDumb } from '../dumb/ShoppingCartItemDumb';
import { AppState } from '../../../../store/store';
import { modifyProductQuantiy, deleteProductShoppingCart } from '../../../../actions/ShoppingCartActions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

interface IShoppingCartItemProps {
    product: Product;
    oldQuantity: number;
    modifyProductQuantity: (product: Product, newQuantity: number, oldQuantity: number) => void;
    deleteItemFromCart: (product: Product) => void;
}

class ShoppingCartItemSmart extends React.Component<IShoppingCartItemProps> {

    public render() {
        return (
            <ShoppingCartItemDumb product={this.props.product} quantity={this.props.oldQuantity} 
                    updateItemQuantity={(e) => 
                        this.props.modifyProductQuantity(this.props.product, e, this.props.oldQuantity)} 
                    deleteItemFromCart={() => this.props.deleteItemFromCart(this.props.product)}/>
        )
    }
}

interface IProductProp {
    product: Product;
    oldQuantity: number;
}

const mapStateToProps = (state: AppState, ownState: IProductProp) => {
    return {
        product: ownState.product,
        oldQuantity: ownState.oldQuantity,
    };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        modifyProductQuantity: (product: Product, newQuantity: number, oldQuantity: number) =>  
                        dispatch(modifyProductQuantiy(product, newQuantity, oldQuantity)),
        deleteItemFromCart: (product: Product) => dispatch(deleteProductShoppingCart(product)),
    };
}

const ShoppingCartItem = connect(
    mapStateToProps,
    mapDispatchToProps,
) (ShoppingCartItemSmart);

export default ShoppingCartItem;
