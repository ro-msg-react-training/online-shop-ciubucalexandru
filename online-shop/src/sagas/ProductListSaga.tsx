import { API_PRODUCTS } from '../util/API';
import { ProductDTOArray } from '../model/model';
import { getProductsSuccess, getProductsFail } from '../actions/ProductListActions';
import { put, takeEvery } from '@redux-saga/core/effects';
import { GET_PRODUCTS_LIST_REQUEST } from '../util/ActionTypes';

function* fetchProducts() {

    try {
         const response = yield fetch(API_PRODUCTS);

         if (response.status >= 200 && response.status < 300) {
        
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
    yield takeEvery(GET_PRODUCTS_LIST_REQUEST, fetchProducts);
}
