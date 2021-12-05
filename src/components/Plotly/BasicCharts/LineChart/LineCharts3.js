import React from 'react';

import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

class LineCharts2 extends React.Component {

    render() {
        var trace1 = {
            x: [1, 2, 3, 4],
            y: [10, 15, 13, 17],
            mode: 'markers',
            marker: {
                color: 'rgb(219, 64, 82)',
                size: 12
            }
        };

        var trace2 = {
            x: [2, 3, 4, 5],
            y: [16, 5, 11, 9],
            mode: 'lines',
            line: {
                color: 'rgb(55, 128, 191)',
                width: 3
            }
        };

        var trace3 = {
            x: [1, 2, 3, 4],
            y: [12, 9, 15, 12],
            mode: 'lines+markers',
            marker: {
                color: 'rgb(128, 0, 128)',
                size: 8
            },
            line: {
                color: 'rgb(128, 0, 128)',
                width: 1
            }
        };

        return (
            <div className="plotly-js-2">
                <Plot
                    data={[trace1, trace2, trace3]}
                    layout={{ title: 'Line and Scatter Styling' }}
                />
            </div>
        );
    }
}

export default LineCharts2