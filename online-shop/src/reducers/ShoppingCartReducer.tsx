import { ProductArray, Product } from '../model/model';
import { ShoppingCartActions } from '../util/ActionTypes';
import { ShoppingCartAction, AddProductToCartAction, DeleteProductFromCartAction, 
    ModifyProductQuantityAction, SetLoadingCartAction, 
    UpdateProductCartAction,
    } from '../actions/ShoppingCartActions';
import { STATUS_NONE, STATUS_SUCCESS, STATUS_FAIL, ZERO } from '../util/util';

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
        case ShoppingCartActions.ADD_PRODUCT_TO_CART: {
            const newProductArray: ProductArray = addProductToCart(state.productArray, action.product);
            return ({
                productArray: newProductArray,
                isLoading: state.isLoading,
                createOrderStatus: state.createOrderStatus,
            });
        }
        case ShoppingCartActions.DELETE_PRODUCT_FROM_CART: {
            return ({
                productArray: deleteProduct(state.productArray, action.productId),
                isLoading: state.isLoading,
                createOrderStatus: state.createOrderStatus,
            });
        }
        case ShoppingCartActions.MODIFY_PRODUCT_QUANTITY: {
        
            if (action.newQuantity === action.oldQuantity) {
                return ({
                    productArray: state.productArray,
                    isLoading: state.isLoading,
                    createOrderStatus: state.createOrderStatus,
                });
            } else {
                return ({
                    productArray: updateQuantity(state.productArray, action.product, action.newQuantity),
                    isLoading: state.isLoading,
                    createOrderStatus: state.createOrderStatus,
                });
            }    
        }
        case ShoppingCartActions.SET_LOADING_STATUS_CART: {
            return ({
                productArray: state.productArray,
                isLoading: action.loadingStatus,
                createOrderStatus: state.createOrderStatus,
            });
        }
        case ShoppingCartActions.CLEAR_CART: {
            return ({
                productArray: new ProductArray([]),
                isLoading: state.isLoading,
                createOrderStatus: state.createOrderStatus,
            });
        }
        case ShoppingCartActions.UPDATE_PRODUCT_CART: {

            if (containsProduct(state.productArray, action.product)) {
                return ({
                    productArray: updateProduct(state.productArray, action.product),
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
        case ShoppingCartActions.CREATE_ORDER_REQUEST: {
            return state;
        }
        case ShoppingCartActions.CREATE_ORDER_SUCCESS: {
            return ({
                productArray: state.productArray,
                isLoading: state.isLoading,
                createOrderStatus: STATUS_SUCCESS,
            });
        }
        case ShoppingCartActions.CREATE_ORDER_FAIL: {
            return ({
                productArray: state.productArray,
                isLoading: state.isLoading,
                createOrderStatus: STATUS_FAIL,
            });
        }
        case ShoppingCartActions.CLEAR_CREATE_ORDER_STATUTS: {
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

    oldArray.products.filter((item: Product) => item.id != productId).forEach((filteredProduct: Product) => {
        newProductArray.products.push(filteredProduct)
    });

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

const getProductQuantity = (array: ProductArray, product: Product): number => {
    let quantity = 0;
    array.products.forEach((item) => {
        if (item.id == product.id) {
            quantity++;
        };
    });

    return quantity;
}

const addProductToCart = (array: ProductArray, product: Product): ProductArray => {
    
    const quantity: number = getProductQuantity(array, product);
    
    if (quantity > ZERO) {
        return updateQuantity(array, product, quantity + 1);
    } else {
        const newProductArray: ProductArray = new ProductArray([]);
    
        array.products.forEach((item) => newProductArray.products.push(item));
        newProductArray.products.push(product);
        
        return newProductArray;
    }
}
