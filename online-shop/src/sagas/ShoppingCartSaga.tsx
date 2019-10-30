import { ShoppingCartActions } from "../util/ActionTypes";
import { takeEvery, put } from "@redux-saga/core/effects";
import { CreateOrderRequestAction, clearShoppingCart, createOrderSuccess, 
    createOrderFail } from "../actions/ShoppingCartActions";
import { API_ORDERS } from "../util/API";
import { MAX_SUCCESS_STATUS_CODE, MIN_SUCCESS_STATUS_CODE } from "../util/util";

function* createOrder(action: CreateOrderRequestAction) {

    try {
        const response = yield fetch(API_ORDERS, { 
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(action.orderDTO),
        });

        if (response.status >= MIN_SUCCESS_STATUS_CODE && response.status < MAX_SUCCESS_STATUS_CODE) {
            yield put(clearShoppingCart());
            yield put(createOrderSuccess());
        } else {
            yield put(createOrderFail());
        }
    } catch(error) {
        yield put(createOrderFail());
        return;
    }
}

export function* createOrderWatcher() {
    yield takeEvery(ShoppingCartActions.CREATE_ORDER_REQUEST, createOrder);
}
