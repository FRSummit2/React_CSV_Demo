import React from 'react';
// import Plot from 'react-plotly.js';

// import createPlotlyComponent from 'react-plotly.js/factory';
// const Plotly = window.Plotly;
// const Plot = createPlotlyComponent(Plotly);

import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

class ChartPlotly2 extends React.Component {
    render() {
        return (
            <div className="plotly-js-2">
                <Plot
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
            </div>
        );
    }
}

export default ChartPlotly2




// https://github.com/plotly/react-plotly.js/issues/135