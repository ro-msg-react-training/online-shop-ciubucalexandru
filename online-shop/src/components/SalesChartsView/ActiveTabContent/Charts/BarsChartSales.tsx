import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface IBarsChartProps {
    xAxisLabels: string[];
    values: number[];
}

const BarsChart: React.FC<IBarsChartProps> = (props: IBarsChartProps) => {

    const chartOptions: Highcharts.Options = {
        xAxis: {
            categories: props.xAxisLabels,
        },
        title: {
            text: "Product Category Sales",
        },
        series: [
            {
                name: "Categories sales",
                color: "#A01441",
                type: "bar",
                data: props.values,
            },
        ],
    };

    return (
        <HighchartsReact highcharts={Highcharts} options={chartOptions}></HighchartsReact>
    );
}

export default BarsChart;
