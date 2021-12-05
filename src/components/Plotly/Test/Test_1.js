import React from 'react';

import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

class Test_1 extends React.Component {
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

export default Test_1