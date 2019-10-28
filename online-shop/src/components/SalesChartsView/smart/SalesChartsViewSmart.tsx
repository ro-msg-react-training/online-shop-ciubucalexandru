import React from 'react';
import { ChartTab, ProductDTOArray, SalesData } from '../../../model/model';
import { LoadingIndicator } from '../../../util/LoadingIndicator/LoadingIndicator';
import { ErrrorMessageLabel } from '../../../util/ErrorMessageLabel/ErrorMessageLabel';
import { AppState } from '../../../store/store';
import { Dispatch } from 'redux';
import { setLoadingCharts, getSalesRequest, changeActiveTab, getAllProductsRequest } from '../../../actions/SalesChartsActions';
import { connect } from 'react-redux';
import SalesChartsViewDumb from '../dumb/SalesChartsViewDumb';

interface ISalesViewSmartProps {
    salesData: SalesData[];
    isLoading: boolean;
    hasError: boolean;
    tabs: ChartTab[];
    productDTOArray: ProductDTOArray;
    setLoadingStatus: (loadingStatus: boolean) => void;
    getSalesDataRequest: () => void;
    setActiveTab: (newTab: string) => void;
    getAllProducts: () => void;
}

class SalesChartsViewSmart extends React.Component<ISalesViewSmartProps> {

    public componentDidMount() {
        this.props.getSalesDataRequest();
        this.props.getAllProducts();
    }

    public render() {

        if (this.props.isLoading) {
            return (
                <LoadingIndicator />
            );
        } else if (this.props.hasError) {
            return (
                <ErrrorMessageLabel errorMessage={GET_SALES_DATA_ERROR}/>
            );
        }
    
        return (
            <SalesChartsViewDumb salesData={this.props.salesData} 
                activateTab={(e) => this.props.setActiveTab(e)}
                tabs={this.props.tabs}
                productDTOArray={this.props.productDTOArray}
            />
        )
    }
}

const GET_SALES_DATA_ERROR = "An error occured while retrieving the sales data.";

const mapStateToProps = (state: AppState) => {
    return {
        salesData: state.salesCharts.salesData,
        isLoading: state.salesCharts.isLoading,
        hasError: state.salesCharts.hasError,
        tabs: state.salesCharts.tabs,
        productDTOArray: state.salesCharts.productDTOArray,
    };
}

const mapDispatchToProsp = (dispatch: Dispatch) => {
    return {
        setLoadingStatus: (loadingStatus: boolean) => dispatch(setLoadingCharts(loadingStatus)),
        getSalesDataRequest: () => dispatch(getSalesRequest()),
        setActiveTab: (newTab: string) => dispatch(changeActiveTab(newTab)),
        getAllProducts: () => dispatch(getAllProductsRequest()),
    };
}

const SalesChartsView = connect(
    mapStateToProps,
    mapDispatchToProsp,
) (SalesChartsViewSmart);

export default SalesChartsView;
