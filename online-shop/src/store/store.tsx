import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ProductDetailsReducer, ProductDetailsState } from '../reducers/ProductDetailsReducer';
import { ProductsListReducer, ProductsListState } from '../reducers/ProductsListReducer';
import { ShoppingCartState, ShoppingCartReducer } from '../reducers/ShoppingCartReducer';
import { EditableProductState, EditableProductReducer } from '../reducers/EditableProductReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/root';
import { SalesChartsState, SalesChartsReducer } from '../reducers/SalesChartsReducers';
import { LoginReducer, LoginState } from '../reducers/LoginReducer';

const rootReducer = combineReducers({
    editableProduct: EditableProductReducer,
    login: LoginReducer,
    productDetails: ProductDetailsReducer,
    productsList: ProductsListReducer,
    salesCharts: SalesChartsReducer,
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
    login: LoginState;
    productDetails: ProductDetailsState;
    productsList: ProductsListState;
    salesCharts: SalesChartsState;
    shoppingCart: ShoppingCartState;
}
