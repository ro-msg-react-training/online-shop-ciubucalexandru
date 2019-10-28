import React from 'react';
import { ChartTab, ProductDTOArray, SalesData } from '../../../model/model';
import { BAR_CHART, PIE_CHART, LINE_CHART, COLUMN_CHART, DRILLDOWN_CHART, MAP_CHART } from '../../../util/util';
import BarsChart from './Charts/BarsChartSales';
import PieChart from './Charts/PieChartSales';
import LineChart from './Charts/LineChartSales';
import ColumnChart from './Charts/ColumnChartSales';
import Drilldown from './Charts/DrilldownChartSales';
import MapChart from './Charts/MapChartSales';

interface IActiveContentProps {
    salesData: SalesData[];
    tabs: ChartTab[];
    productDTOArray: ProductDTOArray;
}

const ActiveContentView: React.FC<IActiveContentProps> = (props: IActiveContentProps) => {
    
    const labels: string[] = mapDataToLabels(props.salesData);
    const values: number[] = mapDataToValues(props.salesData);
    const activeTab: string = getActiveTab(props.tabs);
    const lineLabels: string[] = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
    ];

    switch (activeTab) {
        case BAR_CHART: {
            return (
                <BarsChart xAxisLabels={labels} values={values} ></BarsChart>
            );
        }
        case PIE_CHART: {
            return (
                <PieChart yAxisLabels={labels} values={values} ></PieChart>
            );
        }
        case LINE_CHART: {
            return (
                <LineChart yAxisLabels={lineLabels} values={generateLineData(props.salesData)} ></LineChart>
            );
        }
        case COLUMN_CHART: {
            return (
                <ColumnChart xAxisLabels={labels} values={values} ></ColumnChart>
            );
        }
        case DRILLDOWN_CHART: {
            return (
                <Drilldown yAxisLabels={labels} categoriesData={values} 
                    drilldownData={generateDrilldownMap(props.productDTOArray, props.salesData)} ></Drilldown>
            );
        }
        case MAP_CHART: {
            return (
                <MapChart ></MapChart>
            );
        }
        default: {
            return (
                <BarsChart xAxisLabels={labels} values={values} ></BarsChart>
            );
        }
    }
}

const generateLineData = (salesData: SalesData[]): number[] => {
    const newData: number[] = [];
    let sum = 0;
    salesData.forEach((saleData) => sum += saleData.sales);

    newData.push(parseFloat(sum.toFixed(2)));
    newData.push(parseFloat((sum + 10/100 * sum).toFixed(2)));
    newData.push(parseFloat((sum + 30/100 * sum).toFixed(2)));
    newData.push(parseFloat((2 * sum).toFixed(2)));
    newData.push(parseFloat((sum / 2).toFixed(2)));

    return newData;
}

const mapDataToLabels = (salesData: SalesData[]): string[] => {
    return salesData.map((data) => data.category);
}

const mapDataToValues = (salesData: SalesData[]): number[] => {
    return salesData.map((data) => data.sales);
}

const getActiveTab = (tabs: ChartTab[]): string => {
    let activeTab: string = tabs[0].name;
    
    tabs.forEach((tab) => {
        if (tab.active) {
            activeTab = tab.name;
            return;
        }
    })

    return activeTab;
}

const getProductsOfCategory = (categoryName: string, allProducts: ProductDTOArray): ProductDTOArray => {
    const productsOfCategory: ProductDTOArray = new ProductDTOArray([]);

    allProducts.products.forEach((product) => {
        if (product.category === categoryName) {
            productsOfCategory.products.push(product);
        }
     })

     return productsOfCategory;
}

const getCategoryTotalSales = (categoryName: string, salesData: SalesData[]): number => {
    
    let totalSales: number = 0;
    salesData.forEach((data) => {
        if (data.category === categoryName) {
            totalSales = data.sales;
        }
    });

    return totalSales;
}

const generateDrilldownCategory = (
        categoryName: string, 
        productDTOArray: ProductDTOArray, 
        salesData: SalesData[]
    ): SalesData[] => {

    const productsOfCategory: ProductDTOArray = getProductsOfCategory(categoryName, productDTOArray);
    const totalCategorySales = getCategoryTotalSales(categoryName, salesData);
    const chartData: SalesData[] = [];
    
    let currentPercentage = 100;
    const productsLength: number = productsOfCategory.products.length;

    for (let i = 0; i < productsLength; i++) {

        if (i === productsLength - 1) {
            chartData.push(new SalesData(
                productsOfCategory.products[i].name,
                (currentPercentage/100) * totalCategorySales));
            break;
        }

        const generatedPercentage = Math.floor(Math.random() * (currentPercentage/2));
        
        chartData.push(new SalesData(
            productsOfCategory.products[i].name,
            (generatedPercentage/100) * totalCategorySales)
        );
        currentPercentage = currentPercentage - generatedPercentage;
    }
    
    return chartData;
}

const generateDrilldownMap = (productDTOArray: ProductDTOArray, salesData: SalesData[]) => {

    let drilldownMap: Map<string, SalesData[]> = new Map();
    
    salesData.forEach((data) => {
        const categoryData: SalesData[] = generateDrilldownCategory(data.category, productDTOArray, salesData);

        drilldownMap = drilldownMap.set(data.category, categoryData);
    });

    return drilldownMap;
}

export default ActiveContentView;
