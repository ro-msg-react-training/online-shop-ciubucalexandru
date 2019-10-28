import { Action } from "redux";
import { SalesData, ProductDTOArray } from "../model/model";
import { SET_LOADING_STATUS_CHARTS, GET_SALES_DATA_REQUEST, GET_SALES_DATA_SUCCESS, 
    GET_SALES_DATA_FAIL, CHANGE_ACTIVE_TAB, GET_ALL_PRODUCTS_REQUEST, 
    GET_ALL_PRODUCTS_SUCCESS, GET_ALL_PRODUCTS_FAIL } from "../util/ActionTypes";

export interface SetLoadingChartsAction extends Action<string> {
    type: string;
    loadingStatus: boolean;
}

export interface GetSalesDataRequestAction extends Action<string> {
    type: string;
}

export interface GetSalesDataSuccessAction extends Action<string> {
    type: string;
    sales: SalesData[];
}

export interface GetSalesDataFailAction extends Action<string> {
    type: string;
}

export interface ChangeActiveTabAction extends Action<string> {
    type: string;
    activeTab: string;
}

export interface GetAllProductsRequestAction extends Action<string> {
    type: string;
}

export interface GetAllProductsSuccessAction extends Action<string> {
    type: string;
    products: ProductDTOArray;
}

export interface GetAllProductsFailAction extends Action<string> {
    type: string;
}

export type SalesChartsAction = SetLoadingChartsAction | GetSalesDataRequestAction |
    GetSalesDataRequestAction | GetSalesDataFailAction | ChangeActiveTabAction | 
    GetAllProductsRequestAction | GetAllProductsSuccessAction | GetAllProductsFailAction;

export const setLoadingCharts = (loadingStatus: boolean): SetLoadingChartsAction => {
    return {
        type: SET_LOADING_STATUS_CHARTS,
        loadingStatus: loadingStatus,
    };
}

export const getSalesRequest = (): GetSalesDataRequestAction => {
    return {
        type: GET_SALES_DATA_REQUEST,
    };
}

export const getSalesSuccess = (salesData: SalesData[]): GetSalesDataSuccessAction => {
    return {
        type: GET_SALES_DATA_SUCCESS,
        sales: salesData,
    };
}

export const getSalesFail = (): GetSalesDataFailAction => {
    return {
        type: GET_SALES_DATA_FAIL,
    };
}

export const changeActiveTab = (newActiveTab: string): ChangeActiveTabAction => {
    return {
        type: CHANGE_ACTIVE_TAB,
        activeTab: newActiveTab,
    };
}

export const getAllProductsRequest = (): GetAllProductsRequestAction => {
    return {
        type: GET_ALL_PRODUCTS_REQUEST,
    };
}

export const getAllProductsSuccess = (products: ProductDTOArray): GetAllProductsSuccessAction => {
    return {
        type: GET_ALL_PRODUCTS_SUCCESS,
        products: products,
    };
}

export const getAllProductsFail = (): GetAllProductsFailAction => {
    return {
        type: GET_ALL_PRODUCTS_FAIL,
    }
}
