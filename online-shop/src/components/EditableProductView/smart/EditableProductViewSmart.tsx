import { Product, ProductDTO } from '../../../model/model';
import { AppState } from '../../../store/store';
import { changeProductName, changeProductCategory, setEditableProduct, 
    changeProductPrice, changeProductImage, changeProductDescription, 
    setLoadingEditable, 
    getEditableProductRequest,
    updateProductRequest,
    clearUpdateStatus} from '../../../actions/EditableProductActions';
import { connect } from 'react-redux';
import { API_PRODUCTS } from '../../../util/API';
import { addItemToList } from '../../../actions/ProductListActions';
import { updateProductCart } from '../../../actions/ShoppingCartActions';
import { setProduct } from '../../../actions/ProductDetailsActions';
import { Dispatch } from 'redux';
import { DEFAULT_ID, DEFAULT_NAME, DEFAULT_CATEGORY, DEFAULT_PRICE, 
    DEFAULT_IMAGE, DEFAULT_DESCRIPTION, ZERO } from '../../../util/util';
import { compose, withHandlers, lifecycle } from 'recompose';
import loadingIndicator from '../../../hocs/LoadingIndicatorHoc';
import { EditableProductViewDumb } from '../dumb/EditableProductViewDumb';

export interface IEditableProductViewSmartProps {
    editableProduct: Product;
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
    generateFormStatus: (props: IEditableProductViewSmartProps) => boolean;
    onSubmitAction: (props: IEditableProductViewSmartProps) => void;
    getOperationName: (props: IEditableProductViewSmartProps) => string;
    getOperationMethod: (props: IEditableProductViewSmartProps) => string;
    getProductId: (props: IEditableProductViewSmartProps) => number;
}

export interface IOwnPropsEditableView {
    productId: number;
    operationName: string;
    operationMethod: string;
}

const mapStateToProps = (state: AppState) => {
    return {
        editableProduct: state.editableProduct.product,
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

const myHandlers = withHandlers({
    onSubmitAction: (props: IEditableProductViewSmartProps & IOwnPropsEditableView) => (event: any) => {
        props.setLoadingStatus(true);
        let requestPath: string = API_PRODUCTS;

        if (props.operationMethod.toLowerCase() === 'put') {
            requestPath = requestPath + "/" + props.productId;
        }

        props.updateProductRequest(props.editableProduct, requestPath, props.operationMethod);
    },
    generateFormStatus: (props: IEditableProductViewSmartProps & IOwnPropsEditableView) => (event: any) => {
        const product: Product = props.editableProduct;

        if (product.name === '' || product.price <= ZERO || product.image === '' || product.category === '' ||
            product.price.toString() === '' || product.description === '') {
            return false;
        }

        return true;
    },
    getOperationName: (props: IOwnPropsEditableView) => (event: any) => {
        return props.operationName;
    },
    getOperationMethod: (props: IOwnPropsEditableView) => (event: any) => {
        return props.operationMethod;
    },
    getProductId: (props: IEditableProductViewSmartProps & IOwnPropsEditableView) => (event: any) => {
        return props.productId;
    }
});

const onComponentDidMount = lifecycle<IEditableProductViewSmartProps & IOwnPropsEditableView, {}, {}>({
    componentDidMount() {
        this.props.clearUpdateStatus();

        if (this.props.operationMethod.toLowerCase() === 'put') {
            this.props.getEditableProduct(this.props.productId);
        } else {
            this.props.setEditableProduct(new Product(DEFAULT_ID, DEFAULT_NAME, DEFAULT_CATEGORY,
                    DEFAULT_PRICE, DEFAULT_IMAGE, DEFAULT_DESCRIPTION));
            this.props.setLoadingStatus(false);
        }
    }
})

const ComposedEditableProductView = compose<IEditableProductViewSmartProps, IOwnPropsEditableView>(
    connect(mapStateToProps, mapDispatchToProps),
    myHandlers,
    onComponentDidMount,
    loadingIndicator,
) (EditableProductViewDumb);

export default ComposedEditableProductView;
