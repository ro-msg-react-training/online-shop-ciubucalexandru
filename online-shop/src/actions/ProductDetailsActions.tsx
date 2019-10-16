import { Product } from '../model/model';
import { SET_PRODUCT, SET_LOADING_STATUS_DETAILS, OPEN_MODAL_DETAILS,
        CLOSE_MODAL_DETAILS } from '../util/ActionTypes';
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

export type ProductDetailsAction = SetProductAction | SetLoadingDetailsAction | 
        OpenModalDetailsAction | CloseModalDetailsAction;

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
