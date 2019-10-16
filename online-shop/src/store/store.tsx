import { createStore, combineReducers } from 'redux';
import { ProductDetailsReducer, ProductDetailsState } from '../reducers/ProductDetailsReducer';
import { ProductsListReducer, ProductsListState } from '../reducers/ProductsListReducer';
import { ShoppingCartState, ShoppingCartReducer } from '../reducers/ShoppingCartReducer';
import { EditableProductState, EditableProductReducer } from '../reducers/EditableProductReducer';

const rootReducer = combineReducers({
    editableProduct: EditableProductReducer,
    productDetails: ProductDetailsReducer,
    productsList: ProductsListReducer,
    shoppingCart: ShoppingCartReducer,  
});

export const store = createStore(rootReducer);

export interface AppState {
    editableProduct: EditableProductState;
    productDetails: ProductDetailsState;
    productsList: ProductsListState;
    shoppingCart: ShoppingCartState;
}
