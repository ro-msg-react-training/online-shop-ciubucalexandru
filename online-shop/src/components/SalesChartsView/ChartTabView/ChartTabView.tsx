import React from 'react';
import { ChartTab } from '../../../model/model';

interface IChartTabViewProps {
    chartTab: ChartTab;
    activateTab: (name: string) => void;
}

export const ChartTabView: React.FC<IChartTabViewProps> = (props: IChartTabViewProps) => {

    let activeClass = props.chartTab.active ? "is-active" : "";

    return (
        <li className={activeClass} onClick={() => props.activateTab(props.chartTab.name)}>
            <a>
                <span >{props.chartTab.name}</span>
            </a>
        </li>
    );
}
