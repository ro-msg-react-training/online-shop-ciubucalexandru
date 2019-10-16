import React from 'react';
import { ProductDTOArray } from '../../../model/model';
import { API_PRODUCTS } from '../../../util/API';
import { connect } from 'react-redux'
import { setProductsList, setLoadingList } from '../../../actions/ProductListActions';
import { AppState } from '../../../store/store';
import { ProductListViewDumb } from '../dumb/ProductListViewDumb';
import { LoadingIndicator } from '../../../util/LoadingIndicator/LoadingIndicator';
import { Dispatch } from 'redux';

interface ListViewProps {
    isLoading: boolean;
    productDTOArray: ProductDTOArray;
    setProductsList: (products: ProductDTOArray) => void;
    setLoadingStatus: (loadingStatus: boolean) => void;
}

class ProductListViewSmart extends React.Component<ListViewProps> {

    public async componentDidMount() {
        await this.retrieveProductsList();
    }

    private async retrieveProductsList(): Promise<void> {
        const response = await fetch(API_PRODUCTS);
        const data = await response.json();
    
        const productArray: ProductDTOArray = new ProductDTOArray(data);
        this.props.setProductsList(productArray);
        this.props.setLoadingStatus(false);
    }

    public render () {
        if (this.props.isLoading) {
            return (
                <LoadingIndicator />
            )
        }

        return (
            <ProductListViewDumb products={this.props.productDTOArray.products}/>
        );
    }
};

const mapStateToProps = (state: AppState) => {
    return {
        productDTOArray: state.productsList.productArray,
        isLoading: state.productsList.isLoading,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setProductsList: (productArray: ProductDTOArray) =>  dispatch(setProductsList(productArray)),
        setLoadingStatus: (loadingStatus: boolean) => dispatch(setLoadingList(loadingStatus)),
    }
}

const InitializedListView = connect(
    mapStateToProps,
    mapDispatchToProps,
) (ProductListViewSmart);

export default InitializedListView;
