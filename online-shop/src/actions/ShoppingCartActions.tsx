import { Product, OrderDTO } from "../model/model";
import { ShoppingCartActions } from "../util/ActionTypes";
import { Action } from "redux";

export class DeleteProductFromCartAction {
    readonly type = ShoppingCartActions.DELETE_PRODUCT_FROM_CART;
    productId: number;

    constructor(productId: number) {
        this.productId = productId;
    }
}

export class AddProductToCartAction {
    readonly type = ShoppingCartActions.ADD_PRODUCT_TO_CART;
    product: Product;

    constructor(product: Product) {
        this.product = product;
    }
}

export class ModifyProductQuantityAction {
    readonly type = ShoppingCartActions.MODIFY_PRODUCT_QUANTITY;
    product: Product;
    newQuantity: number;
    oldQuantity: number;

    constructor(product: Product, newQuantity: number, oldQuantity: number) {
        this.product = product;
        this.newQuantity = newQuantity;
        this.oldQuantity = oldQuantity;
    }
}

export class ClearCartAction {
    readonly type = ShoppingCartActions.CLEAR_CART;
}

export class SetLoadingCartAction {
    readonly type = ShoppingCartActions.SET_LOADING_STATUS_CART;
    loadingStatus: boolean;

    constructor(loadingStatus: boolean) {
        this.loadingStatus = loadingStatus;
    }
}

export class UpdateProductCartAction {
    readonly type = ShoppingCartActions.UPDATE_PRODUCT_CART;
    product: Product;

    constructor(product: Product) {
        this.product = product;
    }
}

export class CreateOrderRequestAction {
    readonly type = ShoppingCartActions.CREATE_ORDER_REQUEST;
    orderDTO: OrderDTO;

    constructor(orderDTO: OrderDTO) {
        this.orderDTO = orderDTO;
    }
}

export class CreateOrderSuccessAction {
    readonly type = ShoppingCartActions.CREATE_ORDER_SUCCESS;
}

export class CreateOrderFailAction {
    readonly type = ShoppingCartActions.CREATE_ORDER_FAIL;
}

export class ClearCreateOrderStatusAction {
    readonly type = ShoppingCartActions.CLEAR_CREATE_ORDER_STATUTS;
}

export type ShoppingCartAction = AddProductToCartAction | DeleteProductFromCartAction | 
    ModifyProductQuantityAction | SetLoadingCartAction | UpdateProductCartAction |
    CreateOrderRequestAction | CreateOrderSuccessAction | CreateOrderFailAction |
    ClearCreateOrderStatusAction | ClearCartAction;

export const addProductToCart = (product: Product): AddProductToCartAction => {
    return { 
        type: ShoppingCartActions.ADD_PRODUCT_TO_CART, 
        product: product,
    };
}

export const deleteProductShoppingCart = (productId: number): DeleteProductFromCartAction => {
    return { 
        type: ShoppingCartActions.DELETE_PRODUCT_FROM_CART, 
        productId: productId,
    };
}

export const modifyProductQuantiy = (
        product: Product, 
        newQuantity: number, 
        oldQuantity: number,
    ): ModifyProductQuantityAction => {
        
    return { 
        type: ShoppingCartActions.MODIFY_PRODUCT_QUANTITY, 
        product: product, 
        newQuantity: newQuantity, 
        oldQuantity: oldQuantity,
    };
}

export const clearShoppingCart = (): ClearCartAction => {
    return { 
        type: ShoppingCartActions.CLEAR_CART,
    };
}

export const setLoadingCart = (loadingStatus: boolean): SetLoadingCartAction => {
    return { 
        type: ShoppingCartActions.SET_LOADING_STATUS_CART, 
        loadingStatus: loadingStatus,
    };
}

export const updateProductCart = (product: Product): UpdateProductCartAction => {
    return { 
        type: ShoppingCartActions.UPDATE_PRODUCT_CART,
        product: product,
    };
}

export const createOrderRequest = (orderDTO: OrderDTO): CreateOrderRequestAction => {
    return {
        type: ShoppingCartActions.CREATE_ORDER_REQUEST,
        orderDTO: orderDTO,
    };
}

export const createOrderSuccess = (): CreateOrderSuccessAction => {
    return {
        type: ShoppingCartActions.CREATE_ORDER_SUCCESS,
    };
}

export const createOrderFail = (): CreateOrderFailAction => {
    return {
        type: ShoppingCartActions.CREATE_ORDER_FAIL,
    };
}

export const clearCreateOrderStatus = (): ClearCreateOrderStatusAction => {
    return {
        type: ShoppingCartActions.CLEAR_CREATE_ORDER_STATUTS,
    };
}
