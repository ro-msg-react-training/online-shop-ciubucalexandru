import { createStore, combineReducers } from 'redux';
import { ProductDetailsReducer, ProductDetailsState } from '../reducers/ProductDetailsReducer';
import { ProductsListReducer, ProductsListState } from '../reducers/ProductsListReducer';
import { ShoppingCartState, ShoppingCartReducer } from '../reducers/ShoppingCartReducer';
import { EditableProductState, EditableProductReducer } from '../reducers/EditableProductReducer';

const rootReducer = combineReducers({
    productDetails: ProductDetailsReducer,
    productsList: ProductsListReducer,
    shoppingCart: ShoppingCartReducer,
    editableProduct: EditableProductReducer
});

export const store = createStore(rootReducer);

export interface AppState {
    productDetails: ProductDetailsState;
    productsList: ProductsListState;
    shoppingCart: ShoppingCartState;
    editableProduct: EditableProductState;
}