import React from 'react';
import { Product, ProductArray } from '../../../model/model';
import { API_PRODUCTS } from '../../../util/API';
import { ProductDetailsDumb } from '../dumb/ProductDetailsDumb';
import { AppState } from '../../../store/store';
import { addProductToCart, deleteProductShoppingCart } from '../../../actions/ShoppingCartActions';
import { connect } from 'react-redux';
import { setProduct, setLoadingDetails, openModalDetails, closeModalDetails } from '../../../actions/ProductDetailsActions';
import { deleteProductList } from '../../../actions/ProductListActions';
import { LoadingIndicator } from '../../../util/LoadingIndicator/LoadingIndicator';

interface IProductDetailsPropsSmart {
    productId: number;
    product: Product;
    shoppingCart: ProductArray;
    loadingStatus: boolean;
    showModal: boolean;
    setProduct: (product: Product) => void;
    setLoadingStatus: (loadingState: boolean) => void;
    deleteItem:  (product: Product) => void;
    addItemToCart: (product: Product) => void;
    openModal: () => void;
    closeModal: () => void;
}

class ProductDetailsSmart extends React.Component<IProductDetailsPropsSmart> {

    async componentDidMount() {
        let response = await fetch(API_PRODUCTS + "/" + this.props.productId);
        let data = await response.json();

        this.props.setProduct(data);
        this.props.setLoadingStatus(false);
        
        this.deleteOnClick = this.deleteOnClick.bind(this);
    }

    private async deleteOnClick() {
        this.props.openModal();
    }

    private async confirmModal() {
        await fetch(API_PRODUCTS + "/" + this.props.productId, {
            method: 'delete'});

        this.props.deleteItem(this.props.product);
        this.props.closeModal();
    }

    private closeModal() {
        this.props.closeModal();
    }

    render() {

        if (this.props.loadingStatus) {
            return (
                <LoadingIndicator />
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

const mapStateToProps = (state: AppState, ownProps: IIdProp) => {
    return {
        productId: ownProps.id,
        loadingStatus: state.productDetails.isLoading,
        product: state.productDetails.product,
        shoppingCart: state.shoppingCart.productArray,
        showModal: state.productDetails.showModal
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setProduct: (product: Product) => dispatch(setProduct(product)),
        setLoadingStatus: (loadingStatus: boolean) => dispatch(setLoadingDetails(loadingStatus)),
        deleteItem: (product: Product) => {
            dispatch(deleteProductList(product));
            dispatch(deleteProductShoppingCart(product))
        },
        addItemToCart: (product: Product) => dispatch(addProductToCart(product)),
        openModal: () => dispatch(openModalDetails()),
        closeModal: () => dispatch(closeModalDetails())
    }
}

const ProductDetails = connect(
    mapStateToProps,
    mapDispatchToProps
) (ProductDetailsSmart);

export default ProductDetails;