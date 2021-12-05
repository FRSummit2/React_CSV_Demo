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
            name: 'Scatter'
        };

        var trace2 = {
            x: [2, 3, 4, 5],
            y: [16, 5, 11, 9],
            mode: 'lines',
            name: 'Lines'
        };

        var trace3 = {
            x: [1, 2, 3, 4],
            y: [12, 9, 15, 12],
            mode: 'lines+markers',
            name: 'Scatter and Lines'
        };

        var data = [trace1, trace2, trace3];

        var layout = {
            title: 'Title of the Graph / Graph and Axes Titles',
            xaxis: {
                title: 'x-axis title'
            },
            yaxis: {
                title: 'y-axis title'
            }
        };

        return (
            <div className="plotly-js-2">
                <Plot
                    data={[trace1, trace2, trace3]}
                    layout={layout}
                />
            </div>
        );
    }
}

export default LineCharts2