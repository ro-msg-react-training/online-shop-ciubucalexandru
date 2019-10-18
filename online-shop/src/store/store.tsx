import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ProductDetailsReducer, ProductDetailsState } from '../reducers/ProductDetailsReducer';
import { ProductsListReducer, ProductsListState } from '../reducers/ProductsListReducer';
import { ShoppingCartState, ShoppingCartReducer } from '../reducers/ShoppingCartReducer';
import { EditableProductState, EditableProductReducer } from '../reducers/EditableProductReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/root';

const rootReducer = combineReducers({
    editableProduct: EditableProductReducer,
    productDetails: ProductDetailsReducer,
    productsList: ProductsListReducer,
    shoppingCart: ShoppingCartReducer,  
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export interface AppState {
    editableProduct: EditableProductState;
    productDetails: ProductDetailsState;
    productsList: ProductsListState;
    shoppingCart: ShoppingCartState;
}
