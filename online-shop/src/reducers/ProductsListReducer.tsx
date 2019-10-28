import { ProductDTOArray, ProductDTO } from '../model/model';
import { DELETE_PRODUCT_FROM_LIST, SET_LOADING_STATUS_LIST, GET_PRODUCTS_LIST_FAILURE,
     GET_PRODUCTS_LIST_REQUEST, GET_PRODUCTS_LIST_SUCCESS, ADD_ITEM_TO_LIST } from '../util/ActionTypes';
import { ProductListAction, DeleteProductFromListAction, 
    SetLoadingListAction, AddItemToListAction, GetProductsSuccessAction } from '../actions/ProductListActions';

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
        case GET_PRODUCTS_LIST_REQUEST: {
            return state;
        }
        case GET_PRODUCTS_LIST_SUCCESS: {
            const actualAction: GetProductsSuccessAction = action as GetProductsSuccessAction;
            return ({
                productArray: actualAction.productArray,
                isLoading: false,
                hasError: false,
            });
        }
        case GET_PRODUCTS_LIST_FAILURE: {
            return ({
                productArray: state.productArray,
                isLoading: false,
                hasError: true,
            });
        }
        case DELETE_PRODUCT_FROM_LIST: {
            const actualAction: DeleteProductFromListAction = action as DeleteProductFromListAction;
            const newArray: ProductDTOArray = deleteProduct(state.productArray, actualAction.productId);
            return ({
                productArray: newArray,
                isLoading: state.isLoading,
                hasError: state.hasError,
            });
        }
        case SET_LOADING_STATUS_LIST: {
            const actualAction: SetLoadingListAction = action as SetLoadingListAction;
            console.log(actualAction);
            return ({
                productArray: state.productArray,
                isLoading: actualAction.loadingStatus,
                hasError: state.hasError,
            })
        }
        case ADD_ITEM_TO_LIST: {
            const actualAction: AddItemToListAction = action as AddItemToListAction;
            return ({
                productArray: putProduct(state.productArray, actualAction.productDTO),
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
