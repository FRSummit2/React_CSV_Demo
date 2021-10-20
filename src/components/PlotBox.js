import React from 'react'
import { Boxplot, computeBoxplotStats } from 'react-boxplot'
import ReactHighchart from 'react-highcharts';
import BoxPlot from './boxplot';
const boxplot = new BoxPlot()
var test = require('./test.html')

class Plot extends React.Component {
    render() {
        const values = [
            14,
            15,
            16,
            16,
            17,
            17,
            17,
            17,
            17,
            18,
            18,
            18,
            18,
            18,
            18,
            19,
            19,
            19,
            20,
            20,
            20,
            20,
            20,
            20,
            21,
            21,
            22,
            23,
            24,
            24,
            29,
        ]

        const config = {
            chart: {
                type: 'boxplot'
            },
            title: {
                text: 'Highcharts Box Plot Example'
            },
            legend: {
                enabled: false
            },
            xAxis: {
                categories: ['1', '2', '3', '4', '5'],
                title: {
                    text: 'Experiment No.'
                }
            },
            yAxis: {
                title: {
                    text: 'Observations'
                }
            },
            // series: [{
            //     name: 'Observations',
            //     data: [
            //         [760, 801, 848, 895, 965],
            //         [733, 853, 939, 980, 1080],
            //         [714, 762, 817, 870, 918],
            //         [724, 802, 806, 871, 950],
            //         [834, 836, 864, 882, 910]
            //     ],
            //     tooltip: {
            //         headerFormat: '<em>Experiment No {point.key}</em><br/>'
            //     }
            // }]
            data: [
                [760, 801, 848, 895, 965],
                [733, 853, 939, 980, 1080],
                [714, 762, 817, 870, 918],
                [724, 802, 806, 871, 950],
                [834, 836, 864, 882, 910]
            ],
        };

        this.componentDidUpdate = e => {
            console.log(boxplot.boxPlot())
        }

        return (
            <>
                <div className="d-flex justify-content-center mt-3 mb-5">
                    <Boxplot
                        width={600}
                        height={50}
                        orientation="horizontal"
                        min={0}
                        max={300}
                        stats={{
                            whiskerLow: 150,
                            quartile1: 250,
                            quartile2: 300,
                            quartile3: 350,
                            whiskerHigh: 380,
                            outliers: [50, 100, 200, 300, 400],
                        }}
                    />
                    <Boxplot
                        width={400}
                        height={20}
                        orientation="horizontal"
                        min={0}
                        max={30}
                        stats={computeBoxplotStats(values)}
                    />
                    <iframe src={test}></iframe>
                    {/* <ReactHighchart config={config} domProps={{ id: 'chartId' }}></ReactHighchart> */}
                </div>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary">Download PDF</button>
                </div>
            </>
        )
    }
}

export default Plot