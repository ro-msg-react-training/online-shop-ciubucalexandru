import { Product } from '../model/model';
import LoadingGif from '../images/loading.gif';
import { SET_PRODUCT, SET_LOADING_STATUS_DETAILS, OPEN_MODAL_DETAILS, CLOSE_MODAL_DETAILS } from '../util/ActionTypes';
import { ProductDetailsAction, SetProductAction, SetLoadingDetailsAction } from '../actions/ProductDetailsActions';

export interface ProductDetailsState {
    product: Product,
    isLoading: boolean,
    showModal: boolean
};

const initialState: ProductDetailsState = {
    product: new Product(0, "", "", 0.0, LoadingGif, ""),
    isLoading: true,
    showModal: false
}

export function ProductDetailsReducer(state: ProductDetailsState = initialState, action: ProductDetailsAction): ProductDetailsState {
    switch (action.type) {
        case SET_PRODUCT: {
            let actualAction: SetProductAction = action as SetProductAction;
            return {
                product: actualAction.product,
                isLoading: state.isLoading,
                showModal: state.showModal
            }
        }
        case SET_LOADING_STATUS_DETAILS: {
            let actualAction: SetLoadingDetailsAction = action as SetLoadingDetailsAction;
            return {
                product: state.product,
                isLoading: actualAction.loadingStatus,
                showModal: state.showModal
            }
        }
        case OPEN_MODAL_DETAILS: {
            let newState: boolean = true;
            return {
                product: state.product,
                isLoading: state.isLoading,
                showModal: newState
            }
        }
        case CLOSE_MODAL_DETAILS: {
            let newState: boolean = false;
            return {
                product: state.product,
                isLoading: state.isLoading,
                showModal: newState
            }
        }
        default: {
            return state;
        }
    }
}