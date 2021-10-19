import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid } from 'recharts';
import Chart from "react-google-charts";

const ScatterPlot = () => {

    // Sample data
    const data = [
        { x: 1, y: 23 },
        { x: 2, y: 3 },
        { x: 3, y: 15 },
        { x: 4, y: 35 },
        { x: 5, y: 45 },
        { x: 6, y: 25 },
        { x: 7, y: 17 },
        { x: 8, y: 32 },
        { x: 9, y: 43 },
    ];

    return (
        <>
            <ScatterChart width={400} height={400}>
                <CartesianGrid />
                <XAxis type="number" dataKey="x" />
                <YAxis type="number" dataKey="y" />
                <Scatter data={data} fill="green" />
            </ScatterChart>
            
            <Chart
                width={'600px'}
                height={'400px'}
                chartType="ScatterChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Age', 'Weight'],
                    [8, 12],
                    [4, 5.5],
                    [11, 14],
                    [4, 5],
                    [3, 3.5],
                    [6.5, 7],
                ]}
                options={{
                    title: 'Age vs. Weight comparison',
                    hAxis: { title: 'Age', minValue: 0, maxValue: 15 },
                    vAxis: { title: 'Weight', minValue: 0, maxValue: 15 },
                    legend: 'none',
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </>
    );
}

export default ScatterPlot;