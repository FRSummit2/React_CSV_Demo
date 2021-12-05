import React from 'react';
// import Plot from 'react-plotly.js';

// import createPlotlyComponent from 'react-plotly.js/factory';
// const Plotly = window.Plotly;
// const Plot = createPlotlyComponent(Plotly);

/*import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);*/

import Test_1 from './Chart_Plotly/Test_1';
import Test_2 from './Chart_Plotly/Test_2';
import Test_3 from './Chart_Plotly/Test_3';

import ScatterPlots from './Chart_Plotly/ScatterPlots';

class ChartPlotly2 extends React.Component {
    render() {
        return (
            <div className="plotly-js-2">


                <div className="grid-container mt-4 p-1 mb-5">
                    <ul className="nav nav-tabs nav-justified" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="test-tab" data-toggle="tab" href="#test" role="tab" aria-controls="test" aria-selected="true">Test</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="scatter-tab" data-toggle="tab" href="#scatter" role="tab" aria-controls="scatter" aria-selected="true">Scatter</a>
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

export default ChartPlotly2



// https://stackoverflow.com/questions/65866399/getting-an-out-of-memory-error-while-using-create-react-app-and-plotly-js
// https://github.com/plotly/react-plotly.js/issues/135