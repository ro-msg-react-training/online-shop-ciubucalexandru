import { Product } from "../model/model";
import LoadingGif from '../images/loading.gif';
import { EditableProductAction, SetEditableProductAction, ChangeProductNameAction, ChangeProductCategoryAction, ChangeProductPriceAction, ChangeProductImageAction, ChangeProductDescriptionAction, SetLoadingStatusEditable } from "../actions/EditableProductActions";
import { SET_EDITABLE_PRODUCT, CHANGE_PRODUCT_NAME, CHANGE_PRODUCT_CATEGORY, CHANGE_PRODUCT_PRICE, CHANGE_PRODUCT_IMAGE, CHANGE_PRODUCT_DESCRIPTION, SET_LOADING_STATUS_EDITABLE } from "../util/ActionTypes";

export interface EditableProductState {
    product: Product,
    isLoading: boolean
};

const initialState: EditableProductState = {
    product: new Product(-1, "", "", 0, LoadingGif, ""),
    isLoading: true
};

export function EditableProductReducer(state: EditableProductState = initialState, action: EditableProductAction): EditableProductState {
    switch(action.type) {
        case SET_EDITABLE_PRODUCT: {
            let actualAction: SetEditableProductAction = action as SetEditableProductAction;
            return ({
                product: actualAction.product,
                isLoading: state.isLoading
            });
        }
        case CHANGE_PRODUCT_NAME: {
            let actualAction: ChangeProductNameAction = action as ChangeProductNameAction;
            let newProduct: Product = generateNewProduct(state.product);
            newProduct.name = actualAction.name;
            return ({
                product: newProduct,
                isLoading: state.isLoading
            })
        }
        case CHANGE_PRODUCT_CATEGORY: {
            let actualAction: ChangeProductCategoryAction = action as ChangeProductCategoryAction;
            let newProduct: Product = generateNewProduct(state.product);
            newProduct.category = actualAction.category;
            return ({
                product: newProduct,
                isLoading: state.isLoading
            })
        }
        case CHANGE_PRODUCT_PRICE: {
            let actualAction: ChangeProductPriceAction = action as ChangeProductPriceAction;
            let newProduct: Product = generateNewProduct(state.product);
            newProduct.price = actualAction.price;
            return ({
                product: newProduct,
                isLoading: state.isLoading
            })
        }
        case CHANGE_PRODUCT_IMAGE: {
            let actualAction: ChangeProductImageAction = action as ChangeProductImageAction;
            let newProduct: Product = generateNewProduct(state.product);
            newProduct.image = actualAction.image;
            return ({
                product: newProduct,
                isLoading: state.isLoading
            })
        }
        case CHANGE_PRODUCT_DESCRIPTION: {
            let actualAction: ChangeProductDescriptionAction = action as ChangeProductDescriptionAction;
            let newProduct: Product = generateNewProduct(state.product);
            newProduct.description = actualAction.description;
            return ({
                product: newProduct,
                isLoading: state.isLoading
            })
        }
        case SET_LOADING_STATUS_EDITABLE: {
            let actualAction: SetLoadingStatusEditable = action as SetLoadingStatusEditable;
            return ({
                product: state.product,
                isLoading: actualAction.loadingStatus
            });
        }
        default: {
            return state;
        }
    }
}

function generateNewProduct(product: Product): Product {
    return new Product(
        product.id,
        product.name,
        product.category,
        product.price,
        product.image,
        product.description
    );
}