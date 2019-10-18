import React from 'react';
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
import { LoadingIndicator } from '../../../util/LoadingIndicator/LoadingIndicator';
import { Dispatch } from 'redux';
import { ErrrorMessageLabel } from '../../../util/ErrorMessageLabel/ErrorMessageLabel';
import { STATUS_FAIL, STATUS_SUCCESS } from '../../../util/util';
import { Redirect } from 'react-router';

interface IProductDetailsPropsSmart {
    productId: number;
    product: Product;
    shoppingCart: ProductArray;
    loadingStatus: boolean;
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
}

class ProductDetailsSmart extends React.Component<IProductDetailsPropsSmart> {

    public componentDidMount() {
        this.props.clearDeleteStatus();
        this.props.getProductRequest(this.props.productId);
    }

    private deleteOnClick(): void {
        this.props.openModal();
    }

    private async confirmModal(): Promise<void> {
        this.props.closeModal();
        this.props.setLoadingStatus(true);
        this.props.deleteProductRequest(this.props.productId);
    }

    private closeModal(): void {
        this.props.closeModal();
    }

    public render() {

        if (this.props.loadingStatus) {
            return (
                <LoadingIndicator />
            );
        } else if (this.props.hasFetchError) {
            return (
                <ErrrorMessageLabel errorMessage={RETRIEVE_PRODUCT_MESSAGE} />
            );
        } else if (this.props.deleteStatus === STATUS_FAIL) {
            return (
                <ErrrorMessageLabel errorMessage={DELETE_PRODUCT_MESSAGE} />
            );
        } else if (this.props.deleteStatus === STATUS_SUCCESS) {
            this.props.clearDeleteStatus();
            return (
                <Redirect to="/products"></Redirect>
            );
        }

        return (
            <ProductDetailsDumb product={this.props.product} 
                    deleteOnClick={(e) => this.deleteOnClick()}
                    addOnClick={(e) => this.props.addItemToCart(e)} 
                    modalStatus={this.props.showModal}
                    closeModal={() => this.closeModal()}
                    confirmModal={() => this.confirmModal()}
                    />
        );
    }
}

interface IIdProp {
    id: number;
}

const RETRIEVE_PRODUCT_MESSAGE = "Failed to retrieve product details.";
const DELETE_PRODUCT_MESSAGE = "Failed to delete product.";

const mapStateToProps = (state: AppState, ownProps: IIdProp) => {
    return {
        productId: ownProps.id,
        loadingStatus: state.productDetails.isLoading,
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

const ProductDetails = connect(
    mapStateToProps,
    mapDispatchToProps,
) (ProductDetailsSmart);

export default ProductDetails;
