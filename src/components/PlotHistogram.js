import React from 'react'
import Histogram from 'react-chart-histogram'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

class PlotHistogram extends React.Component {
    constructor(props) {
        super(props);
    }

    saveAsPdf = () => {
        let input = document.getElementById('histogram-plot')
        html2canvas(input)
            .then((canvas) => {
                let imgData = canvas.toDataURL('image/png')
                console.log(imgData)
                let pdf = new jsPDF('p', 'pt', 'a4')
                pdf.addImage(imgData, 'PNG', 0, 0)
                // pdf.output('dataurlnewwindow')
                console.log(pdf)
                pdf.save("download.pdf")
            })
    }

    render() {
        let labels = this.props.histogramData ? this.props.histogramData.labels : ['2016', '2017', '2018', '2019'];
        let data = this.props.histogramData ? this.props.histogramData.data : [324, 45, 672, 1000];
        let options = { fillColor: '#FFFFFF', strokeColor: '#0000FF' };

        return (
            <>
                <div className="histogram d-flex justify-content-center mt-3 mb-5" id="histogram-plot">
                    <Histogram
                        xLabels={labels}
                        yValues={data}
                        width='400'
                        height='200'
                        options={options}
                    />
                </div>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary" onClick={() => this.saveAsPdf()}>Download PDF</button>
                </div>
            </>
        )
    }
}

export default PlotHistogram