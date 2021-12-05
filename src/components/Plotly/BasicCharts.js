import React from 'react';
import { NavLink } from 'react-router-dom'
// import Plot from 'react-plotly.js';

// import createPlotlyComponent from 'react-plotly.js/factory';
// const Plotly = window.Plotly;
// const Plot = createPlotlyComponent(Plotly);

/*import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);*/

import Test_1 from './Test/Test_1';
import Test_2 from './Test/Test_2';
import Test_3 from './Test/Test_3';

import ScatterPlots from './BasicCharts/ScatterPlots/ScatterPlots';

import LineCharts from './BasicCharts/LineChart/LineCharts';
import LineCharts2 from './BasicCharts/LineChart/LineCharts2';
import LineCharts3 from './BasicCharts/LineChart/LineCharts3';
import LineCharts4 from './BasicCharts/LineChart/LineCharts4';
import LineCharts5 from './BasicCharts/LineChart/LineCharts5';
import LineCharts6 from './BasicCharts/LineChart/LineCharts6';
import LineCharts7 from './BasicCharts/LineChart/LineCharts7';
import LineCharts8 from './BasicCharts/LineChart/LineCharts8';
import LineCharts9 from './BasicCharts/LineChart/LineCharts9';
import LineCharts10 from './BasicCharts/LineChart/LineCharts10';

class BasicCharts extends React.Component {
    render() {
        return (
            <div className="plotly-js-2">
                <div className="header p-3">
                    <NavLink exact to="/">Back to Home</NavLink>
                </div>
                <div className="grid-container mt-4 p-1 mb-5">
                    <ul className="nav nav-tabs nav-justified" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="test-tab" data-toggle="tab" href="#test" role="tab" aria-controls="test" aria-selected="true">Test</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="scatter-tab" data-toggle="tab" href="#scatter" role="tab" aria-controls="scatter" aria-selected="true">Scatter</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="line-chart-tab" data-toggle="tab" href="#line-chart" role="tab" aria-controls="line-chart" aria-selected="true">Line Chart</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="box-tab" data-toggle="tab" href="#box" role="tab" aria-controls="box" aria-selected="false">Box</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="histogram-tab" data-toggle="tab" href="#histogram" role="tab" aria-controls="histogram" aria-selected="false">Histogram</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade text-left show active" id="test" role="tabpanel" aria-labelledby="test-tab">
                            <Test_1 />
                            <Test_2 />
                            <Test_3 />
                        </div>
                        <div className="tab-pane fade text-left show" id="scatter" role="tabpanel" aria-labelledby="scatter-tab">
                            <ScatterPlots />
                        </div>
                        <div className="tab-pane fade text-left show" id="line-chart" role="tabpanel" aria-labelledby="line-chart-tab">
                            <LineCharts />
                            <LineCharts2 />
                            <LineCharts3 />
                            <LineCharts4 />
                            <LineCharts5 />
                            <LineCharts6 />
                            <LineCharts7 />
                            <LineCharts8 />
                            <LineCharts9 />
                            <LineCharts10 />
                        </div>
                        <div className="tab-pane fade text-center" id="box" role="tabpanel" aria-labelledby="box-tab">
                            Box
                        </div>
                        <div className="tab-pane fade text-right" id="histogram" role="tabpanel" aria-labelledby="histogram-tab">
                            Histogram
                        </div>
                    </div>
                </div>




                {/* <Plot
                    data={[
                        {
                            x: [1, 2, 3],
                            y: [2, 6, 3],
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: { color: 'red' },
                        },
                        { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
                        { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
                        {
                            type: 'bar',
                            x: [1, 2, 3],
                            y: [2, 5, 3]
                        },
                    ]}
                    layout={{ width: 620, height: 440, title: 'A Fancy Plot' }}
                />


                <Plot
                    data={[
                        {
                            type: 'bar',
                            x: ['one', 'two', 'three'],
                            y: [29, 155, 85],
                            marker: { color: 'rgb(56, 125, 89)' }
                        },
                    ]}
                    layout={{ width: 1000, height: 500, title: 'A Fancy Plot' }}
                />

                <Plot
                    data={[
                        {
                            type: 'scattergeo',
                            mode: 'markers',
                            locations: ['FRA', 'DEU', 'RUS', 'ESP'],
                            marker: {
                                size: [20, 30, 15, 10],
                                color: [10, 20, 40, 50],
                                cmin: 0,
                                cmax: 50,
                                colorscale: 'Greens',
                                colorbar: {
                                    title: 'Some rate',
                                    ticksuffix: '%',
                                    showticksuffix: 'last'
                                },
                                line: {
                                    color: 'black'
                                }
                            },
                            name: 'europe data'
                        }
                    ]}
                    layout = {{
                        'geo': {
                            'scope': 'europe',
                            'resolution': 50
                        }
                    }}
                /> */}
            </div>
        );
    }
}

export default BasicCharts



// https://stackoverflow.com/questions/65866399/getting-an-out-of-memory-error-while-using-create-react-app-and-plotly-js
// https://github.com/plotly/react-plotly.js/issues/135