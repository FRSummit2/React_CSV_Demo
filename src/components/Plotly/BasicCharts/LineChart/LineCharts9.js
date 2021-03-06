import React from 'react';

import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

class LineCharts2 extends React.Component {

    render() {
        var trace1 = {
            x: [1, 2, 3, 4, 5, 6, 7, 8],
            y: [10, 15, null, 17, 14, 12, 10, null, 15],
            mode: 'lines+markers',
            connectgaps: true
        };

        var trace2 = {
            x: [1, 2, 3, 4, 5, 6, 7, 8],
            y: [16, null, 13, 10, 8, null, 11, 12],
            mode: 'lines',
            connectgaps: true
        };

        var layout = {
            title: 'Connect the Gaps Between Data',
            showlegend: false
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