import { Action } from 'redux';
import { Product } from '../model/model';
import { CHANGE_PRODUCT_NAME, CHANGE_PRODUCT_CATEGORY, 
    CHANGE_PRODUCT_PRICE, CHANGE_PRODUCT_IMAGE, CHANGE_PRODUCT_DESCRIPTION, 
    SET_LOADING_STATUS_EDITABLE, 
    GET_EDITABLE_PRODUCT_REQUEST,
    GET_EDITABLE_PRODUCT_SUCCESS,
    GET_EDITABLE_PRODUCT_FAIL,
    SET_EDITABLE_PRODUCT,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    CLEAR_UPDATE_STATUS} from '../util/ActionTypes';

export interface SetEditableProductAction extends Action<string> {
    type: string;
    product: Product;
}

export interface ChangeProductNameAction extends Action<string> {
    type: string;
    name: string;
}

export interface ChangeProductCategoryAction extends Action<string> {
    type: string;
    category: string;
}

export interface ChangeProductPriceAction extends Action<string> {
    type: string;
    price: number;
}

export interface ChangeProductImageAction extends Action<string> {
    type: string;
    image: string;
}

export interface ChangeProductDescriptionAction extends Action<string> {
    type: string;
    description: string;
}

export interface SetLoadingStatusEditableAction extends Action<string> {
    type: string;
    loadingStatus: boolean;
}

export interface GetEditableProductRequestAction extends Action<string> {
    type: string;
    productId: number;
}

export interface GetEditableProductSuccessAction extends Action<string> {
    type: string;
    product: Product;
}

export interface GetEditableProductFailAction extends Action<string> {
    type: string;
}

export interface UpdateProductRequestAction extends Action<string> {
    type: string;
    product: Product;
    requestUrl: string;
    method: string;
}

export interface UpdateProductSuccessAction extends Action<string> {
    type: string;
}

export interface UpdateProductFailAction extends Action<string> {
    type: string;
}

export interface ClearUpdateStatusAction extends Action<string> {
    type: string;
}

export type EditableProductAction =  | ChangeProductNameAction | ChangeProductCategoryAction |
         SetLoadingStatusEditableAction |ChangeProductPriceAction | ChangeProductImageAction |
         ChangeProductDescriptionAction | GetEditableProductRequestAction | GetEditableProductSuccessAction |
         GetEditableProductFailAction | SetEditableProductAction | UpdateProductRequestAction |
         UpdateProductSuccessAction | UpdateProductFailAction | ClearUpdateStatusAction;

export const changeProductName = (name: string): ChangeProductNameAction => {
    return ({
        type: CHANGE_PRODUCT_NAME,
        name: name,
    });
}

export const changeProductCategory = (category: string): ChangeProductCategoryAction => {
    return ({
        type: CHANGE_PRODUCT_CATEGORY,
        category: category,
    });
}

export const changeProductPrice = (price: number): ChangeProductPriceAction => {
    return ({
        type: CHANGE_PRODUCT_PRICE,
        price: price,
    });
}

export const changeProductImage = (image: string): ChangeProductImageAction => {
    return ({
        type: CHANGE_PRODUCT_IMAGE,
        image: image,
    });
}

export const changeProductDescription = (description: string): ChangeProductDescriptionAction => {
    return ({
        type: CHANGE_PRODUCT_DESCRIPTION,
        description: description,
    });
}

export const setLoadingEditable = (loadingStatus: boolean): SetLoadingStatusEditableAction => {
    return ({
        type: SET_LOADING_STATUS_EDITABLE,
        loadingStatus: loadingStatus,
    });
}

export const getEditableProductRequest = (productId: number): GetEditableProductRequestAction => {
    return ({
        type: GET_EDITABLE_PRODUCT_REQUEST,
        productId: productId,
    });
}

export const getEditableProductSuccess = (product: Product): GetEditableProductSuccessAction => {
    return ({
        type: GET_EDITABLE_PRODUCT_SUCCESS,
        product: product,
    });
}

export const getEditableProductFail = (): GetEditableProductFailAction => {
    return ({
        type: GET_EDITABLE_PRODUCT_FAIL,
    });
}

export const setEditableProduct = (product: Product): SetEditableProductAction => {
    return ({
        type: SET_EDITABLE_PRODUCT,
        product: product,
    });
}

export const updateProductRequest = (product: Product, requestUrl: string, method: string): UpdateProductRequestAction => {
    return ({
        type: UPDATE_PRODUCT_REQUEST,
        product: product,
        requestUrl: requestUrl,
        method: method,
    });
}

export const updateProductSuccess = (): UpdateProductSuccessAction => {
    return ({
        type: UPDATE_PRODUCT_SUCCESS,
    });
}

export const updateProductFail = (): UpdateProductFailAction => {
    return ({
        type: UPDATE_PRODUCT_FAIL,
    });
}

export const clearUpdateStatus = (): ClearUpdateStatusAction => {
    return ({
        type: CLEAR_UPDATE_STATUS,
    });
}
