import { Product } from "../model/model";
import { EditableProductAction, ChangeProductNameAction, 
    ChangeProductCategoryAction, ChangeProductPriceAction, ChangeProductImageAction, 
    ChangeProductDescriptionAction, SetLoadingStatusEditableAction, GetEditableProductSuccessAction,
    SetEditableProductAction } from "../actions/EditableProductActions";
import { CHANGE_PRODUCT_NAME, CHANGE_PRODUCT_CATEGORY, 
    CHANGE_PRODUCT_PRICE, CHANGE_PRODUCT_IMAGE, CHANGE_PRODUCT_DESCRIPTION, 
    SET_LOADING_STATUS_EDITABLE, 
    GET_EDITABLE_PRODUCT_REQUEST,
    GET_EDITABLE_PRODUCT_SUCCESS,
    GET_EDITABLE_PRODUCT_FAIL,
    SET_EDITABLE_PRODUCT,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    CLEAR_UPDATE_STATUS} from "../util/ActionTypes";
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
        case SET_EDITABLE_PRODUCT: {
            const actualAction: SetEditableProductAction = action as SetEditableProductAction;
            return ({
                product: actualAction.product,
                isLoading: state.isLoading,
                hasFetchError: state.hasFetchError,
                updateStatus: state.updateStatus,
            });
        }
        case GET_EDITABLE_PRODUCT_REQUEST: {
            return state;
        }
        case GET_EDITABLE_PRODUCT_SUCCESS: {
            const actualAction: GetEditableProductSuccessAction = action as GetEditableProductSuccessAction;
            return ({
                product: actualAction.product,
                isLoading: false,
                hasFetchError: false,
                updateStatus: state.updateStatus,
            });
        }
        case GET_EDITABLE_PRODUCT_FAIL: {
            return ({
                product: state.product,
                isLoading: false,
                hasFetchError: true,
                updateStatus: state.updateStatus,
            })
        }
        case CHANGE_PRODUCT_NAME: {
            const actualAction: ChangeProductNameAction = action as ChangeProductNameAction;
            const newProduct: Product = generateNewProduct(state.product);
            newProduct.name = actualAction.name;
            return ({
                product: newProduct,
                isLoading: state.isLoading,
                hasFetchError: state.hasFetchError,
                updateStatus: state.updateStatus,
            })
        }
        case CHANGE_PRODUCT_CATEGORY: {
            const actualAction: ChangeProductCategoryAction = action as ChangeProductCategoryAction;
            const newProduct: Product = generateNewProduct(state.product);
            newProduct.category = actualAction.category;
            return ({
                product: newProduct,
                isLoading: state.isLoading,
                hasFetchError: state.hasFetchError,
                updateStatus: state.updateStatus,
            })
        }
        case CHANGE_PRODUCT_PRICE: {
            const actualAction: ChangeProductPriceAction = action as ChangeProductPriceAction;
            const newProduct: Product = generateNewProduct(state.product);
            newProduct.price = actualAction.price;
            return ({
                product: newProduct,
                isLoading: state.isLoading,
                hasFetchError: state.hasFetchError,
                updateStatus: state.updateStatus,
            })
        }
        case CHANGE_PRODUCT_IMAGE: {
            const actualAction: ChangeProductImageAction = action as ChangeProductImageAction;
            const newProduct: Product = generateNewProduct(state.product);
            newProduct.image = actualAction.image;
            return ({
                product: newProduct,
                isLoading: state.isLoading,
                hasFetchError: state.hasFetchError,
                updateStatus: state.updateStatus,
            })
        }
        case CHANGE_PRODUCT_DESCRIPTION: {
            const actualAction: ChangeProductDescriptionAction = action as ChangeProductDescriptionAction;
            const newProduct: Product = generateNewProduct(state.product);
            newProduct.description = actualAction.description;
            return ({
                product: newProduct,
                isLoading: state.isLoading,
                hasFetchError: state.hasFetchError,
                updateStatus: state.updateStatus,
            })
        }
        case SET_LOADING_STATUS_EDITABLE: {
            const actualAction: SetLoadingStatusEditableAction = action as SetLoadingStatusEditableAction;
            return ({
                product: state.product,
                isLoading: actualAction.loadingStatus,
                hasFetchError: state.hasFetchError,
                updateStatus: state.updateStatus,
            });
        }
        case UPDATE_PRODUCT_REQUEST: {
            return state;
        }
        case UPDATE_PRODUCT_SUCCESS: {
            return ({
                product: state.product,
                isLoading: false,
                hasFetchError: state.hasFetchError,
                updateStatus: STATUS_SUCCESS,
            });
        }
        case UPDATE_PRODUCT_FAIL: {
            return ({
                product: state.product,
                isLoading: false,
                hasFetchError: state.hasFetchError,
                updateStatus: STATUS_FAIL,
            });
        }
        case CLEAR_UPDATE_STATUS: {
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
