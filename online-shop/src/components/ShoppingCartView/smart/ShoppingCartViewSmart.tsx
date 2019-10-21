import { ProductArray, OrderDTO } from '../../../model/model';
import { AppState } from '../../../store/store';
import { connect } from 'react-redux';
import { setLoadingCart, createOrderRequest, clearCreateOrderStatus } from '../../../actions/ShoppingCartActions';
import { Dispatch } from 'redux';
import { compose, lifecycle } from 'recompose';
import loadingIndicator from '../../../hocs/LoadingIndicatorHoc';
import { ShoppingCartViewDumb } from '../dumb/ShoppingCartViewDumb';

export interface IShoppingCartViewProps {
    shoppingCartArray: ProductArray;
    isLoading: boolean;
    createOrderStatus: string;
    createOrder: (orderDTO: OrderDTO) => void;
    setLoadingStatus: (loadingStatus: boolean) => void;
    clearCreateOrderStatus: () => void;
    generateOrder: (props: IShoppingCartViewProps) => OrderDTO;
    sendOrderRequest: (props: IShoppingCartViewProps) => void;
}

const mapStateToProps = (state: AppState) => {
    return {
        shoppingCartArray: state.shoppingCart.productArray,
        isLoading: state.shoppingCart.isLoading,
        createOrderStatus: state.shoppingCart.createOrderStatus,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return ({
        createOrder: (orderDTO: OrderDTO) => dispatch(createOrderRequest(orderDTO)),
        setLoadingStatus: (loadingStatus: boolean) => dispatch(setLoadingCart(loadingStatus)),
        clearCreateOrderStatus: () => dispatch(clearCreateOrderStatus()),
    })
}

const onComponentDidMount = lifecycle<IShoppingCartViewProps, {}, {}>({
    componentDidMount() {
        this.props.setLoadingStatus(false);
        this.props.clearCreateOrderStatus();
    },
})  

const ComposedShoppingCart = compose<IShoppingCartViewProps, {}>(
    connect(mapStateToProps, mapDispatchToProps),
    onComponentDidMount,
    loadingIndicator,
) (ShoppingCartViewDumb);

export default ComposedShoppingCart;
