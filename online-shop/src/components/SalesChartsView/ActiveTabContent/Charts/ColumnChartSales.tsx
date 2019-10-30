import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface IColumnChartProps {
    xAxisLabels: string[],
    values: number[];
}

const ColumnChart: React.FC<IColumnChartProps> = (props: IColumnChartProps) => {

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
                type: "column",
                data: props.values,
            },
        ],
    }

    return (
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    );
}

export default ColumnChart;
