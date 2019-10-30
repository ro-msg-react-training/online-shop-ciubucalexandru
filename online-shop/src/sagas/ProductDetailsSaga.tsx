import { GetProductRequestAction, getProductSuccess, DeleteProductRequestAction, deleteProductSuccess,
    deleteProductFail, getProductFail } from "../actions/ProductDetailsActions";
import { API_PRODUCTS } from "../util/API";
import { put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { deleteProductList } from "../actions/ProductListActions";
import { ProductDetailsActions } from "../util/ActionTypes";
import { deleteProductShoppingCart } from "../actions/ShoppingCartActions";
import { MAX_SUCCESS_STATUS_CODE, MIN_SUCCESS_STATUS_CODE } from "../util/util";

function* fetchProduct(action: GetProductRequestAction) {

    try {
        const response = yield fetch(API_PRODUCTS + "/" + action.productId);

        if (response.status >= MIN_SUCCESS_STATUS_CODE && response.status < MAX_SUCCESS_STATUS_CODE) {
            const data = yield response.json();
            yield put(getProductSuccess(data));
        } else {
            yield put(getProductFail());
        }
    } catch(error) {
        yield put(getProductFail());
        return;
    }
}

function* deleteProduct(action: DeleteProductRequestAction) {
    
    try {
        const response: Response = yield fetch(API_PRODUCTS + "/" + action.productId, {
            method:"delete",
        });
    
        if (response.status >= MIN_SUCCESS_STATUS_CODE && response.status < MAX_SUCCESS_STATUS_CODE) {
            yield put(deleteProductSuccess());
            yield put(deleteProductList(action.productId));
            yield put(deleteProductShoppingCart(action.productId));
        } else {
            yield put(deleteProductFail());
        }
    } catch(error) {
        yield put(deleteProductFail());
        return; 
    }
}

export function* fetchProductWatcher() {
    yield takeEvery(ProductDetailsActions.GET_PRODUCT_DETAILS_REQUEST, fetchProduct);
}

export function* deleteProductWatcher() {
    yield takeLatest(ProductDetailsActions.DELETE_PRODUCT_REQUEST, deleteProduct);
}
