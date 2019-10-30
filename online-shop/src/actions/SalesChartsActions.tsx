import { Action } from "redux";
import { SalesData, ProductDTOArray } from "../model/model";
import { SalesChartsActions } from "../util/ActionTypes";

export class SetLoadingChartsAction {
    readonly type = SalesChartsActions.SET_LOADING_STATUS_CHARTS;
    public loadingStatus: boolean;

    constructor(loadingStatus: boolean) {
        this.loadingStatus = loadingStatus;
    }
}

export class GetSalesDataRequestAction {
    readonly type = SalesChartsActions.GET_SALES_DATA_REQUEST;
}

export class GetSalesDataSuccessAction {
    readonly type = SalesChartsActions.GET_SALES_DATA_SUCCESS;
    public sales: SalesData[];

    constructor(sales: SalesData[]) {
        this.sales = sales;
    }
}

export class GetSalesDataFailAction {
    readonly type = SalesChartsActions.GET_SALES_DATA_FAIL;
}

export class ChangeActiveTabAction {
    readonly type = SalesChartsActions.CHANGE_ACTIVE_TAB;
    public activeTab: string;
    
    constructor(activeTab: string) {
        this.activeTab = activeTab;
    }
}

export class GetAllProductsRequestAction {
    readonly type = SalesChartsActions.GET_ALL_PRODUCTS_REQUEST;
}

export class GetAllProductsSuccessAction {
    readonly type = SalesChartsActions.GET_ALL_PRODUCTS_SUCCESS;
    public products: ProductDTOArray;

    constructor(products: ProductDTOArray) {
        this.products = products;
    }
}

export class GetAllProductsFailAction {
    readonly type = SalesChartsActions.GET_ALL_PRODUCTS_FAIL;
}

export type SalesChartsAction = SetLoadingChartsAction | GetSalesDataRequestAction |
    GetSalesDataRequestAction | GetSalesDataFailAction | ChangeActiveTabAction | 
    GetAllProductsRequestAction | GetAllProductsSuccessAction | GetAllProductsFailAction |
    GetSalesDataSuccessAction;

export const setLoadingCharts = (loadingStatus: boolean): SetLoadingChartsAction => {
    return {
        type: SalesChartsActions.SET_LOADING_STATUS_CHARTS,
        loadingStatus: loadingStatus,
    };
}

export const getSalesRequest = (): GetSalesDataRequestAction => {
    return {
        type: SalesChartsActions.GET_SALES_DATA_REQUEST,
    };
}

export const getSalesSuccess = (salesData: SalesData[]): GetSalesDataSuccessAction => {
    return {
        type: SalesChartsActions.GET_SALES_DATA_SUCCESS,
        sales: salesData,
    };
}

export const getSalesFail = (): GetSalesDataFailAction => {
    return {
        type: SalesChartsActions.GET_SALES_DATA_FAIL,
    };
}

export const changeActiveTab = (newActiveTab: string): ChangeActiveTabAction => {
    return {
        type: SalesChartsActions.CHANGE_ACTIVE_TAB,
        activeTab: newActiveTab,
    };
}

export const getAllProductsRequest = (): GetAllProductsRequestAction => {
    return {
        type: SalesChartsActions.GET_ALL_PRODUCTS_REQUEST,
    };
}

export const getAllProductsSuccess = (products: ProductDTOArray): GetAllProductsSuccessAction => {
    return {
        type: SalesChartsActions.GET_ALL_PRODUCTS_SUCCESS,
        products: products,
    };
}

export const getAllProductsFail = (): GetAllProductsFailAction => {
    return {
        type: SalesChartsActions.GET_ALL_PRODUCTS_FAIL,
    }
}
