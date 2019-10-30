import { Product } from '../model/model';
import { EditableProductActions } from '../util/ActionTypes';

export class SetEditableProductAction {
    public readonly type = EditableProductActions.SET_EDITABLE_PRODUCT;
    public product: Product;

    constructor(product: Product) {
        this.product = product;
    }
}

export class ChangeProductNameAction {
    public readonly type = EditableProductActions.CHANGE_PRODUCT_NAME;
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

export class ChangeProductCategoryAction {
    public readonly type = EditableProductActions.CHANGE_PRODUCT_CATEGORY;
    public category: string;

    constructor(category: string) {
        this.category = category;
    }
}

export class ChangeProductPriceAction {
    public readonly type = EditableProductActions.CHANGE_PRODUCT_PRICE;
    public price: number;

    constructor(price: number) {
        this.price = price;
    }
}

export class ChangeProductImageAction {
    public readonly type = EditableProductActions.CHANGE_PRODUCT_IMAGE;
    public image: string;

    constructor(image: string) {
        this.image = image;
    }
}

export class ChangeProductDescriptionAction {
    public readonly type = EditableProductActions.CHANGE_PRODUCT_DESCRIPTION;
    public description: string;

    constructor(description: string) {
        this.description = description;
    }
}

export class SetLoadingStatusEditableAction {
    public readonly type = EditableProductActions.SET_LOADING_STATUS_EDITABLE;
    public loadingStatus: boolean;

    constructor(loadingStatus: boolean) {
        this.loadingStatus = loadingStatus;
    }
}

export class GetEditableProductRequestAction {
    public readonly type = EditableProductActions.GET_EDITABLE_PRODUCT_REQUEST;
    public productId: number;

    constructor(productId: number) {
        this.productId = productId;
    }
}

export class GetEditableProductSuccessAction {
    public readonly type = EditableProductActions.GET_EDITABLE_PRODUCT_SUCCESS;
    public product: Product;

    constructor(product: Product) {
        this.product = product;
    }
}

export class GetEditableProductFailAction {
    public readonly type = EditableProductActions.GET_EDITABLE_PRODUCT_FAIL;
}

export class UpdateProductRequestAction {
    public readonly type = EditableProductActions.UPDATE_PRODUCT_REQUEST;
    public product: Product;
    public requestUrl: string;
    public method: string;

    constructor(product: Product, requestUrl: string, method: string) {
        this.product = product;
        this.requestUrl = requestUrl;
        this.method = method;
    }
}

export class UpdateProductSuccessAction {
    public readonly type = EditableProductActions.UPDATE_PRODUCT_SUCCESS;
}

export class UpdateProductFailAction {
    public readonly type = EditableProductActions.UPDATE_PRODUCT_FAIL;
}

export class ClearUpdateStatusAction {
    public readonly type = EditableProductActions.CLEAR_UPDATE_STATUS;
}

export type EditableProductAction =  | ChangeProductNameAction | ChangeProductCategoryAction |
         SetLoadingStatusEditableAction |ChangeProductPriceAction | ChangeProductImageAction |
         ChangeProductDescriptionAction | GetEditableProductRequestAction | GetEditableProductSuccessAction |
         GetEditableProductFailAction | SetEditableProductAction | UpdateProductRequestAction |
         UpdateProductSuccessAction | UpdateProductFailAction | ClearUpdateStatusAction;

export const changeProductName = (name: string): ChangeProductNameAction => {
    return ({
        type: EditableProductActions.CHANGE_PRODUCT_NAME,
        name: name,
    });
}

export const changeProductCategory = (category: string): ChangeProductCategoryAction => {
    return ({
        type: EditableProductActions.CHANGE_PRODUCT_CATEGORY,
        category: category,
    });
}

export const changeProductPrice = (price: number): ChangeProductPriceAction => {
    return ({
        type: EditableProductActions.CHANGE_PRODUCT_PRICE,
        price: price,
    });
}

export const changeProductImage = (image: string): ChangeProductImageAction => {
    return ({
        type: EditableProductActions.CHANGE_PRODUCT_IMAGE,
        image: image,
    });
}

export const changeProductDescription = (description: string): ChangeProductDescriptionAction => {
    return ({
        type: EditableProductActions.CHANGE_PRODUCT_DESCRIPTION,
        description: description,
    });
}

export const setLoadingEditable = (loadingStatus: boolean): SetLoadingStatusEditableAction => {
    return ({
        type: EditableProductActions.SET_LOADING_STATUS_EDITABLE,
        loadingStatus: loadingStatus,
    });
}

export const getEditableProductRequest = (productId: number): GetEditableProductRequestAction => {
    return ({
        type: EditableProductActions.GET_EDITABLE_PRODUCT_REQUEST,
        productId: productId,
    });
}

export const getEditableProductSuccess = (product: Product): GetEditableProductSuccessAction => {
    return ({
        type: EditableProductActions.GET_EDITABLE_PRODUCT_SUCCESS,
        product: product,
    });
}

export const getEditableProductFail = (): GetEditableProductFailAction => {
    return ({
        type: EditableProductActions.GET_EDITABLE_PRODUCT_FAIL,
    });
}

export const setEditableProduct = (product: Product): SetEditableProductAction => {
    return ({
        type: EditableProductActions.SET_EDITABLE_PRODUCT,
        product: product,
    });
}

export const updateProductRequest = (
    product: Product, 
    requestUrl: string, 
    method: string,
    ): UpdateProductRequestAction => {
        
    return ({
        type: EditableProductActions.UPDATE_PRODUCT_REQUEST,
        product: product,
        requestUrl: requestUrl,
        method: method,
    });
}

export const updateProductSuccess = (): UpdateProductSuccessAction => {
    return ({
        type: EditableProductActions.UPDATE_PRODUCT_SUCCESS,
    });
}

export const updateProductFail = (): UpdateProductFailAction => {
    return ({
        type: EditableProductActions.UPDATE_PRODUCT_FAIL,
    });
}

export const clearUpdateStatus = (): ClearUpdateStatusAction => {
    return ({
        type: EditableProductActions.CLEAR_UPDATE_STATUS,
    });
}
