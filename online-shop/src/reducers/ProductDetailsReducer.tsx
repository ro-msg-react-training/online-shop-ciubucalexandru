import { Product } from '../model/model';
import LoadingGif from '../images/loading.gif';
import { SET_PRODUCT, SET_LOADING_STATUS_DETAILS, OPEN_MODAL_DETAILS, 
    CLOSE_MODAL_DETAILS } from '../util/ActionTypes';
import { ProductDetailsAction, SetProductAction, SetLoadingDetailsAction } from '../actions/ProductDetailsActions';
import { DEFAULT_ID, DEFAULT_NAME, DEFAULT_CATEGORY, DEFAULT_PRICE, 
    DEFAULT_IMAGE, DEFAULT_DESCRIPTION } from "../util/util";

export interface ProductDetailsState {
    product: Product,
    isLoading: boolean,
    showModal: boolean
};

const initialState: ProductDetailsState = {
    product: new Product(DEFAULT_ID, DEFAULT_NAME, DEFAULT_CATEGORY,
        DEFAULT_PRICE, DEFAULT_IMAGE, DEFAULT_DESCRIPTION),
    isLoading: true,
    showModal: false
}

export const ProductDetailsReducer = (
            state: ProductDetailsState = initialState, 
            action: ProductDetailsAction
        ): ProductDetailsState => {
            
    switch (action.type) {
        case SET_PRODUCT: {
            const actualAction: SetProductAction = action as SetProductAction;
            return {
                product: actualAction.product,
                isLoading: state.isLoading,
                showModal: state.showModal,
            }
        }
        case SET_LOADING_STATUS_DETAILS: {
            const actualAction: SetLoadingDetailsAction = action as SetLoadingDetailsAction;
            return {
                product: state.product,
                isLoading: actualAction.loadingStatus,
                showModal: state.showModal,
            }
        }
        case OPEN_MODAL_DETAILS: {
            const newState = true;
            return {
                product: state.product,
                isLoading: state.isLoading,
                showModal: newState,
            }
        }
        case CLOSE_MODAL_DETAILS: {
            const newState = false;
            return {
                product: state.product,
                isLoading: state.isLoading,
                showModal: newState,
            }
        }
        default: {
            return state;
        }
    }
}
