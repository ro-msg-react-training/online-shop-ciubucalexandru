import { Product } from "../model/model";
import { EditableProductAction, SetEditableProductAction, ChangeProductNameAction, 
    ChangeProductCategoryAction, ChangeProductPriceAction, ChangeProductImageAction, 
    ChangeProductDescriptionAction, SetLoadingStatusEditable } from "../actions/EditableProductActions";
import { SET_EDITABLE_PRODUCT, CHANGE_PRODUCT_NAME, CHANGE_PRODUCT_CATEGORY, 
    CHANGE_PRODUCT_PRICE, CHANGE_PRODUCT_IMAGE, CHANGE_PRODUCT_DESCRIPTION, 
    SET_LOADING_STATUS_EDITABLE } from "../util/ActionTypes";
import { DEFAULT_ID, DEFAULT_NAME, DEFAULT_CATEGORY, DEFAULT_PRICE, 
    DEFAULT_IMAGE, DEFAULT_DESCRIPTION } from "../util/util";

export interface EditableProductState {
    product: Product,
    isLoading: boolean
};

const initialState: EditableProductState = {
    product: new Product(DEFAULT_ID, DEFAULT_NAME, DEFAULT_CATEGORY,
        DEFAULT_PRICE, DEFAULT_IMAGE, DEFAULT_DESCRIPTION),
    isLoading: true,
};

export const EditableProductReducer = (
            state: EditableProductState = initialState,
            action: EditableProductAction
        ): EditableProductState => {

    switch(action.type) {
        case SET_EDITABLE_PRODUCT: {
            const actualAction: SetEditableProductAction = action as SetEditableProductAction;
            return ({
                product: actualAction.product,
                isLoading: state.isLoading,
            });
        }
        case CHANGE_PRODUCT_NAME: {
            const actualAction: ChangeProductNameAction = action as ChangeProductNameAction;
            const newProduct: Product = generateNewProduct(state.product);
            newProduct.name = actualAction.name;
            return ({
                product: newProduct,
                isLoading: state.isLoading,
            })
        }
        case CHANGE_PRODUCT_CATEGORY: {
            const actualAction: ChangeProductCategoryAction = action as ChangeProductCategoryAction;
            const newProduct: Product = generateNewProduct(state.product);
            newProduct.category = actualAction.category;
            return ({
                product: newProduct,
                isLoading: state.isLoading,
            })
        }
        case CHANGE_PRODUCT_PRICE: {
            const actualAction: ChangeProductPriceAction = action as ChangeProductPriceAction;
            const newProduct: Product = generateNewProduct(state.product);
            newProduct.price = actualAction.price;
            return ({
                product: newProduct,
                isLoading: state.isLoading,
            })
        }
        case CHANGE_PRODUCT_IMAGE: {
            const actualAction: ChangeProductImageAction = action as ChangeProductImageAction;
            const newProduct: Product = generateNewProduct(state.product);
            newProduct.image = actualAction.image;
            return ({
                product: newProduct,
                isLoading: state.isLoading,
            })
        }
        case CHANGE_PRODUCT_DESCRIPTION: {
            const actualAction: ChangeProductDescriptionAction = action as ChangeProductDescriptionAction;
            const newProduct: Product = generateNewProduct(state.product);
            newProduct.description = actualAction.description;
            return ({
                product: newProduct,
                isLoading: state.isLoading,
            })
        }
        case SET_LOADING_STATUS_EDITABLE: {
            const actualAction: SetLoadingStatusEditable = action as SetLoadingStatusEditable;
            return ({
                product: state.product,
                isLoading: actualAction.loadingStatus,
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
        product.description
    );
}
