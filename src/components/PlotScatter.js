import React from 'react';
// import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid } from 'recharts';
import Chart from "react-google-charts";

const ScatterPlot = (props) => {

    // Sample data
    // const data = [
    //     { x: 1, y: 23 },
    //     { x: 2, y: 3 },
    //     { x: 3, y: 15 },
    //     { x: 4, y: 35 },
    //     { x: 5, y: 45 },
    //     { x: 6, y: 25 },
    //     { x: 7, y: 17 },
    //     { x: 8, y: 32 },
    //     { x: 9, y: 43 },
    // ];

    let arr_data = props.scatterData ? 
                        (
                            props.scatterData.data[0]
                        ) : 
                        [
                            ['Age', 'Weight'],
                            [8, 12],
                            [4, 5.5],
                            [11, 14],
                            [4, 5],
                            [3, 3.5],
                            [6.5, 7],
                            [20, 15],
                        ]

    return (
        <>
            <div>
                <Chart
                    width={'calc(100%)'}
                    height={'400px'}
                    chartType="ScatterChart"
                    loader={<div>Loading Chart</div>}
                    data={arr_data}
                    options={{
                        title: (props.scatterData ? props.scatterData.x_axis_title : 'Age') + ' vs. ' + (props.scatterData ? props.scatterData.y_axis_title : 'Weight') + ' comparison',
                        hAxis: { 
                            title: (props.scatterData ? props.scatterData.x_axis_title : 'Age'), 
                            minValue: 0, 
                            maxValue: (props.scatterData ? props.scatterData.x_axis_max_val : 15) 
                        },
                        vAxis: { 
                            title: (props.scatterData ? props.scatterData.y_axis_title : 'Weight'), 
                            minValue: 0, 
                            maxValue: (props.scatterData ? props.scatterData.x_axis_max_val : 15) },
                        legend: 'none',
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
            </div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary">Download PDF</button>
            </div>
        </>
    );
}

export default ScatterPlot;