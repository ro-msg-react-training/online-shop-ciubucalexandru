import React from 'react';
import { Product, ProductDTO } from '../../../model/model';
import { AppState } from '../../../store/store';
import { changeProductName, changeProductCategory, setEditableProduct, 
    changeProductPrice, changeProductImage, changeProductDescription, 
    setLoadingEditable } from '../../../actions/EditableProductActions';
import { connect } from 'react-redux';
import { EditableProductViewDumb } from '../dumb/EditableProductViewDumb';
import { API_PRODUCTS } from '../../../util/API';
import { LoadingIndicator } from '../../../util/LoadingIndicator/LoadingIndicator';
import { addItemToList } from '../../../actions/ProductListActions';
import { updateProductCart } from '../../../actions/ShoppingCartActions';
import { setProduct } from '../../../actions/ProductDetailsActions';
import { Dispatch } from 'redux';
import { DEFAULT_ID, DEFAULT_NAME, DEFAULT_CATEGORY, DEFAULT_PRICE, 
    DEFAULT_IMAGE, DEFAULT_DESCRIPTION } from '../../../util/util';

interface IEditableProductViewSmartProps {
    productId: number;
    editableProduct: Product;
    operationName: string;
    operationMethod: string;
    isLoading: boolean,
    setEditableProduct: (product: Product) => void;
    changeName: (name: string) => void;
    changeCategory: (category: string) => void;
    changePrice: (price: number) => void;
    changeImage: (image: string) => void;
    changeDescription: (description: string) => void;
    setLoadingStatus: (loadingStatus: boolean) => void;
    addItemToProductsList: (productDTO: ProductDTO) => void;
    updateItemInCart: (product: Product) => void;
    setDetailsProduct: (product: Product) => void;
}

class EditableProductViewSmart extends React.Component<IEditableProductViewSmartProps> {

    public async componentDidMount () {

        if (this.props.operationMethod.toLowerCase() === 'put') {
            const response = await fetch(API_PRODUCTS + "/" + this.props.productId)
            const data = await response.json();

            this.props.setEditableProduct(data)
        } else {
            this.props.setEditableProduct(new Product(DEFAULT_ID, DEFAULT_NAME, DEFAULT_CATEGORY,
                    DEFAULT_PRICE, DEFAULT_IMAGE, DEFAULT_DESCRIPTION));
        }

        this.props.setLoadingStatus(false);
    }

    private async onSubmitAction(product: Product): Promise<void> {

        this.props.setLoadingStatus(true);
        let requestPath: string = API_PRODUCTS;

        if (this.props.operationMethod.toLowerCase() === 'put') {
            requestPath = requestPath + "/" + this.props.productId;
        }

        await fetch(requestPath, {
            method: this.props.operationMethod,
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(product),
        });

        this.props.setLoadingStatus(false);
        this.props.addItemToProductsList(new ProductDTO(product.id, product.name, product.category, product.price));
        this.props.updateItemInCart(product);
        this.props.setDetailsProduct(product);
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

        if (this.props.isLoading) {
            return (
                <LoadingIndicator />
            );
        }

        return (
            <EditableProductViewDumb product={this.props.editableProduct}
                                operationName={this.props.operationName}
                                onSubmitAction={(e) => this.onSubmitAction(e)}
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

const ZERO = 0;

const mapStateToProps = (state: AppState, ownProps: IOwnProp) => {
    return ({
        initialProduct: ownProps.productId,
        editableProduct: state.editableProduct.product,
        operationName: ownProps.operationName,
        isLoading: state.editableProduct.isLoading,
    });
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return ({
        setEditableProduct: (product: Product) => dispatch(setEditableProduct(product)),
        changeName: (name: string) => dispatch(changeProductName(name)),
        changeCategory: (category: string) => dispatch(changeProductCategory(category)),
        changePrice: (price: number) => dispatch(changeProductPrice(price)),
        changeImage: (image: string) => dispatch(changeProductImage(image)),
        changeDescription: (description: string) => dispatch(changeProductDescription(description)),
        setLoadingStatus: (loadingStatus: boolean) => dispatch(setLoadingEditable(loadingStatus)),
        addItemToProductsList: (productDTO: ProductDTO) => dispatch(addItemToList(productDTO)),
        updateItemInCart: (product: Product) => dispatch(updateProductCart(product)),
        setDetailsProduct: (product: Product) => dispatch(setProduct(product)),
    });
}

const EditableProductView = connect(
    mapStateToProps,
    mapDispatchToProps,
) (EditableProductViewSmart);

export default EditableProductView;
