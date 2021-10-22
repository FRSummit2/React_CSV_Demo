import React from 'react'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'
import { AxisModel, BoxAndWhiskerSeries, Category, ChartComponent, Inject, SeriesCollectionDirective, SeriesDirective } from '@syncfusion/ej2-react-charts';

class Plot extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    saveAsPdf = () => {
        let input = document.getElementById('box-plot')
        html2canvas(input)
            .then((canvas) => {
                let imgData = canvas.toDataURL('image/png')
                let pdf = new jsPDF('p', 'pt', 'a4')
                pdf.addImage(imgData, 'PNG', 0, 0)
                pdf.output('dataurlnewwindow')
                pdf.save("download.pdf")
            })
    }

    render() {
        let primaryXAxis = { valueType: 'Category' };
        let data1 = this.props.boxPlotDataColumn.length > 0 ? this.props.boxPlotDataColumn : [];

        return (
            <>
                <div className="d-flex justify-content-center mt-3 mb-5" id="box-plot">
                    <ChartComponent id='charts' primaryXAxis={primaryXAxis}>
                        <Inject services={[BoxAndWhiskerSeries, Category]} />
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={data1} xName='x' yName='y' type='BoxAndWhisker' />
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary" onClick={() => this.saveAsPdf()}>Download PDF</button>
                </div>
            </>
        )
    }
}

export default Plot