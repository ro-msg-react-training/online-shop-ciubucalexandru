import { Product } from '../model/model';
import { SET_PRODUCT, SET_LOADING_STATUS_DETAILS, OPEN_MODAL_DETAILS, 
    CLOSE_MODAL_DETAILS, 
    GET_PRODUCT_DETAILS_REQUEST,
    GET_PRODUCT_DETAILS_SUCCESS,
    GET_PRODUCT_DETAILS_FAIL,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    CLEAR_DELETE_STATUS} from '../util/ActionTypes';
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
        case SET_PRODUCT: {
            const actualAction: SetProductAction = action as SetProductAction;
            return {
                product: actualAction.product,
                isLoading: state.isLoading,
                showModal: state.showModal,
                hasFetchError: state.hasFetchError,
                deleteStatus: state.deleteStatus,
            }
        }
        case SET_LOADING_STATUS_DETAILS: {
            const actualAction: SetLoadingDetailsAction = action as SetLoadingDetailsAction;
            return {
                product: state.product,
                isLoading: actualAction.loadingStatus,
                showModal: state.showModal,
                hasFetchError: state.hasFetchError,
                deleteStatus: state.deleteStatus,
            }
        }
        case OPEN_MODAL_DETAILS: {
            const newState = true;
            return {
                product: state.product,
                isLoading: state.isLoading,
                showModal: newState,
                hasFetchError: state.hasFetchError,
                deleteStatus: state.deleteStatus,
            }
        }
        case CLOSE_MODAL_DETAILS: {
            const newState = false;
            return {
                product: state.product,
                isLoading: state.isLoading,
                showModal: newState,
                hasFetchError: state.hasFetchError,
                deleteStatus: state.deleteStatus,
            }
        }
        case GET_PRODUCT_DETAILS_REQUEST: {
            return state;
        }
        case GET_PRODUCT_DETAILS_SUCCESS: {
            const actualAction: GetProductSuccessAction = action as GetProductSuccessAction;
            return {
                product: actualAction.product,
                isLoading: false,
                showModal: state.showModal,
                hasFetchError: false,
                deleteStatus: state.deleteStatus,
            }
        }
        case GET_PRODUCT_DETAILS_FAIL: {
            return {
                product: state.product,
                isLoading: false,
                showModal: state.showModal,
                hasFetchError: true,
                deleteStatus: state.deleteStatus,
            }
        }
        case DELETE_PRODUCT_REQUEST: {
            return state;
        }
        case DELETE_PRODUCT_SUCCESS: {
            return {
                product: state.product,
                isLoading: false,
                showModal: state.showModal,
                hasFetchError: state.hasFetchError,
                deleteStatus: STATUS_SUCCESS,
            }
        }
        case DELETE_PRODUCT_FAIL: {
            return {
                product: state.product,
                isLoading: false,
                showModal: state.showModal,
                hasFetchError: state.hasFetchError,
                deleteStatus: STATUS_FAIL,
            }
        }
        case CLEAR_DELETE_STATUS: {
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
