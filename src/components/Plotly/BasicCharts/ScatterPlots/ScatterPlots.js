import React from 'react';

import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

class ScatterPlots extends React.Component {

    render() {
        let trace1 = {
            x: [1, 2, 3, 4],
            y: [10, 15, 13, 17],
            mode: 'markers',
            type: 'scatter'
        };

        let trace2 = {
            x: [2, 3, 4, 5],
            y: [16, 5, 11, 9],
            mode: 'lines',
            type: 'scatter'
        };

        let trace3 = {
            x: [1, 2, 3, 4],
            y: [12, 9, 15, 12],
            mode: 'lines+markers',
            type: 'scatter'
        };

        return (
            <div className="plotly-js-2">
                <Plot
                    data={[ trace1, trace2, trace3 ]}
                    layout={{ title: 'Line and Scatter Plot' }}
                    // layout={{ width: 620, height: 440, title: 'A Fancy Plot' }}
                />
            </div>
        );
    }
}

export default ScatterPlots