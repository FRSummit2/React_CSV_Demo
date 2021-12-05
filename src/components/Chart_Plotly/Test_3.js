import React from 'react';

import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

class Test_3 extends React.Component {
    render() {
        return (
            <div className="plotly-js-test-3">
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
                    layout={{
                        'geo': {
                            'scope': 'europe',
                            'resolution': 50
                        }
                    }}
                />
            </div>
        );
    }
}

export default Test_3