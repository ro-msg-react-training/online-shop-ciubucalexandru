import { Product } from '../model/model';
import { SET_PRODUCT, SET_LOADING_STATUS_DETAILS, OPEN_MODAL_DETAILS,
        CLOSE_MODAL_DETAILS, 
        GET_PRODUCT_DETAILS_REQUEST,
        GET_PRODUCT_DETAILS_SUCCESS,
        GET_PRODUCT_DETAILS_FAIL,
        DELETE_PRODUCT_REQUEST,
        DELETE_PRODUCT_SUCCESS,
        DELETE_PRODUCT_FAIL,
        CLEAR_DELETE_STATUS} from '../util/ActionTypes';
import { Action } from 'redux';

export interface SetProductAction extends Action<string> {
    type: string;
    product: Product;
}

export interface SetLoadingDetailsAction extends Action<string> {
    type: string;
    loadingStatus: boolean;
}

export interface OpenModalDetailsAction extends Action<string> {
    type: string;
}

export interface CloseModalDetailsAction extends Action<string> {
    type: string;
}

export interface GetProductRequestAction extends Action<string> {
    type: string;
    productId: number;
}

export interface GetProductSuccessAction extends Action<string> {
    type: string;
    product: Product;
}

export interface GetProductFailAction extends Action<string> {
    type: string;
}

export interface DeleteProductRequestAction extends Action<string> {
    type: string;
    productId: number;
}

export interface DeleteProductSuccessAction extends Action<string> {
    type: string;
}

export interface DeleteProductFailAction extends Action<string> {
    type: string;
}

export interface ClearDeleteStatusAction extends Action<string> {
    type: string;
}

export type ProductDetailsAction = SetProductAction | SetLoadingDetailsAction | 
        OpenModalDetailsAction | CloseModalDetailsAction | GetProductRequestAction |
        GetProductSuccessAction | GetProductFailAction | DeleteProductRequestAction |
        DeleteProductSuccessAction | DeleteProductFailAction | ClearDeleteStatusAction;

export const setProduct = (product: Product): SetProductAction => {
    return { 
        type: SET_PRODUCT,
        product: product, 
    };
}

export const setLoadingDetails = (loadingStatus: boolean): SetLoadingDetailsAction => {
    return { 
        type: SET_LOADING_STATUS_DETAILS,
        loadingStatus: loadingStatus,
    };
}

export const openModalDetails = (): OpenModalDetailsAction => {
    return { 
        type: OPEN_MODAL_DETAILS,
    };
}

export const closeModalDetails = (): CloseModalDetailsAction => {
    return {
        type: CLOSE_MODAL_DETAILS,
    };
}

export const getProductRequest = (productId: number): GetProductRequestAction => {
    return {
        type: GET_PRODUCT_DETAILS_REQUEST,
        productId: productId,
    };
}

export const getProductSuccess = (product: Product): GetProductSuccessAction => {
    return {
        type: GET_PRODUCT_DETAILS_SUCCESS,
        product: product,
    };
}

export const getProductFail = (): GetProductFailAction => {
    return {
        type: GET_PRODUCT_DETAILS_FAIL,
    };
}

export const deleteProductRequest = (productId: number): DeleteProductRequestAction => {
    return {
        type: DELETE_PRODUCT_REQUEST,
        productId: productId,
    };
}

export const deleteProductSuccess = (): DeleteProductSuccessAction => {
    return {
        type: DELETE_PRODUCT_SUCCESS,
    };
}
export const deleteProductFail = (): DeleteProductFailAction => {
    return {
        type: DELETE_PRODUCT_FAIL,
    };
}

export const clearDeleteStatus = (): ClearDeleteStatusAction => {
    return {
        type: CLEAR_DELETE_STATUS,
    };
}
