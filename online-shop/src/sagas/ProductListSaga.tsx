import { API_PRODUCTS } from '../util/API';
import { ProductDTOArray } from '../model/model';
import { getProductsSuccess, getProductsFail } from '../actions/ProductListActions';
import { put, takeEvery } from '@redux-saga/core/effects';
import { ProductListActions } from '../util/ActionTypes';
import { MIN_SUCCESS_STATUS_CODE, MAX_SUCCESS_STATUS_CODE } from '../util/util';

function* fetchProducts() {

    try {
         const response = yield fetch(API_PRODUCTS);

         if (response.status >= MIN_SUCCESS_STATUS_CODE && response.status < MAX_SUCCESS_STATUS_CODE) {
        
            const data = yield response.json();
            yield put(getProductsSuccess(new ProductDTOArray(data)));
        } else {
            yield put(getProductsFail());
        }
    } catch(error) {
        yield put(getProductsFail());
        return;
    } 
}

export default function* productsWatcher() {
    yield takeEvery(ProductListActions.GET_PRODUCTS_LIST_REQUEST, fetchProducts);
}
