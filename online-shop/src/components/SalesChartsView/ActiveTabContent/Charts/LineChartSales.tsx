import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface ILineChartSalesProps {
    yAxisLabels: string[];
    values: number[];
}

const LineChart: React.FC<ILineChartSalesProps> = (props: ILineChartSalesProps) => {

    const chartOptions: Highcharts.Options = {
        
        xAxis: {
            categories: props.yAxisLabels,
        },
        title: {
            text: "Total Product Sales",
        },
        series: [
            {
                name: "Total sales",
                color: "#A01441",
                type: 'line',
                data: props.values,
            }
        ],
    };

    return (
        <HighchartsReact highcharts={Highcharts} options={chartOptions}></HighchartsReact>
    );
}

export default LineChart;
