import { SalesData, ChartTab, ProductDTOArray } from "../model/model";
import { SalesChartsAction, SetLoadingChartsAction, GetSalesDataSuccessAction, 
    ChangeActiveTabAction, GetAllProductsSuccessAction } from "../actions/SalesChartsActions";
import { SET_LOADING_STATUS_CHARTS, GET_SALES_DATA_REQUEST, GET_SALES_DATA_SUCCESS, 
    GET_SALES_DATA_FAIL, CHANGE_ACTIVE_TAB, GET_ALL_PRODUCTS_REQUEST, GET_ALL_PRODUCTS_SUCCESS, 
    GET_ALL_PRODUCTS_FAIL } from "../util/ActionTypes";
import { BAR_CHART, PIE_CHART, LINE_CHART, COLUMN_CHART, DRILLDOWN_CHART, MAP_CHART } from "../util/util";

export interface SalesChartsState {
    salesData: SalesData[];
    isLoading: boolean;
    hasError: boolean;
    tabs: ChartTab[];
    productDTOArray: ProductDTOArray;
}

const initialTabs: ChartTab[] = [
    {
        name: BAR_CHART,
        active: true,
    },
    {
        name: PIE_CHART,
        active: false,
    },
    {
        name: LINE_CHART,
        active: false,
    },
    {
        name: COLUMN_CHART,
        active: false,
    },
    {
        name: DRILLDOWN_CHART,
        active: false,
    },
    {
        name: MAP_CHART,
        active: false,
    },
];

const initialState: SalesChartsState = {
    salesData: [],
    isLoading: true,
    hasError: false,
    tabs: initialTabs,
    productDTOArray: new ProductDTOArray([]),
};

export const SalesChartsReducer = (
        state: SalesChartsState = initialState, 
        action: SalesChartsAction,
    ): SalesChartsState => {

    switch (action.type) {
        case SET_LOADING_STATUS_CHARTS: {
            const actualAction: SetLoadingChartsAction = action as SetLoadingChartsAction;
            return {
                salesData: state.salesData,
                isLoading: actualAction.loadingStatus,
                hasError: state.hasError,
                tabs: state.tabs,
                productDTOArray: state.productDTOArray,
            };
        }
        case GET_SALES_DATA_REQUEST: {
            return state;
        }
        case GET_SALES_DATA_SUCCESS: {
            const actualAction: GetSalesDataSuccessAction = action as GetSalesDataSuccessAction;
            return {
                salesData: actualAction.sales,
                isLoading: false,
                hasError: false,
                tabs: state.tabs,
                productDTOArray: state.productDTOArray,
            };
        }
        case GET_SALES_DATA_FAIL: {
            return {
                salesData: state.salesData,
                isLoading: false,
                hasError: true,
                tabs: state.tabs,
                productDTOArray: state.productDTOArray,
            };
        }
        case CHANGE_ACTIVE_TAB: {
            const actualAction: ChangeActiveTabAction = action as ChangeActiveTabAction;
            return {
                salesData: state.salesData,
                isLoading: state.isLoading,
                hasError: state.hasError,
                tabs: changeActive(state.tabs, actualAction.activeTab),
                productDTOArray: state.productDTOArray,
            }
        }
        case GET_ALL_PRODUCTS_REQUEST: {
            return state;
        }
        case GET_ALL_PRODUCTS_SUCCESS: {
            const actualAction: GetAllProductsSuccessAction = action as GetAllProductsSuccessAction;
            return {
                salesData: state.salesData,
                isLoading: false,
                hasError: false,
                tabs: state.tabs,
                productDTOArray: actualAction.products,
            };
        }
        case GET_ALL_PRODUCTS_FAIL: {
            return {
                salesData: state.salesData,
                isLoading: false,
                hasError: true,
                tabs: state.tabs,
                productDTOArray: state.productDTOArray,
            };
        }
        default: {
            return state;
        }
    }
}

const changeActive = (tabs: ChartTab[], name: string): ChartTab[] => {
    const newTabs: ChartTab[] = [];

    tabs.forEach((tab) => {
        if (tab.name === name) {
            newTabs.push({ name: tab.name, active: true });
        } else {
            newTabs.push({ name: tab.name, active: false });
        }
    })

    return newTabs;
}
