import { ProductDTOArray, Product, ProductDTO } from "../model/model";
import { SET_PRODUCT_LIST, DELETE_PRODUCT_FROM_LIST, SET_LOADING_STATUS_LIST,
     ADD_ITEM_TO_LIST } from "../util/ActionTypes";
import { Action } from "redux";

export interface SetProductListAction extends Action<string> {
    type: string;
    products: ProductDTOArray;
}

export interface DeleteProductFromListAction extends Action<string> {
    type: string;
    product: Product;
}

export interface SetLoadingListAction extends Action<string> {
    type: string;
    loadingStatus: boolean;
}

export interface AddItemToListAction extends Action<string> {
    type: string;
    productDTO: ProductDTO;
}

export type ProductListAction = SetProductListAction | DeleteProductFromListAction | SetLoadingListAction | AddItemToListAction

export const setProductsList = (productDTOArray: ProductDTOArray): SetProductListAction => {
    return { 
        type: SET_PRODUCT_LIST, 
        products: productDTOArray,
    };
}

export const deleteProductList = (product: Product): DeleteProductFromListAction => {
    return { 
        type: DELETE_PRODUCT_FROM_LIST, 
        product: product,
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
