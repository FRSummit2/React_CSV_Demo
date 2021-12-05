import React from 'react';
import { NavLink } from 'react-router-dom';

import AnimatingData from './Animations/AnimatingData';

class Animations extends React.Component {
    render() {
        return (
            <div className="plotly-js-2">
                <div className="header p-3">
                    <NavLink exact to="/">Back to Home</NavLink>
                </div>

                <div className="grid-container mt-4 p-1 mb-5">
                    <ul className="nav nav-tabs nav-justified" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="animation-data-tab" data-toggle="tab" href="#animation-data" role="tab" aria-controls="animation-data" aria-selected="false">Animating Data</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="animation-layout-tab" data-toggle="tab" href="#animation-layout" role="tab" aria-controls="animation-layout" aria-selected="false">Animating Layout</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="name-frame-tab" data-toggle="tab" href="#name-frame" role="tab" aria-controls="name-frame" aria-selected="false">Named Frames</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" id="sequences-frame-tab" data-toggle="tab" href="#sequences-frame" role="tab" aria-controls="sequences-frame" aria-selected="false">Sequences of Frames</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="quickly-frame-tab" data-toggle="tab" href="#quickly-frame" role="tab" aria-controls="quickly-frame" aria-selected="false">Many Frames Quickly</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="object-constancy-tab" data-toggle="tab" href="#object-constancy" role="tab" aria-controls="object-constancy" aria-selected="false">Object Constancy</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="frame-groups-animation-tab" data-toggle="tab" href="#frame-groups-animation" role="tab" aria-controls="frame-groups-animation" aria-selected="false">Frame Groups and Animation Modes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="slider-tab" data-toggle="tab" href="#slider" role="tab" aria-controls="slider" aria-selected="false">Animating with a Slider</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade text-center show active" id="animation-data" role="tabpanel" aria-labelledby="animation-data-tab">
                            <AnimatingData />
                        </div>
                        <div className="tab-pane fade text-center" id="animation-layout" role="tabpanel" aria-labelledby="animation-layout-tab">
                            Animating the Layout
                        </div>
                        <div className="tab-pane fade text-center" id="name-frame" role="tabpanel" aria-labelledby="name-frame-tab">
                            Defining Named Frames
                        </div>

                        <div className="tab-pane fade text-center" id="sequences-frame" role="tabpanel" aria-labelledby="sequences-frame-tab">
                            Sequences of Frames
                        </div>
                        <div className="tab-pane fade text-center" id="quickly-frame" role="tabpanel" aria-labelledby="quickly-frame-tab">
                            Many Frames Quickly
                        </div>
                        <div className="tab-pane fade text-center" id="object-constancy" role="tabpanel" aria-labelledby="object-constancy-tab">
                            Object Constancy
                        </div>
                        <div className="tab-pane fade text-center" id="frame-groups-animation" role="tabpanel" aria-labelledby="frame-groups-animation-tab">
                            Frame Groups and Animation Modes
                        </div>
                        <div className="tab-pane fade text-center" id="slider" role="tabpanel" aria-labelledby="slider-tab">
                            Animating with a Slider
                        </div>
                    </div>
                </div>




                {/* <Plot
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
                    layout = {{
                        'geo': {
                            'scope': 'europe',
                            'resolution': 50
                        }
                    }}
                /> */}
            </div>
        );
    }
}

export default Animations