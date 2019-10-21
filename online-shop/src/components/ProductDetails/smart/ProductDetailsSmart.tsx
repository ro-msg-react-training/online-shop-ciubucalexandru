import { Product, ProductArray } from '../../../model/model';
import { ProductDetailsDumb } from '../dumb/ProductDetailsDumb';
import { AppState } from '../../../store/store';
import { addProductToCart } from '../../../actions/ShoppingCartActions';
import { connect } from 'react-redux';
import { setLoadingDetails, openModalDetails, 
        closeModalDetails, 
        getProductRequest,
        deleteProductRequest,
        clearDeleteStatus} from '../../../actions/ProductDetailsActions';
import { Dispatch } from 'redux';
import { compose, withHandlers, lifecycle } from 'recompose';
import loadingIndicator from '../../../hocs/LoadingIndicatorHoc';

export interface IProductDetailsPropsSmart {
    product: Product;
    shoppingCart: ProductArray;
    isLoading: boolean;
    showModal: boolean;
    hasFetchError: boolean;
    deleteStatus: string;
    getProductRequest: (productId: number) => void;
    deleteProductRequest: (productId: number) => void;
    clearDeleteStatus: () => void;
    setLoadingStatus: (loadingState: boolean) => void;
    addItemToCart: (product: Product) => void;
    openModal: () => void;
    closeModal: () => void;
    confirmModal: () => void;
}

interface IIdProp {
    productId: number;
}

const mapStateToProps = (state: AppState) => {
    return {
        isLoading: state.productDetails.isLoading,
        product: state.productDetails.product,
        shoppingCart: state.shoppingCart.productArray,
        showModal: state.productDetails.showModal,
        hasFetchError: state.productDetails.hasFetchError,
        deleteStatus: state.productDetails.deleteStatus,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getProductRequest: (productId: number) => dispatch(getProductRequest(productId)),
        setLoadingStatus: (loadingStatus: boolean) => dispatch(setLoadingDetails(loadingStatus)),
        deleteProductRequest: (productId: number) => dispatch(deleteProductRequest(productId)),
        clearDeleteStatus: () => dispatch(clearDeleteStatus()),
        addItemToCart: (product: Product) => dispatch(addProductToCart(product)),
        openModal: () => dispatch(openModalDetails()),
        closeModal: () => dispatch(closeModalDetails()),
    }
}

const myHandlers = withHandlers({
    deleteOnClick: (props: IProductDetailsPropsSmart) => (event: any) => {
        props.openModal();
    },
    confirmModal: (props: IProductDetailsPropsSmart & IIdProp) => (event: any) => {
        props.closeModal();
        props.setLoadingStatus(true);
        props.deleteProductRequest(props.productId);
    },
});

const onComponentDidMount = lifecycle<IProductDetailsPropsSmart & IIdProp, {}, {}>({
    componentDidMount() {
        this.props.clearDeleteStatus();
        this.props.getProductRequest(this.props.productId);
    },
})

const ComposedProductDetails = compose<IProductDetailsPropsSmart, { productId: number }>(
    connect(mapStateToProps, mapDispatchToProps),
    myHandlers,
    onComponentDidMount,
    loadingIndicator,
) (ProductDetailsDumb);

export default ComposedProductDetails;
