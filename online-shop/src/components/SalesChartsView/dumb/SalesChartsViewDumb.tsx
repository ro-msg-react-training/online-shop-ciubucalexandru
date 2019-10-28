import React from 'react';
import { SalesData, ChartTab, ProductDTOArray } from '../../../model/model';
import { ChartTabView } from '../ChartTabView/ChartTabView';
import ActiveContentView from '../ActiveTabContent/ActiveContentView';
import './SalesChartsViewDumb.scss';

interface ISalesViewDumbProps {
    salesData: SalesData[];
    tabs: ChartTab[];
    productDTOArray: ProductDTOArray;
    activateTab: (name: string) => void;
}

const SalesChartsViewDumb: React.FC<ISalesViewDumbProps> = (props: ISalesViewDumbProps) => {

    const mappedTabs = props.tabs.map((tab) => 
        <ChartTabView key={tab.name} chartTab={tab} activateTab={(e) => props.activateTab(e)}/>,
    );

    return (
        <div>
            <div className="tabs is-boxed is-centered tabsOptions">
                <ul>
                    {mappedTabs}
                </ul>
            </div>
            <ActiveContentView salesData={props.salesData} tabs={props.tabs} productDTOArray={props.productDTOArray}/>
        </div>
    );
}

export default SalesChartsViewDumb;
