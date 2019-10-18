import React from 'react';
import { Product, ProductDTO } from '../../../model/model';
import { AppState } from '../../../store/store';
import { changeProductName, changeProductCategory, setEditableProduct, 
    changeProductPrice, changeProductImage, changeProductDescription, 
    setLoadingEditable, 
    getEditableProductRequest,
    updateProductRequest,
    clearUpdateStatus} from '../../../actions/EditableProductActions';
import { connect } from 'react-redux';
import { EditableProductViewDumb } from '../dumb/EditableProductViewDumb';
import { API_PRODUCTS } from '../../../util/API';
import { LoadingIndicator } from '../../../util/LoadingIndicator/LoadingIndicator';
import { addItemToList } from '../../../actions/ProductListActions';
import { updateProductCart } from '../../../actions/ShoppingCartActions';
import { setProduct } from '../../../actions/ProductDetailsActions';
import { Dispatch } from 'redux';
import { DEFAULT_ID, DEFAULT_NAME, DEFAULT_CATEGORY, DEFAULT_PRICE, 
    DEFAULT_IMAGE, DEFAULT_DESCRIPTION, ZERO, STATUS_SUCCESS, STATUS_FAIL } from '../../../util/util';
import { ErrrorMessageLabel } from '../../../util/ErrorMessageLabel/ErrorMessageLabel';
import { Redirect } from 'react-router';

interface IEditableProductViewSmartProps {
    productId: number;
    editableProduct: Product;
    operationName: string;
    operationMethod: string;
    isLoading: boolean;
    hasError: boolean;
    updateStatus: string;
    setEditableProduct: (product: Product) => void;
    getEditableProduct: (productId: number) => void;
    updateProductRequest: (product: Product, requestUrl: string, method: string) => void;
    changeName: (name: string) => void;
    changeCategory: (category: string) => void;
    changePrice: (price: number) => void;
    changeImage: (image: string) => void;
    changeDescription: (description: string) => void;
    setLoadingStatus: (loadingStatus: boolean) => void;
    addItemToProductsList: (productDTO: ProductDTO) => void;
    updateItemInCart: (product: Product) => void;
    setDetailsProduct: (product: Product) => void;
    clearUpdateStatus: () => void;
}

class EditableProductViewSmart extends React.Component<IEditableProductViewSmartProps> {

    public async componentDidMount () {

        this.props.clearUpdateStatus();

        if (this.props.operationMethod.toLowerCase() === 'put') {
            this.props.getEditableProduct(this.props.productId);
        } else {
            this.props.setEditableProduct(new Product(DEFAULT_ID, DEFAULT_NAME, DEFAULT_CATEGORY,
                    DEFAULT_PRICE, DEFAULT_IMAGE, DEFAULT_DESCRIPTION));
        }
    }

    private async onSubmitAction(): Promise<void> {

        this.props.setLoadingStatus(true);
        let requestPath: string = API_PRODUCTS;

        if (this.props.operationMethod.toLowerCase() === 'put') {
            requestPath = requestPath + "/" + this.props.productId;
        }

        this.props.updateProductRequest(this.props.editableProduct, requestPath, this.props.operationMethod);
    }

    private generateFormStatus(): boolean {
        const product: Product = this.props.editableProduct;

        if (product.name === '' || product.price <= ZERO || product.image === '' || product.category === '' ||
            product.price.toString() === '' || product.description === '') {
            return false;
        }

        return true;
    }

    public render() {

        const redirectLink: string = this.props.operationMethod.toLowerCase() === 'put' ? 
            '/products/' + this.props.productId : '/products';

        if (this.props.isLoading) {
            return (
                <LoadingIndicator />
            );
        } else if (this.props.hasError) {
            return (
                <ErrrorMessageLabel errorMessage={RETRIEVE_PRODUCT_ERROR}/>
            );
        } else if (this.props.updateStatus === STATUS_SUCCESS) {
            this.props.clearUpdateStatus();
            return (
                <Redirect to={redirectLink} ></Redirect>
            );
        } else if (this.props.updateStatus === STATUS_FAIL) {
            return (
                <ErrrorMessageLabel errorMessage={UPDATE_PRODUCT_ERROR} />
            );
        }

        return (
            <EditableProductViewDumb product={this.props.editableProduct}
                                operationName={this.props.operationName}
                                redirectLink={redirectLink}
                                onSubmitAction={(e) => this.onSubmitAction()}
                                changeName={(e) => this.props.changeName(e)}
                                changeCategory={(e) => this.props.changeCategory(e)}
                                changePrice={(e) => this.props.changePrice(e)}
                                changeImage={(e) => this.props.changeImage(e)}
                                changeDescription={(e) => this.props.changeDescription(e)}
                                formStatus={this.generateFormStatus()}
            />
        )
    }
}

interface IOwnProp {
    productId: number;
    operationName: string;
}

const UPDATE_PRODUCT_ERROR = "An error occured while updating the product details.";
const RETRIEVE_PRODUCT_ERROR = "An error occured while retrieving the product details.";

const mapStateToProps = (state: AppState, ownProps: IOwnProp) => {
    return {
        initialProduct: ownProps.productId,
        editableProduct: state.editableProduct.product,
        operationName: ownProps.operationName,
        isLoading: state.editableProduct.isLoading,
        hasError: state.editableProduct.hasFetchError,
        updateStatus: state.editableProduct.updateStatus,
    };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return ({
        setEditableProduct: (product: Product) => dispatch(setEditableProduct(product)),
        getEditableProduct: (productId: number) => dispatch(getEditableProductRequest(productId)),
        updateProductRequest: (product: Product, requestUrl: string, method: string) =>
                                dispatch(updateProductRequest(product, requestUrl, method)),
        changeName: (name: string) => dispatch(changeProductName(name)),
        changeCategory: (category: string) => dispatch(changeProductCategory(category)),
        changePrice: (price: number) => dispatch(changeProductPrice(price)),
        changeImage: (image: string) => dispatch(changeProductImage(image)),
        changeDescription: (description: string) => dispatch(changeProductDescription(description)),
        setLoadingStatus: (loadingStatus: boolean) => dispatch(setLoadingEditable(loadingStatus)),
        addItemToProductsList: (productDTO: ProductDTO) => dispatch(addItemToList(productDTO)),
        updateItemInCart: (product: Product) => dispatch(updateProductCart(product)),
        setDetailsProduct: (product: Product) => dispatch(setProduct(product)),
        clearUpdateStatus: () => dispatch(clearUpdateStatus()),
    });
}

const EditableProductView = connect(
    mapStateToProps,
    mapDispatchToProps,
) (EditableProductViewSmart);

export default EditableProductView;
