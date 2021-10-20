import React from 'react'
import Histogram from 'react-chart-histogram';

class PlotHistogram extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let labels = this.props.histogramData ? this.props.histogramData.labels : ['2016', '2017', '2018', '2019'];
        let data = this.props.histogramData ? this.props.histogramData.data : [324, 45, 672, 1000];
        let options = { fillColor: '#FFFFFF', strokeColor: '#0000FF' };

        return (
            <>
                <div className="histogram d-flex justify-content-center mt-3 mb-5">
                    <Histogram
                        xLabels={labels}
                        yValues={data}
                        width='400'
                        height='200'
                        options={options}
                    />
                </div>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary">Download PDF</button>
                </div>
            </>
        )
    }
}

export default PlotHistogram