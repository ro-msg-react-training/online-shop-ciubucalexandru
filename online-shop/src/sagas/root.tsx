import productsWatcher from "./ProductListSaga";
import { all } from "@redux-saga/core/effects";
import { updateProductWatcher, fetchEdtiableProductWatcher } from "./EditableProductSaga";
import { deleteProductWatcher, fetchProductWatcher } from "./ProductDetailsSaga";
import { createOrderWatcher } from "./ShoppingCartSaga";

export default function* rootSaga() {
    yield all([
        productsWatcher(),
        fetchEdtiableProductWatcher(),
        updateProductWatcher(),
        fetchProductWatcher(),
        deleteProductWatcher(),
        createOrderWatcher(),
    ]);
}