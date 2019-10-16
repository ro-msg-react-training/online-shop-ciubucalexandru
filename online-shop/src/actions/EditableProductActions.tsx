import { Action } from 'redux';
import { Product } from '../model/model';
import { SET_EDITABLE_PRODUCT, CHANGE_PRODUCT_NAME, CHANGE_PRODUCT_CATEGORY, 
    CHANGE_PRODUCT_PRICE, CHANGE_PRODUCT_IMAGE, CHANGE_PRODUCT_DESCRIPTION, 
    SET_LOADING_STATUS_EDITABLE } from '../util/ActionTypes';

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

export interface SetLoadingStatusEditable extends Action<string> {
    type: string;
    loadingStatus: boolean;
}

export type EditableProductAction = SetEditableProductAction | ChangeProductNameAction | 
        ChangeProductCategoryAction | SetLoadingStatusEditable |ChangeProductPriceAction | 
        ChangeProductImageAction | ChangeProductDescriptionAction;

export const setEditableProduct = (product: Product): SetEditableProductAction => {
    return ({
        type: SET_EDITABLE_PRODUCT,
        product: product,
    });
}

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

export const setLoadingEditable = (loadingStatus: boolean): SetLoadingStatusEditable => {
    return ({
        type: SET_LOADING_STATUS_EDITABLE,
        loadingStatus: loadingStatus,
    });
}
