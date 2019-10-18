import { ProductDTOArray, ProductDTO } from "../model/model";
import { DELETE_PRODUCT_FROM_LIST, SET_LOADING_STATUS_LIST,
     ADD_ITEM_TO_LIST, 
     GET_PRODUCTS_LIST_REQUEST,
     GET_PRODUCTS_LIST_SUCCESS,
     GET_PRODUCTS_LIST_FAILURE} from "../util/ActionTypes";
import { Action } from "redux";

export interface DeleteProductFromListAction extends Action<string> {
    type: string;
    productId: number;
}

export interface SetLoadingListAction extends Action<string> {
    type: string;
    loadingStatus: boolean;
}

export interface AddItemToListAction extends Action<string> {
    type: string;
    productDTO: ProductDTO;
}

export interface GetProductsRequestAction extends Action<string> {
    type: string;
}

export interface GetProductsSuccessAction extends Action<string> {
    type: string;
    productArray: ProductDTOArray;
}

export interface GetProductsFailAction extends Action<string> {
    type: string;
}

export type ProductListAction =  | DeleteProductFromListAction | SetLoadingListAction | 
            AddItemToListAction | GetProductsRequestAction | GetProductsSuccessAction |
            GetProductsFailAction;

export const deleteProductList = (productId: number): DeleteProductFromListAction => {
    return { 
        type: DELETE_PRODUCT_FROM_LIST, 
        productId: productId,
    };
}

export const setLoadingList = (loadingStatus: boolean): SetLoadingListAction => {
    return { 
        type: SET_LOADING_STATUS_LIST, 
        loadingStatus: loadingStatus,
    };
}

export const addItemToList = (productDTO: ProductDTO): AddItemToListAction => {
    return { 
        type: ADD_ITEM_TO_LIST, 
        productDTO: productDTO,
    };
}

export const getProductsRequest = (): GetProductsRequestAction => {
    return {
        type: GET_PRODUCTS_LIST_REQUEST,
    };
}

export const getProductsSuccess = (productArray: ProductDTOArray) => {
    return {
        type: GET_PRODUCTS_LIST_SUCCESS,
        productArray: productArray,
    };
}

export const getProductsFail = () => {
    return {
        type: GET_PRODUCTS_LIST_FAILURE,
    };
}
