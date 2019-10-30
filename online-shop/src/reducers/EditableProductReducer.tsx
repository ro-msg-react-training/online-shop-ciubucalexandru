import { Product } from "../model/model";
import { EditableProductAction, ChangeProductNameAction, 
    ChangeProductCategoryAction, ChangeProductPriceAction, ChangeProductImageAction, 
    ChangeProductDescriptionAction, SetLoadingStatusEditableAction, GetEditableProductSuccessAction,
    SetEditableProductAction } from "../actions/EditableProductActions";
import { EditableProductActions } from "../util/ActionTypes";
import { DEFAULT_ID, DEFAULT_NAME, DEFAULT_CATEGORY, DEFAULT_PRICE, 
    DEFAULT_IMAGE, DEFAULT_DESCRIPTION, STATUS_NONE, STATUS_SUCCESS, STATUS_FAIL } from "../util/util";

export interface EditableProductState {
    hasFetchError: boolean;
    isLoading: boolean;
    product: Product;
    updateStatus: string;
};

const initialState: EditableProductState = {
    product: new Product(DEFAULT_ID, DEFAULT_NAME, DEFAULT_CATEGORY,
        DEFAULT_PRICE, DEFAULT_IMAGE, DEFAULT_DESCRIPTION),
    isLoading: true,
    hasFetchError: false,
    updateStatus: STATUS_NONE,
};

export const EditableProductReducer = (
            state: EditableProductState = initialState,
            action: EditableProductAction,
        ): EditableProductState => {

    switch(action.type) {
        case EditableProductActions.SET_EDITABLE_PRODUCT: {
            return ({
                product: action.product,
                isLoading: state.isLoading,
                hasFetchError: state.hasFetchError,
                updateStatus: state.updateStatus,
            });
        }
        case EditableProductActions.GET_EDITABLE_PRODUCT_REQUEST: {
            return state;
        }
        case EditableProductActions.GET_EDITABLE_PRODUCT_SUCCESS: {
            return ({
                product: action.product,
                isLoading: false,
                hasFetchError: false,
                updateStatus: state.updateStatus,
            });
        }
        case EditableProductActions.GET_EDITABLE_PRODUCT_FAIL: {
            return ({
                product: state.product,
                isLoading: false,
                hasFetchError: true,
                updateStatus: state.updateStatus,
            })
        }
        case EditableProductActions.CHANGE_PRODUCT_NAME: {
            const newProduct: Product = generateNewProduct(state.product);
            newProduct.name = action.name;
            return ({
                product: newProduct,
                isLoading: state.isLoading,
                hasFetchError: state.hasFetchError,
                updateStatus: state.updateStatus,
            })
        }
        case EditableProductActions.CHANGE_PRODUCT_CATEGORY: {
            const newProduct: Product = generateNewProduct(state.product);
            newProduct.category = action.category;
            return ({
                product: newProduct,
                isLoading: state.isLoading,
                hasFetchError: state.hasFetchError,
                updateStatus: state.updateStatus,
            })
        }
        case EditableProductActions.CHANGE_PRODUCT_PRICE: {
            const newProduct: Product = generateNewProduct(state.product);
            newProduct.price = Number(action.price);
            return ({
                product: newProduct,
                isLoading: state.isLoading,
                hasFetchError: state.hasFetchError,
                updateStatus: state.updateStatus,
            })
        }
        case EditableProductActions.CHANGE_PRODUCT_IMAGE: {
            const newProduct: Product = generateNewProduct(state.product);
            newProduct.image = action.image;
            return ({
                product: newProduct,
                isLoading: state.isLoading,
                hasFetchError: state.hasFetchError,
                updateStatus: state.updateStatus,
            })
        }
        case EditableProductActions.CHANGE_PRODUCT_DESCRIPTION: {
            const newProduct: Product = generateNewProduct(state.product);
            newProduct.description = action.description;
            return ({
                product: newProduct,
                isLoading: state.isLoading,
                hasFetchError: state.hasFetchError,
                updateStatus: state.updateStatus,
            })
        }
        case EditableProductActions.SET_LOADING_STATUS_EDITABLE: {
            return ({
                product: state.product,
                isLoading: action.loadingStatus,
                hasFetchError: state.hasFetchError,
                updateStatus: state.updateStatus,
            });
        }
        case EditableProductActions.UPDATE_PRODUCT_REQUEST: {
            return state;
        }
        case EditableProductActions.UPDATE_PRODUCT_SUCCESS: {
            return ({
                product: state.product,
                isLoading: false,
                hasFetchError: state.hasFetchError,
                updateStatus: STATUS_SUCCESS,
            });
        }
        case EditableProductActions.UPDATE_PRODUCT_FAIL: {
            return ({
                product: state.product,
                isLoading: false,
                hasFetchError: state.hasFetchError,
                updateStatus: STATUS_FAIL,
            });
        }
        case EditableProductActions.CLEAR_UPDATE_STATUS: {
            return ({
                product: state.product,
                isLoading: state.isLoading,
                hasFetchError: state.hasFetchError,
                updateStatus: STATUS_NONE,
            });
        }
        default: {
            return state;
        }
    }
}

const generateNewProduct = (product: Product): Product => {
    return new Product(
        product.id,
        product.name,
        product.category,
        product.price,
        product.image,
        product.description,
    );
}
