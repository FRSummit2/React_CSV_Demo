import React from 'react'
import { NavLink } from 'react-router-dom'
// import test_html from './test.html'

const ChartPlotly = () => {

    return (
        <div className="container-fluid p-0">
            <div className="header p-3">
                <NavLink exact to="/">Back to Home</NavLink>
            </div>
            {/* <iframe src={test_html}></iframe> */}
            <iframe src="https://www.youtube.com/watch?v=Yx14hfgrcew"></iframe>
            {/* <div dangerouslySetInnerHTML={{ __html: test_html}} /> */}
            {/* <div dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.youtube.com/watch?v=Yx14hfgrcew' />"}} /> */}
            {/* <iframe src="https://frsummit.herokuapp.com" title="W3Schools Free Online Web Tutorials"></iframe> */}

            {/* ---- PLOTLY JS ---- */}
        </div>
    );
}

export default ChartPlotly;


// npm install react-plotly.js plotly.js