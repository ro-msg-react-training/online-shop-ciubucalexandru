import React from 'react';
import { SalesData } from '../../../../model/model';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartDrilldown from 'highcharts/modules/drilldown';
import HighchartsData from 'highcharts/modules/data';

interface IDrilldownProps {
    yAxisLabels: string[];
    categoriesData: number[];
    drilldownData: Map<string, SalesData[]>;
}

interface ICategoryData {
    name: string;
    y: number;
    drilldown: string;
}

const Drilldown: React.FC<IDrilldownProps> = (props: IDrilldownProps) => {

    HighchartsData(Highcharts);
    HighchartDrilldown(Highcharts);

    const chartOptions: Highcharts.Options = {
        chart: {
            height: "35%",
        },
        title: {
            text: "Product Category Sales",
        },
        series: [
            {
                name: "Categories sales",
                type: "pie",
                data: mapPropsToSeries(props.yAxisLabels, props.categoriesData),
            },
        ],
        drilldown: {
            series: mapPropsToDrilldownData(props.drilldownData),
        }
    };
    
    return (
        <HighchartsReact highcharts={Highcharts} options={chartOptions} ></HighchartsReact>
    );
}

const mapPropsToSeries = (labels: string[], values: number[]): ICategoryData[] => {

    const returnData: ICategoryData[] = [];

    labels.forEach((label, index) => {
        returnData.push({
            name: label,
            y: values[index],
            drilldown: label,
        });
    })

    return returnData;
}

const mapPropsToDrilldownData = (drilldownData: Map<string, SalesData[]>) => {

    const returnData: any[] = [];

    drilldownData.forEach((value, key) => {
        returnData.push({
            name: key,
            id: key,
            data: mapValueTo2D(value),
            type: "pie",
        });
    })

    return returnData;
}

const mapValueTo2D = (values: SalesData[]) => {
    return values.map((salesData) => [ salesData.category, salesData.sales as number]);
}

export default Drilldown;
