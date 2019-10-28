import { API_SALES, API_PRODUCTS } from "../util/API";
import { put, takeEvery } from "@redux-saga/core/effects";
import { getSalesSuccess, getSalesFail, getAllProductsSuccess, getAllProductsFail } from "../actions/SalesChartsActions";
import { GET_SALES_DATA_REQUEST, GET_ALL_PRODUCTS_REQUEST } from "../util/ActionTypes";
import { ProductDTOArray } from "../model/model";

function* getSalesData() {
    
    try {
        const response = yield fetch(API_SALES);

        if (response.status >= 200 && response.status < 300) {
            const data = yield response.json();
            yield put(getSalesSuccess(data));
        } else {
            yield put(getSalesFail());
        }
    } catch (error) {
        yield put(getSalesFail());
    }
}

function* getAllProducts() {

    try {
        const response = yield fetch(API_PRODUCTS);

        if (response.status >= 200 && response.status < 300) {
            const data = yield response.json();
            yield put(getAllProductsSuccess(new ProductDTOArray(data)));
        } else {
            yield put(getAllProductsFail());
        }
    } catch (error) {
        yield put(getAllProductsFail());
    }
}

export function* getSalesDataWatcher() {
    yield takeEvery(GET_SALES_DATA_REQUEST, getSalesData);
}

export function* getAllProductsWatcher() {
    yield takeEvery(GET_ALL_PRODUCTS_REQUEST, getAllProducts);
}