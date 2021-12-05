import React from 'react';

import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

class Test_2 extends React.Component {
    render() {
        return (
            <div className="plotly-js-test-2">
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
            </div>
        );
    }
}

export default Test_2