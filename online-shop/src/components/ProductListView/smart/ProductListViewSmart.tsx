import { ProductDTOArray } from '../../../model/model';
import { connect } from 'react-redux'
import { setLoadingList, getProductsRequest } from '../../../actions/ProductListActions';
import { AppState } from '../../../store/store';
import { ProductListViewDumb } from '../dumb/ProductListViewDumb';
import { Dispatch } from 'redux';
import { withHandlers, compose, lifecycle } from 'recompose';
import loadingIndicatorHoc from '../../../hocs/LoadingIndicatorHoc';

export interface ListViewProps {
    isLoading: boolean;
    hasError: boolean;
    productDTOArray: ProductDTOArray;
    dispatch: Dispatch;
    getProductsRequest: (props: ListViewProps) => void;
    setLoadingStatus: (props: ListViewProps) => void;
}

export interface WithNewLoadingStatus extends ListViewProps {
    newLoadingStatus: boolean;
}

const mapStateToProps = (state: AppState) => {
    return {
        productDTOArray: state.productsList.productArray,
        isLoading: state.productsList.isLoading,
        hasError: state.productsList.hasError,
    }
}

const myHandlers = withHandlers({
    getProductsRequest: (props: ListViewProps) => (event: any) => {
        props.dispatch(getProductsRequest());
    },
    setLoadingStatus: (props: WithNewLoadingStatus) => (event: any) => {
        props.dispatch(setLoadingList(props.newLoadingStatus));
    },
})

const onComponentDidMount = lifecycle<ListViewProps, {}, {}>({
    componentDidMount() {
        this.props.getProductsRequest(this.props);
    },
})

const ComposedListView = compose<ListViewProps, {}>(
    connect(mapStateToProps),
    myHandlers,
    onComponentDidMount,
    loadingIndicatorHoc,
) (ProductListViewDumb);

export default ComposedListView;
