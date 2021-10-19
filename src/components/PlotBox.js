import React from 'react'
import Histogram from 'react-chart-histogram';

class Plot extends React.Component {
    render() {
        const labels = ['2016', '2017', '2018'];
        const data = [324, 45, 672];
        const options = { fillColor: '#FFFFFF', strokeColor: '#0000FF' };
        return (
            <div>
                <Histogram
                    xLabels={labels}
                    yValues={data}
                    width='400'
                    height='200'
                    options={options}
                />
            </div>
        )
    }
}

export default Plot