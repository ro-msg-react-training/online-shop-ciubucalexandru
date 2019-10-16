import { ProductArray, Product } from '../model/model';
import { DELETE_PRODUCT_FROM_CART, ADD_PRODUCT_TO_CART, MODIFY_PRODUCT_QUANTITY, 
    CLEAR_CART, SET_LOADING_STATUS_CART, UPDATE_PRODUCT_CART } from '../util/ActionTypes';
import { ShoppingCartAction, AddProductToCartAction, DeleteProductFromCartAction, 
    ModifyProductQuantityAction, SetLoadingCartAction, 
    UpdateProductCartAction } from '../actions/ShoppingCartActions';

export interface ShoppingCartState {
    productArray: ProductArray;
    isLoading: boolean;
};

const initialState: ShoppingCartState = {
    isLoading: true,
    productArray: new ProductArray([]),
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
            });
        }
        case DELETE_PRODUCT_FROM_CART: {
            const actualAction: DeleteProductFromCartAction = action as DeleteProductFromCartAction;
            return ({
                productArray: deleteProduct(state.productArray, actualAction.product),
                isLoading: state.isLoading,
            });
        }
        case MODIFY_PRODUCT_QUANTITY: {
            const actualAction: ModifyProductQuantityAction = action as ModifyProductQuantityAction;
            
            if (actualAction.newQuantity === actualAction.oldQuantity) {
                return ({
                    productArray: state.productArray,
                    isLoading: state.isLoading,
                });
            } else {
                return ({
                    productArray: updateQuantity(state.productArray, actualAction.product, actualAction.newQuantity),
                    isLoading: state.isLoading,
                });
            }    
        }
        case SET_LOADING_STATUS_CART: {
            const actualAction: SetLoadingCartAction = action as SetLoadingCartAction;
            return ({
                productArray: state.productArray,
                isLoading: actualAction.loadingStatus,
            });
        }
        case CLEAR_CART: {
            return ({
                productArray: new ProductArray([]),
                isLoading: state.isLoading,
            });
        }
        case UPDATE_PRODUCT_CART: {
            const actualAction: UpdateProductCartAction = action as UpdateProductCartAction;

            if (containsProduct(state.productArray, actualAction.product)) {
                return ({
                    productArray: updateProduct(state.productArray, actualAction.product),
                    isLoading: state.isLoading,
                });
            } else {
                return ({
                    productArray: state.productArray,
                    isLoading: state.isLoading,
                });
            }
        }
        default: {
            return state;
        }
    }
}

const updateQuantity = (oldArray: ProductArray, product: Product, quantity: number): ProductArray => {
    const newProductArray: ProductArray = deleteProduct(oldArray, product);

    for (let i = 0; i < quantity; i++) {
        newProductArray.products.push(product);
    }

    return newProductArray;
}

const deleteProduct = (oldArray: ProductArray, product: Product): ProductArray => {
    const newProductArray: ProductArray = new ProductArray([]);

    oldArray.products.filter((item: Product) => item.id !== product.id).forEach((filteredProduct: Product) => {
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
