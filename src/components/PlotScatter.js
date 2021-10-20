import React from 'react';
import Chart from "react-google-charts";

const ScatterPlot = (props) => {

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
                            maxValue: (props.scatterData ? props.scatterData.x_axis_max_val : 15)
                        },
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