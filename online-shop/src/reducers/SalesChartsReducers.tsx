import { SalesData, ChartTab, ProductDTOArray } from "../model/model";
import { SalesChartsAction, SetLoadingChartsAction, GetSalesDataSuccessAction, 
    ChangeActiveTabAction, GetAllProductsSuccessAction } from "../actions/SalesChartsActions";
import { SalesChartsActions } from "../util/ActionTypes";
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
        case SalesChartsActions.SET_LOADING_STATUS_CHARTS: {
            return {
                salesData: state.salesData,
                isLoading: action.loadingStatus,
                hasError: state.hasError,
                tabs: state.tabs,
                productDTOArray: state.productDTOArray,
            };
        }
        case SalesChartsActions.GET_SALES_DATA_REQUEST: {
            return state;
        }
        case SalesChartsActions.GET_SALES_DATA_SUCCESS: {
            return {
                salesData: action.sales,
                isLoading: false,
                hasError: false,
                tabs: state.tabs,
                productDTOArray: state.productDTOArray,
            };
        }
        case SalesChartsActions.GET_SALES_DATA_FAIL: {
            return {
                salesData: state.salesData,
                isLoading: false,
                hasError: true,
                tabs: state.tabs,
                productDTOArray: state.productDTOArray,
            };
        }
        case SalesChartsActions.CHANGE_ACTIVE_TAB: {
            return {
                salesData: state.salesData,
                isLoading: state.isLoading,
                hasError: state.hasError,
                tabs: changeActive(state.tabs, action.activeTab),
                productDTOArray: state.productDTOArray,
            }
        }
        case SalesChartsActions.GET_ALL_PRODUCTS_REQUEST: {
            return state;
        }
        case SalesChartsActions.GET_ALL_PRODUCTS_SUCCESS: {
            return {
                salesData: state.salesData,
                isLoading: false,
                hasError: false,
                tabs: state.tabs,
                productDTOArray: action.products,
            };
        }
        case SalesChartsActions.GET_ALL_PRODUCTS_FAIL: {
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
