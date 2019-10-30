import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMaps from 'highcharts/modules/map';

const MapChart: React.FC = () => {

    HighchartsMaps(Highcharts);
    const shownMap = require('@highcharts/map-collection/custom/world-continents.geo.json');

    const chartOptions: Highcharts.Options = {
        chart: {
            map: shownMap,
            height: "50%",
        },
        title: {
            text: 'Highmaps basic demo',
        },
        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom',
            },
        },
        colorAxis: {
            min: 0,
            
        },
        series: [{
            data: [
                ['eu', 0],
                ['oc', 1],
                ['af', 2],
                ['as', 3],
                ['na', 4],
                ['sa', 5],
            ],
            type: "map",
            name: "Not so random data",
            states: {
                hover: {
                    color: '#A01441',
                },
            },
            dataLabels: {
                enabled: false,
                format: '{point.name}',
            },
        }],
    }

    return (
        <HighchartsReact highcharts={Highcharts} options={chartOptions} ></HighchartsReact>
    );
}

export default MapChart;
