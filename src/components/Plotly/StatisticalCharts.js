import React from 'react';
import { NavLink } from 'react-router-dom'

import SecondDDensityPlots from './StatisticalCharts/SecondDDensityPlots/SecondDDensityPlots'

class StatisticalCharts extends React.Component {
    render() {
        return (
            <div className="plotly-js-2">
                <div className="header p-3">
                    <NavLink exact to="/">Back to Home</NavLink>
                </div>
                <div className="grid-container mt-4 p-1 mb-5">
                    <ul className="nav nav-tabs nav-justified" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="test-tab" data-toggle="tab" href="#test" role="tab" aria-controls="test" aria-selected="true">Test</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="scatter-tab" data-toggle="tab" href="#scatter" role="tab" aria-controls="scatter" aria-selected="true">Scatter</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade text-left show active" id="test" role="tabpanel" aria-labelledby="test-tab">
                            <SecondDDensityPlots />
                        </div>
                        <div className="tab-pane fade text-left" id="scatter" role="tabpanel" aria-labelledby="scatter-tab">
                            2D Histogram Contour Plot with Slider Control
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StatisticalCharts