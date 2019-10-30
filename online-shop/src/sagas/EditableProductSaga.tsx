import { API_PRODUCTS } from '../util/API';
import { put, takeEvery, takeLatest } from '@redux-saga/core/effects';
import { GetEditableProductRequestAction, getEditableProductSuccess, getEditableProductFail, 
    UpdateProductRequestAction, updateProductSuccess, updateProductFail, 
    setLoadingEditable } from '../actions/EditableProductActions';
import { EditableProductActions } from '../util/ActionTypes';
import { addItemToList } from '../actions/ProductListActions';
import { updateProductCart } from '../actions/ShoppingCartActions';
import { setProduct } from '../actions/ProductDetailsActions';
import { MIN_SUCCESS_STATUS_CODE, MAX_SUCCESS_STATUS_CODE } from '../util/util';

function* fetchProduct(action: GetEditableProductRequestAction) {

    try {
        const response = yield fetch(API_PRODUCTS + "/" + action.productId);

        if (response.status >= MIN_SUCCESS_STATUS_CODE && response.status < MAX_SUCCESS_STATUS_CODE) {
            const data = yield response.json();
            yield put(getEditableProductSuccess(data));
        } else {
            yield put(getEditableProductFail()); 
        }
    } catch(error) {
        yield put(getEditableProductFail()); 
        return;
    } 

    yield put(setLoadingEditable(false));
}

function* updateProduct(action: UpdateProductRequestAction) {

    try {
        const response = yield fetch(action.requestUrl, {
                        method: action.method,
                        headers: {'Content-Type':'application/json'},
                        body: JSON.stringify(action.product),
                    });
                    
        if (response.status >= MIN_SUCCESS_STATUS_CODE && response.status < MAX_SUCCESS_STATUS_CODE 
            && action.method.toLowerCase() === "post") {

            const data = yield response.json();
            yield put(addItemToList(data));
            yield put(updateProductSuccess());
        } else if(response.status >= MIN_SUCCESS_STATUS_CODE && response.status < MAX_SUCCESS_STATUS_CODE) {
            
            yield put(setProduct(action.product));
            yield put(updateProductCart(action.product));
            yield put(addItemToList(action.product));
            yield put(updateProductSuccess());
        } else {
            yield put(updateProductFail());
        }
    } catch(error) {
        yield put(updateProductFail());
        return;
    }
}

export function* fetchEdtiableProductWatcher() {
    yield takeEvery(EditableProductActions.GET_EDITABLE_PRODUCT_REQUEST, fetchProduct);
}

export function* updateProductWatcher() {
    yield takeLatest(EditableProductActions.UPDATE_PRODUCT_REQUEST, updateProduct);
}
