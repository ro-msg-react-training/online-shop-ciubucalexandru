import { Product, OrderDTO } from "../model/model";
import { ADD_PRODUCT_TO_CART, DELETE_PRODUCT_FROM_CART, MODIFY_PRODUCT_QUANTITY, 
    CLEAR_CART, SET_LOADING_STATUS_CART, UPDATE_PRODUCT_CART, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAIL, CLEAR_CREATE_ORDER_STATUTS } from "../util/ActionTypes";
import { Action } from "redux";

export interface DeleteProductFromCartAction extends Action<string> {
    type: string;
    productId: number;
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

export interface CreateOrderRequestAction extends Action<string> {
    type: string;
    orderDTO: OrderDTO;
}

export interface CreateOrderSuccessAction extends Action<string> {
    type: string;
}

export interface CreateOrderFailAction extends Action<string> {
    type: string;
}

export interface ClearCreateOrderStatusAction extends Action<string> {
    type: string;
}

export type ShoppingCartAction = AddProductToCartAction | DeleteProductFromCartAction | 
    ModifyProductQuantityAction | SetLoadingCartAction | UpdateProductCartAction |
    CreateOrderRequestAction | CreateOrderSuccessAction | CreateOrderFailAction |
    ClearCreateOrderStatusAction;

export const addProductToCart = (product: Product): AddProductToCartAction => {
    return { 
        type: ADD_PRODUCT_TO_CART, 
        product: product,
    };
}

export const deleteProductShoppingCart = (productId: number): DeleteProductFromCartAction => {
    return { 
        type: DELETE_PRODUCT_FROM_CART, 
        productId: productId,
    };
}

export const modifyProductQuantiy = (
        product: Product, 
        newQuantity: number, 
        oldQuantity: number,
    ): ModifyProductQuantityAction => {
        
    return { 
        type: MODIFY_PRODUCT_QUANTITY, 
        product: product, 
        newQuantity: newQuantity, 
        oldQuantity: oldQuantity,
    };
}

export const clearShoppingCart = (): ClearCartAction => {
    return { 
        type: CLEAR_CART,
    };
}

export const setLoadingCart = (loadingStatus: boolean): SetLoadingCartAction => {
    return { 
        type: SET_LOADING_STATUS_CART, 
        loadingStatus: loadingStatus,
    };
}

export const updateProductCart = (product: Product): UpdateProductCartAction => {
    return { 
        type: UPDATE_PRODUCT_CART,
        product: product,
    };
}

export const createOrderRequest = (orderDTO: OrderDTO): CreateOrderRequestAction => {
    return {
        type: CREATE_ORDER_REQUEST,
        orderDTO: orderDTO,
    };
}

export const createOrderSuccess = (): CreateOrderSuccessAction => {
    return {
        type: CREATE_ORDER_SUCCESS,
    };
}

export const createOrderFail = (): CreateOrderFailAction => {
    return {
        type: CREATE_ORDER_FAIL,
    };
}

export const clearCreateOrderStatus = (): ClearCreateOrderStatusAction => {
    return {
        type: CLEAR_CREATE_ORDER_STATUTS,
    };
}
