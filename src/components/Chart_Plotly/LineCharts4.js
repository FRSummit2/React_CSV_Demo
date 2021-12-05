import React from 'react';

import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

class LineCharts2 extends React.Component {

    render() {
        var trace1 = {
            type: 'scatter',
            x: [1, 2, 3, 4],
            y: [10, 15, 13, 17],
            mode: 'lines',
            name: 'Red',
            line: {
                color: 'rgb(219, 64, 82)',
                width: 3
            }
        };

        var trace2 = {
            type: 'scatter',
            x: [1, 2, 3, 4],
            y: [12, 9, 15, 12],
            mode: 'lines',
            name: 'Blue',
            line: {
                color: 'rgb(55, 128, 191)',
                width: 1
            }
        };

        var layout = {
            title: 'Styling Line Plot',
            width: 500,
            height: 500
        };

        return (
            <div className="plotly-js-2">
                <Plot
                    data={[trace1, trace2]}
                    layout={layout}
                />
            </div>
        );
    }
}

export default LineCharts2