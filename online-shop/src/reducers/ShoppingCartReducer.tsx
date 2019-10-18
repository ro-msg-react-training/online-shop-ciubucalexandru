import { ProductArray, Product } from '../model/model';
import { DELETE_PRODUCT_FROM_CART, ADD_PRODUCT_TO_CART, MODIFY_PRODUCT_QUANTITY, 
    CLEAR_CART, SET_LOADING_STATUS_CART, UPDATE_PRODUCT_CART, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAIL, CLEAR_CREATE_ORDER_STATUTS } from '../util/ActionTypes';
import { ShoppingCartAction, AddProductToCartAction, DeleteProductFromCartAction, 
    ModifyProductQuantityAction, SetLoadingCartAction, 
    UpdateProductCartAction } from '../actions/ShoppingCartActions';
import { STATUS_NONE, STATUS_SUCCESS, STATUS_FAIL } from '../util/util';

export interface ShoppingCartState {
    productArray: ProductArray;
    isLoading: boolean;
    createOrderStatus: string;
};

const initialState: ShoppingCartState = {
    isLoading: true,
    productArray: new ProductArray([]),
    createOrderStatus: STATUS_NONE,
}

export const ShoppingCartReducer = (
            state: ShoppingCartState = initialState, 
            action: ShoppingCartAction,
        ): ShoppingCartState => {

    switch(action.type) {
        case ADD_PRODUCT_TO_CART: {
            const actualAction: AddProductToCartAction = action as AddProductToCartAction;
            const newProductArray: ProductArray = new ProductArray(state.productArray.products);
            newProductArray.products.push(actualAction.product);
            return ({
                productArray: newProductArray,
                isLoading: state.isLoading,
                createOrderStatus: state.createOrderStatus,
            });
        }
        case DELETE_PRODUCT_FROM_CART: {
            const actualAction: DeleteProductFromCartAction = action as DeleteProductFromCartAction;
            return ({
                productArray: deleteProduct(state.productArray, actualAction.productId),
                isLoading: state.isLoading,
                createOrderStatus: state.createOrderStatus,
            });
        }
        case MODIFY_PRODUCT_QUANTITY: {
            const actualAction: ModifyProductQuantityAction = action as ModifyProductQuantityAction;
            
            if (actualAction.newQuantity === actualAction.oldQuantity) {
                return ({
                    productArray: state.productArray,
                    isLoading: state.isLoading,
                    createOrderStatus: state.createOrderStatus,
                });
            } else {
                return ({
                    productArray: updateQuantity(state.productArray, actualAction.product, actualAction.newQuantity),
                    isLoading: state.isLoading,
                    createOrderStatus: state.createOrderStatus,
                });
            }    
        }
        case SET_LOADING_STATUS_CART: {
            const actualAction: SetLoadingCartAction = action as SetLoadingCartAction;
            return ({
                productArray: state.productArray,
                isLoading: actualAction.loadingStatus,
                createOrderStatus: state.createOrderStatus,
            });
        }
        case CLEAR_CART: {
            return ({
                productArray: new ProductArray([]),
                isLoading: state.isLoading,
                createOrderStatus: state.createOrderStatus,
            });
        }
        case UPDATE_PRODUCT_CART: {
            const actualAction: UpdateProductCartAction = action as UpdateProductCartAction;

            if (containsProduct(state.productArray, actualAction.product)) {
                return ({
                    productArray: updateProduct(state.productArray, actualAction.product),
                    isLoading: state.isLoading,
                    createOrderStatus: state.createOrderStatus,
                });
            } else {
                return ({
                    productArray: state.productArray,
                    isLoading: state.isLoading,
                    createOrderStatus: state.createOrderStatus,
                });
            }
        }
        case CREATE_ORDER_REQUEST: {
            return state;
        }
        case CREATE_ORDER_SUCCESS: {
            return ({
                productArray: state.productArray,
                isLoading: state.isLoading,
                createOrderStatus: STATUS_SUCCESS,
            });
        }
        case CREATE_ORDER_FAIL: {
            return ({
                productArray: state.productArray,
                isLoading: state.isLoading,
                createOrderStatus: STATUS_FAIL,
            });
        }
        case CLEAR_CREATE_ORDER_STATUTS: {
            return ({
                productArray: state.productArray,
                isLoading: state.isLoading,
                createOrderStatus: STATUS_NONE,
            });
        }
        default: {
            return state;
        }
    }
}

const updateQuantity = (oldArray: ProductArray, product: Product, quantity: number): ProductArray => {
    const newProductArray: ProductArray = deleteProduct(oldArray, product.id);

    for (let i = 0; i < quantity; i++) {
        newProductArray.products.push(product);
    }

    return newProductArray;
}

const deleteProduct = (oldArray: ProductArray, productId: number): ProductArray => {
    const newProductArray: ProductArray = new ProductArray([]);

    oldArray.products.filter((item: Product) => item.id !== productId).forEach((filteredProduct: Product) => {
        newProductArray.products.push(filteredProduct)
    });

    console.log(newProductArray);

    return newProductArray;
}

const updateProduct = (oldArray: ProductArray, product: Product): ProductArray => {
    const newProductArray: ProductArray = new ProductArray([]);

    oldArray.products.forEach((item: Product) => {
        if (product.id === item.id) {
            newProductArray.products.push(product);
        } else {
            newProductArray.products.push(item);
        }
    })

    return newProductArray;
}

const containsProduct = (array: ProductArray, product: Product): boolean => {
    let found = false;
    array.products.forEach((item: Product) => {
        if (product.id === item.id) found = true
    });
    return found;
}
