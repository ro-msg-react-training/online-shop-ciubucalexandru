import { Product } from '../model/model';
import { ProductDetailsActions } from '../util/ActionTypes';

export class SetProductAction {
    public readonly type = ProductDetailsActions.SET_PRODUCT;
    public product: Product;

    constructor(product: Product) {
        this.product = product;
    }
}

export class SetLoadingDetailsAction {
    public readonly type = ProductDetailsActions.SET_LOADING_STATUS_DETAILS;
    public loadingStatus: boolean;

    constructor(loadingStatus: boolean) {
        this.loadingStatus = loadingStatus;
    }
}

export class OpenModalDetailsAction {
    public readonly type = ProductDetailsActions.OPEN_MODAL_DETAILS;
}

export class CloseModalDetailsAction {
    public readonly type = ProductDetailsActions.CLOSE_MODAL_DETAILS;
}

export class GetProductRequestAction {
    public readonly type = ProductDetailsActions.GET_PRODUCT_DETAILS_REQUEST;
    public productId: number;

    constructor(productId: number) {
        this.productId = productId;
    }
}

export class GetProductSuccessAction {
    public readonly type = ProductDetailsActions.GET_PRODUCT_DETAILS_SUCCESS;
    public product: Product;

    constructor(product: Product) {
        this.product = product;
    }
}

export class GetProductFailAction {
    public readonly type = ProductDetailsActions.GET_PRODUCT_DETAILS_FAIL;
}

export class DeleteProductRequestAction {
    public readonly type = ProductDetailsActions.DELETE_PRODUCT_REQUEST;
    public productId: number;

    constructor(productId: number) {
        this.productId = productId;
    }
}

export class DeleteProductSuccessAction {
    public readonly type = ProductDetailsActions.DELETE_PRODUCT_SUCCESS;
}

export class DeleteProductFailAction {
    public readonly type = ProductDetailsActions.DELETE_PRODUCT_FAIL;
}

export class ClearDeleteStatusAction {
    public readonly type = ProductDetailsActions.CLEAR_DELETE_STATUS;
}

export type ProductDetailsAction = SetProductAction | SetLoadingDetailsAction | 
        OpenModalDetailsAction | CloseModalDetailsAction | GetProductRequestAction |
        GetProductSuccessAction | GetProductFailAction | DeleteProductRequestAction |
        DeleteProductSuccessAction | DeleteProductFailAction | ClearDeleteStatusAction;

export const setProduct = (product: Product): SetProductAction => {
    return { 
        type: ProductDetailsActions.SET_PRODUCT,
        product: product, 
    };
}

export const setLoadingDetails = (loadingStatus: boolean): SetLoadingDetailsAction => {
    return { 
        type: ProductDetailsActions.SET_LOADING_STATUS_DETAILS,
        loadingStatus: loadingStatus,
    };
}

export const openModalDetails = (): OpenModalDetailsAction => {
    return { 
        type: ProductDetailsActions.OPEN_MODAL_DETAILS,
    };
}

export const closeModalDetails = (): CloseModalDetailsAction => {
    return {
        type: ProductDetailsActions.CLOSE_MODAL_DETAILS,
    };
}

export const getProductRequest = (productId: number): GetProductRequestAction => {
    return {
        type: ProductDetailsActions.GET_PRODUCT_DETAILS_REQUEST,
        productId: productId,
    };
}

export const getProductSuccess = (product: Product): GetProductSuccessAction => {
    return {
        type: ProductDetailsActions.GET_PRODUCT_DETAILS_SUCCESS,
        product: product,
    };
}

export const getProductFail = (): GetProductFailAction => {
    return {
        type: ProductDetailsActions.GET_PRODUCT_DETAILS_FAIL,
    };
}

export const deleteProductRequest = (productId: number): DeleteProductRequestAction => {
    return {
        type: ProductDetailsActions.DELETE_PRODUCT_REQUEST,
        productId: productId,
    };
}

export const deleteProductSuccess = (): DeleteProductSuccessAction => {
    return {
        type: ProductDetailsActions.DELETE_PRODUCT_SUCCESS,
    };
}
export const deleteProductFail = (): DeleteProductFailAction => {
    return {
        type: ProductDetailsActions.DELETE_PRODUCT_FAIL,
    };
}

export const clearDeleteStatus = (): ClearDeleteStatusAction => {
    return {
        type: ProductDetailsActions.CLEAR_DELETE_STATUS,
    };
}
