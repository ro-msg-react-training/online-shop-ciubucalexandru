import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

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

    let chartOptions: Highcharts.Options = {
        
        tooltip: {
            formatter: function() {
                let roundedPercentage: number;
                roundedPercentage = this.percentage === undefined ? 0 : Math.round(this.percentage * 10) / 10;
                return this.series.name + 
                        "<br>" + this.point.name + ": <b>" + this.y + " - " + roundedPercentage + "%</b>";
            }
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
            }
        ],
    };

    return (
        <HighchartsReact highcharts={Highcharts} options={chartOptions}> </HighchartsReact>
    );
}

export default PieChart;
