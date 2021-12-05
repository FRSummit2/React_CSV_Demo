import React from 'react';

import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

class LineCharts extends React.Component {

    render() {
        let trace1 = {
            x: [1, 2, 3, 4],
            y: [10, 15, 13, 17],
            type: 'scatter'
        };

        let trace2 = {
            x: [1, 2, 3, 4],
            y: [16, 5, 11, 9],
            type: 'scatter'
        };

        return (
            <div className="plotly-js-2">
                <Plot
                    data={[trace1, trace2]}
                    layout={{ title: 'Basic Line Plot' }}
                />
            </div>
        );
    }
}

export default LineCharts