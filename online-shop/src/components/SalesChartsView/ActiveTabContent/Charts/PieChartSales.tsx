import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { TEN, ZERO } from '../../../../util/util';

interface IPieChartProps {
    yAxisLabels: string[];
    values: number[];
}

interface PieItem {
    name: string;
    y: number;
}

const PieChart: React.FC<IPieChartProps> = (props: IPieChartProps) => {

    const pieItems: PieItem[] = props.yAxisLabels.map((yLabel, index) => {
        return { 
            name: yLabel,
            y: props.values[index],
        };
    })

    const chartOptions: Highcharts.Options = {
        
        tooltip: {
            formatter: function(): string {
                let roundedPercentage: number;
                roundedPercentage = this.percentage === undefined ? ZERO : Math.round(this.percentage * TEN) / TEN;
                return this.series.name + 
                        "<br>" + this.point.name + ": <b>" + this.y + " - " + roundedPercentage + "%</b>";
            },
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                },
                showInLegend: true,
            },
        },
        title: {
            text: "Product Category Sales",
        },
        series: [
            {
                name: "Categories sales",
                type: "pie",
                data: pieItems,
            },
        ],
    };

    return (
        <HighchartsReact highcharts={Highcharts} options={chartOptions}> </HighchartsReact>
    );
}

export default PieChart;
