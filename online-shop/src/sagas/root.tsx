import productsWatcher from "./ProductListSaga";
import { all } from "@redux-saga/core/effects";
import { updateProductWatcher, fetchEdtiableProductWatcher } from "./EditableProductSaga";
import { deleteProductWatcher, fetchProductWatcher } from "./ProductDetailsSaga";
import { createOrderWatcher } from "./ShoppingCartSaga";
import { getSalesDataWatcher, getAllProductsWatcher } from "./SalesChartsSaga";
import { loginRequestWatcher } from "./LoginSaga";

export default function* rootSaga() {
    yield all([
        productsWatcher(),
        fetchEdtiableProductWatcher(),
        updateProductWatcher(),
        fetchProductWatcher(),
        deleteProductWatcher(),
        createOrderWatcher(),
        getSalesDataWatcher(),
        getAllProductsWatcher(),
        loginRequestWatcher(),
    ]);
}
