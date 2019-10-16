import React from 'react';
import { ProductDTOArray } from '../../../model/model';
import { API_PRODUCTS } from '../../../util/API';
import { connect } from 'react-redux'
import { setProductsList, setLoadingList } from '../../../actions/ProductListActions';
import { AppState } from '../../../store/store';
import { ProductListViewDumb } from '../dumb/ProductListViewDumb';
import { LoadingIndicator } from '../../../util/LoadingIndicator/LoadingIndicator';

interface ListViewProps {
    productDTOArray: ProductDTOArray;
    isLoading: boolean;
    setProductsList: (products: ProductDTOArray) => void;
    setLoadingStatus: (loadingStatus: boolean) => void;
}

class ProductListViewSmart extends React.Component<ListViewProps> {

    async componentDidMount() {
        await this.retrieveProductsList();
    }

    private async retrieveProductsList() {
        let productArray: ProductDTOArray = new ProductDTOArray([]);
        let response = await fetch(API_PRODUCTS);
        let data = await response.json();
    
        productArray = new ProductDTOArray(data);
        this.props.setProductsList(productArray);
        this.props.setLoadingStatus(false);
    }

    render () {
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
        isLoading: state.productsList.isLoading
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setProductsList: (productArray: ProductDTOArray) =>  dispatch(setProductsList(productArray)),
        setLoadingStatus: (loadingStatus: boolean) => dispatch(setLoadingList(loadingStatus))
    }
}

const InitializedListView = connect(
    mapStateToProps,
    mapDispatchToProps
) (ProductListViewSmart);

export default InitializedListView;