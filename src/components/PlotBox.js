import React from 'react'
import { Boxplot, computeBoxplotStats } from 'react-boxplot'

class Plot extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    componentDidUpdate = () => {
        console.log(this.props.boxPlotData.data)
    }

    render() {
        let values = this.props.boxPlotData ? this.props.boxPlotData.data : [14, 15, 16, 16, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 19, 19, 19, 20, 20, 20, 20, 20, 20, 21, 21, 22, 23, 24, 24, 29]
        let max_val = this.props.boxPlotData ? this.props.boxPlotData.max : 30

        return (
            <>
                <div className="d-flex justify-content-center mt-3 mb-5">
                    <Boxplot
                        width={400}
                        height={20}
                        orientation="horizontal"
                        min={0}
                        max={max_val}
                        stats={computeBoxplotStats(values)}
                    />
                </div>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary">Download PDF</button>
                </div>
            </>
        )
    }
}

export default Plot