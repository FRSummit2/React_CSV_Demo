import React from 'react';

import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

class AnimatingData extends React.Component {

    render() {

        return (
            <div className="plotly-js-2">
                <Plot
                    data={[{
                        x: [1, 2, 3],
                        y: [0, 0.5, 1],
                        line: { simplify: false },
                    }]}
                    // layout={layout}
                />

                <Plot
                    data={
                        [{y: [Math.random(), Math.random(), Math.random()]}]
                    }
                    // layout={layout}
                />
            </div>
        );
    }
}

export default AnimatingData