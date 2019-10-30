import { ProductDTOArray, ProductDTO } from "../model/model";
import { ProductListActions } from "../util/ActionTypes";

export class DeleteProductFromListAction {
    readonly type = ProductListActions.DELETE_PRODUCT_FROM_LIST;
    public productId: number;

    constructor(productId: number) {
        this.productId = productId;
    }
}

export class SetLoadingListAction {
    readonly type = ProductListActions.SET_LOADING_STATUS_LIST;
    public loadingStatus: boolean;

    constructor(loadingStatus: boolean) {
        this.loadingStatus = loadingStatus;
    }
}

export class AddItemToListAction {
    readonly type = ProductListActions.ADD_ITEM_TO_LIST;
    public productDTO: ProductDTO;

    constructor(productDTO: ProductDTO) {
        this.productDTO = productDTO;
    }
}

export class GetProductsRequestAction {
    readonly type = ProductListActions.GET_PRODUCTS_LIST_REQUEST;
}

export class GetProductsSuccessAction {
    readonly type = ProductListActions.GET_PRODUCTS_LIST_SUCCESS;
    public productArray: ProductDTOArray;

    constructor(productArray: ProductDTOArray) {
        this.productArray = productArray;
    }
}

export class GetProductsFailAction {
    readonly type = ProductListActions.GET_PRODUCTS_LIST_FAILURE;
}

 export type ProductListAction =  DeleteProductFromListAction | SetLoadingListAction | 
            AddItemToListAction | GetProductsRequestAction | GetProductsSuccessAction |
            GetProductsFailAction;

export const deleteProductList = (productId: number): DeleteProductFromListAction => {
    return {
        productId: productId,
        type: ProductListActions.DELETE_PRODUCT_FROM_LIST,
    };
}

export const setLoadingList = (loadingStatus: boolean): SetLoadingListAction => {
    return {
        loadingStatus: loadingStatus,
        type: ProductListActions.SET_LOADING_STATUS_LIST,
    }
}

export const addItemToList = (productDTO: ProductDTO): AddItemToListAction => {
    return {
        productDTO: productDTO,
        type: ProductListActions.ADD_ITEM_TO_LIST,
    }
}

export const getProductsRequest = (): GetProductsRequestAction => {
    return {
        type: ProductListActions.GET_PRODUCTS_LIST_REQUEST,
    };
}

export const getProductsSuccess = (productArray: ProductDTOArray): GetProductsSuccessAction => {
    return {
        productArray: productArray,
        type: ProductListActions.GET_PRODUCTS_LIST_SUCCESS,
    };
}

export const getProductsFail = (): GetProductsFailAction => {
    return {
        type: ProductListActions.GET_PRODUCTS_LIST_FAILURE,
    };
}
