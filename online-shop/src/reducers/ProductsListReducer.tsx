import { ProductDTOArray, ProductDTO } from '../model/model';
import { ProductListActions } from '../util/ActionTypes';
import { ProductListAction } from '../actions/ProductListActions';

export interface ProductsListState {
    productArray: ProductDTOArray;
    isLoading: boolean;
    hasError: boolean;
};

const initialState: ProductsListState = {
    productArray: new ProductDTOArray([]),
    isLoading: true,
    hasError: false,
}

export const ProductsListReducer = (
            state: ProductsListState = initialState, 
            action: ProductListAction,
        ): ProductsListState => {
    
    switch(action.type) {
        case ProductListActions.GET_PRODUCTS_LIST_SUCCESS: {
            return ({
                productArray: action.productArray,
                isLoading: false,
                hasError: false,
            });
        }
        case ProductListActions.GET_PRODUCTS_LIST_FAILURE: {
            return ({
                productArray: state.productArray,
                isLoading: false,
                hasError: true,
            });
        }
        case ProductListActions.DELETE_PRODUCT_FROM_LIST: {
            const newArray: ProductDTOArray = deleteProduct(state.productArray, action.productId);
            return ({
                productArray: newArray,
                isLoading: state.isLoading,
                hasError: state.hasError,
            });
        }
        case ProductListActions.SET_LOADING_STATUS_LIST: {
            return ({
                productArray: state.productArray,
                isLoading: action.loadingStatus,
                hasError: state.hasError,
            })
        }
        case ProductListActions.ADD_ITEM_TO_LIST: {
            return ({
                productArray: putProduct(state.productArray, action.productDTO),
                isLoading: state.isLoading,
                hasError: state.hasError,
            })
        }
        default: {
            return state;
        }
    }
}

const deleteProduct = (oldArray: ProductDTOArray, productId: number): ProductDTOArray => {
    const newProductArray: ProductDTOArray = new ProductDTOArray([]);

    oldArray.products
        .filter((item: ProductDTO) => item.id != productId)
            .forEach((filteredProduct: ProductDTO) => {
                newProductArray.products.push(filteredProduct)
    });

    return newProductArray;
}

const putProduct = (productArray: ProductDTOArray, productDTO: ProductDTO): ProductDTOArray => {
    const newArray: ProductDTOArray = new ProductDTOArray([]);
    let found = false;

    productArray.products.forEach((item) => {
        if (item.id == productDTO.id) {
            newArray.products.push(productDTO);
            found = true;
        } else {
            newArray.products.push(item);
        }
    });

    if (!found) newArray.products.push(productDTO);

    return newArray;
}
