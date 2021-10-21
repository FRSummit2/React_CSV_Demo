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
        let data1 = [
            { x: 'Development', y: [22, 22, 23, 25, 25, 25, 26, 27, 27, 28, 28, 29, 30, 32, 34, 32, 34, 36, 35, 38] },
            { x: 'Testing', y: [22, 33, 23, 25, 26, 28, 29, 30, 34, 33, 32, 31, 50] },
            { x: 'HR', y: [22, 24, 25, 30, 32, 34, 36, 38, 39, 41, 35, 36, 40, 56] },
            { x: 'Finance', y: [26, 27, 28, 30, 32, 34, 35, 37, 35, 37, 45] },
            { x: 'R&D', y: [26, 27, 29, 32, 34, 35, 36, 37, 38, 39, 41, 43, 58] },
            { x: 'Sales', y: [27, 26, 28, 29, 29, 29, 32, 35, 32, 38, 53] },
            { x: 'Inventory', y: [21, 23, 24, 25, 26, 27, 28, 30, 34, 36, 38] },
            { x: 'Graphics', y: [26, 28, 29, 30, 32, 33, 35, 36, 52] },
            { x: 'Training', y: [28, 29, 30, 31, 32, 34, 35, 36] }
        ];

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