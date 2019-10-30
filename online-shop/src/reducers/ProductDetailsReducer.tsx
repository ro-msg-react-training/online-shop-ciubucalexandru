import { Product } from '../model/model';
import { ProductDetailsActions } from '../util/ActionTypes';
import { ProductDetailsAction, SetProductAction, SetLoadingDetailsAction, 
    GetProductSuccessAction } from '../actions/ProductDetailsActions';
import { DEFAULT_ID, DEFAULT_NAME, DEFAULT_CATEGORY, DEFAULT_PRICE, 
    DEFAULT_IMAGE, DEFAULT_DESCRIPTION, STATUS_NONE, STATUS_SUCCESS, STATUS_FAIL } from "../util/util";

export interface ProductDetailsState {
    product: Product,
    isLoading: boolean,
    showModal: boolean,
    hasFetchError: boolean,
    deleteStatus: string,
};

const initialState: ProductDetailsState = {
    product: new Product(DEFAULT_ID, DEFAULT_NAME, DEFAULT_CATEGORY,
        DEFAULT_PRICE, DEFAULT_IMAGE, DEFAULT_DESCRIPTION),
    isLoading: true,
    showModal: false,
    hasFetchError: false,
    deleteStatus: STATUS_NONE,
}

export const ProductDetailsReducer = (
            state: ProductDetailsState = initialState, 
            action: ProductDetailsAction,
        ): ProductDetailsState => {
            
    switch (action.type) {
        case ProductDetailsActions.SET_PRODUCT: {
            return {
                product: action.product,
                isLoading: state.isLoading,
                showModal: state.showModal,
                hasFetchError: state.hasFetchError,
                deleteStatus: state.deleteStatus,
            }
        }
        case ProductDetailsActions.SET_LOADING_STATUS_DETAILS: {
            return {
                product: state.product,
                isLoading: action.loadingStatus,
                showModal: state.showModal,
                hasFetchError: state.hasFetchError,
                deleteStatus: state.deleteStatus,
            }
        }
        case ProductDetailsActions.OPEN_MODAL_DETAILS: {
            const newState = true;
            return {
                product: state.product,
                isLoading: state.isLoading,
                showModal: newState,
                hasFetchError: state.hasFetchError,
                deleteStatus: state.deleteStatus,
            }
        }
        case ProductDetailsActions.CLOSE_MODAL_DETAILS: {
            const newState = false;
            return {
                product: state.product,
                isLoading: state.isLoading,
                showModal: newState,
                hasFetchError: state.hasFetchError,
                deleteStatus: state.deleteStatus,
            }
        }
        case ProductDetailsActions.GET_PRODUCT_DETAILS_REQUEST: {
            return state;
        }
        case ProductDetailsActions.GET_PRODUCT_DETAILS_SUCCESS: {
            return {
                product: action.product,
                isLoading: false,
                showModal: state.showModal,
                hasFetchError: false,
                deleteStatus: state.deleteStatus,
            }
        }
        case ProductDetailsActions.GET_PRODUCT_DETAILS_FAIL: {
            return {
                product: state.product,
                isLoading: false,
                showModal: state.showModal,
                hasFetchError: true,
                deleteStatus: state.deleteStatus,
            }
        }
        case ProductDetailsActions.DELETE_PRODUCT_REQUEST: {
            return state;
        }
        case ProductDetailsActions.DELETE_PRODUCT_SUCCESS: {
            return {
                product: state.product,
                isLoading: false,
                showModal: state.showModal,
                hasFetchError: state.hasFetchError,
                deleteStatus: STATUS_SUCCESS,
            }
        }
        case ProductDetailsActions.DELETE_PRODUCT_FAIL: {
            return {
                product: state.product,
                isLoading: false,
                showModal: state.showModal,
                hasFetchError: state.hasFetchError,
                deleteStatus: STATUS_FAIL,
            }
        }
        case ProductDetailsActions.CLEAR_DELETE_STATUS: {
            return {
                product: state.product,
                isLoading: state.isLoading,
                showModal: state.showModal,
                hasFetchError: state.hasFetchError,
                deleteStatus: STATUS_NONE,
            }
        }
        default: {
            return state;
        }
    }
}
