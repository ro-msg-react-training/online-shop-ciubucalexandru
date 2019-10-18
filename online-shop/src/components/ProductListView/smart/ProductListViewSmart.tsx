import React from 'react';
import { ProductDTOArray } from '../../../model/model';
import { connect } from 'react-redux'
import { setLoadingList, getProductsRequest } from '../../../actions/ProductListActions';
import { AppState } from '../../../store/store';
import { ProductListViewDumb } from '../dumb/ProductListViewDumb';
import { LoadingIndicator } from '../../../util/LoadingIndicator/LoadingIndicator';
import { Dispatch } from 'redux';
import { ErrrorMessageLabel } from '../../../util/ErrorMessageLabel/ErrorMessageLabel';

interface ListViewProps {
    isLoading: boolean;
    hasError: boolean;
    productDTOArray: ProductDTOArray;
    getProductsRequest: () => void;
    setLoadingStatus: (loadingStatus: boolean) => void;
}

class ProductListViewSmart extends React.Component<ListViewProps> {

    public componentDidMount() {
        this.props.getProductsRequest();
    }

    public render () {
        if (this.props.isLoading) {
            return (
                <LoadingIndicator />
            );
        } else if (this.props.hasError) {
            return (
                <ErrrorMessageLabel errorMessage={RETRIEVE_PRODUCTS_ERROR} />
            );
        }

        return (
            <ProductListViewDumb {...this.props.productDTOArray}/>
        );
    }
};

const RETRIEVE_PRODUCTS_ERROR = "An error occured while retrieving the products!";

const mapStateToProps = (state: AppState) => {
    return {
        productDTOArray: state.productsList.productArray,
        isLoading: state.productsList.isLoading,
        hasError: state.productsList.hasError,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getProductsRequest: () => dispatch(getProductsRequest()),
        setLoadingStatus: (loadingStatus: boolean) => dispatch(setLoadingList(loadingStatus)),
    }
}

const InitializedListView = connect(
    mapStateToProps,
    mapDispatchToProps,
) (ProductListViewSmart);

export default InitializedListView;
