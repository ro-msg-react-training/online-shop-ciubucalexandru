import { ProductDTOArray, ProductDTO, Product } from '../model/model';
import { SET_PRODUCT_LIST, DELETE_PRODUCT_FROM_LIST, SET_LOADING_STATUS_LIST, 
    ADD_ITEM_TO_LIST } from '../util/ActionTypes';
import { ProductListAction, SetProductListAction, DeleteProductFromListAction, 
    SetLoadingListAction, AddItemToListAction } from '../actions/ProductListActions';

export interface ProductsListState {
    productArray: ProductDTOArray;
    isLoading: boolean;
};

const initialState: ProductsListState = {
    productArray: new ProductDTOArray([]),
    isLoading: true
}

export const ProductsListReducer = (
            state: ProductsListState = initialState, 
            action: ProductListAction
        ): ProductsListState => {

    switch(action.type) {
        case SET_PRODUCT_LIST: {
            const actualAction: SetProductListAction = action as SetProductListAction;
            return ({
                productArray: actualAction.products,
                isLoading: state.isLoading,
            });
        }
        case DELETE_PRODUCT_FROM_LIST: {
            const actualAction: DeleteProductFromListAction = action as DeleteProductFromListAction;
            const newArray: ProductDTOArray = deleteProduct(state.productArray, actualAction.product);
            return ({
                productArray: newArray,
                isLoading: state.isLoading,
            });
        }
        case SET_LOADING_STATUS_LIST: {
            const actualAction: SetLoadingListAction = action as SetLoadingListAction;
            return ({
                productArray: state.productArray,
                isLoading: actualAction.loadingStatus,
            })
        }
        case ADD_ITEM_TO_LIST: {
            const actualAction: AddItemToListAction = action as AddItemToListAction;
            return ({
                productArray: putProduct(state.productArray, actualAction.productDTO),
                isLoading: state.isLoading,
            })
        }
        default: {
            return state;
        }
    }
}

const deleteProduct = (oldArray: ProductDTOArray, product: Product): ProductDTOArray => {
    const newProductArray: ProductDTOArray = new ProductDTOArray([]);

    oldArray.products
        .filter((item: ProductDTO) => item.id !== product.id)
            .forEach((filteredProduct: ProductDTO) => {
            newProductArray.products.push(filteredProduct)
    });

    return newProductArray;
}

const putProduct = (productArray: ProductDTOArray, productDTO: ProductDTO): ProductDTOArray => {
    const newArray: ProductDTOArray = new ProductDTOArray([]);

    productArray.products.forEach((item) => {
        if (item.id === productDTO.id) {
            newArray.products.push(productDTO);
        } else {
            newArray.products.push(item);
        }
    });

    return newArray;
}
