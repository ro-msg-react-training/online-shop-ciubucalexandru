import { Product } from "../model/model";
import { ADD_PRODUCT_TO_CART, DELETE_PRODUCT_FROM_CART, MODIFY_PRODUCT_QUANTITY, CLEAR_CART, SET_LOADING_STATUS_CART, UPDATE_PRODUCT_CART } from "../util/ActionTypes";
import { Action } from "redux";

export interface DeleteProductFromCartAction extends Action<string> {
    type: string;
    product: Product;
}

export interface AddProductToCartAction extends Action<string> {
    type: string;
    product: Product;
}

export interface ModifyProductQuantityAction extends Action<string> {
    type: string;
    product: Product;
    newQuantity: number;
    oldQuantity: number;
}

export interface ClearCartAction extends Action<string> {
    type: string;
}

export interface SetLoadingCartAction extends Action<string> {
    type: string;
    loadingStatus: boolean;
}

export interface UpdateProductCartAction extends Action<string> {
    type: string;
    product: Product;
}

export type ShoppingCartAction = AddProductToCartAction | DeleteProductFromCartAction | ModifyProductQuantityAction | 
                SetLoadingCartAction | UpdateProductCartAction;

export function addProductToCart(product: Product): AddProductToCartAction {
    return { type: ADD_PRODUCT_TO_CART, product: product };
}

export function deleteProductShoppingCart(product: Product): DeleteProductFromCartAction {
    return { type: DELETE_PRODUCT_FROM_CART, product: product };
}

export function modifyProductQuantiy(product: Product, newQuantity: number, oldQuantity: number): ModifyProductQuantityAction {
    return { type: MODIFY_PRODUCT_QUANTITY, product: product, newQuantity: newQuantity, oldQuantity: oldQuantity };
}

export function clearShoppingCart(): ClearCartAction {
    return { type: CLEAR_CART };
}

export function setLoadingCart(loadingStatus: boolean): SetLoadingCartAction {
    return { type: SET_LOADING_STATUS_CART, loadingStatus: loadingStatus };
}

export function updateProductCart(product: Product): UpdateProductCartAction {
    return { type: UPDATE_PRODUCT_CART, product: product };
}