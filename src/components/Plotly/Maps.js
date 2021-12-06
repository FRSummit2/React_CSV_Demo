import React from 'react';
import { NavLink } from 'react-router-dom'
import CustomTabs from '../common/CustomTabs';
import BasicTile from './Maps/ChoroplethMapbox/BasicTile';

class Maps extends React.Component {

    render() {
        let map_tabs = [
            { name: 'Mapbox Map Layers' },
            { name: 'Mapbox Density Heatmap' },
            { name: 'Choropleth Mapbox' },
            { name: 'Lines on Maps' },
            { name: 'Bubble Maps' },
            { name: 'Scatter Plots on Maps' },
            { name: 'Scatter Plots on Mapbox' },
            { name: 'Choropleth Maps' },
            { name: 'Filled Area on Maps' },
        ]

        return (
            <div className="plotly-js-2">
                <div className="header p-3">
                    <NavLink exact to="/">Back to Home</NavLink>
                </div>

                {/* <CustomTabs tabs={map_tabs}/> */}
                <div className="grid-container mt-4 p-1 mb-5">
                    <ul className="nav nav-tabs nav-justified" role="tablist">
                        {/* <li className="nav-item">
                            <a className="nav-link active" id="test-tab" data-toggle="tab" href="#test" role="tab" aria-controls="test" aria-selected="true">Test</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="scatter-tab" data-toggle="tab" href="#scatter" role="tab" aria-controls="scatter" aria-selected="true">Scatter</a>
                        </li> */}
                        {
                            map_tabs.map((element, index) => (
                                <li className="nav-item" key={index}>
                                    <a className={index === 0 ? 'nav-link active' : 'nav-link'} id={'tab-btn-' + index} data-toggle="tab" href={'#tab-content-' + index} role="tab" aria-controls={'tab-content-' + index} aria-selected="true"><span data-toggle="tooltip" data-placement="top" title={element.name}>Tab {index}</span></a>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="tab-content">
                        {/* <div className="tab-pane fade text-left show active" id="test" role="tabpanel" aria-labelledby="test-tab">
                            Test
                        </div>
                        <div className="tab-pane fade text-left" id="scatter" role="tabpanel" aria-labelledby="scatter-tab">
                            Test
                        </div> */}
                        {
                            map_tabs.map((element, index) => (
                                <div className={index === 0 ? 'tab-pane fade text-left show active' : 'tab-pane fade text-left'} id={'tab-content-' + index} role="tabpanel" aria-labelledby={'tab-btn-' + index} key={index}>
                                    {element.name}
                                    {
                                        index === 0 ? <BasicTile /> : ''
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Maps