import { CREATE_ORDER_REQUEST } from "../util/ActionTypes";
import { takeEvery, put } from "@redux-saga/core/effects";
import { CreateOrderRequestAction, clearShoppingCart, createOrderSuccess, createOrderFail } from "../actions/ShoppingCartActions";
import { API_ORDERS } from "../util/API";

function* createOrder(action: CreateOrderRequestAction) {

    try {
        const response = yield fetch(API_ORDERS, { 
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(action.orderDTO),
        });

        if (response.status >= 200 && response.status < 300) {
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
    yield takeEvery(CREATE_ORDER_REQUEST, createOrder);
}