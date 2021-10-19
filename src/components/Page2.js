import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from "react-router"
import { CSVLink } from "react-csv"
import Scatter from './PlotScatter'
import PlotBox from './PlotBox'
import Histogram from './PlotHistogram'
import { NavLink } from 'react-router-dom';

const Page2 = () => {

    const history = useHistory();

    const csvData = useSelector(state => state.csvTransection)
    console.log(csvData)

    const returnUploadComponent = () => {
        setTimeout(() => {
            history.push({
                pathname: "/"
            });
        }, 1500)
    }

    let csvReport = csvData ? csvData.writable : []

    return (
        <div className="container-fluid">
            <div className="header">
                <NavLink exact to="/">Back to Home</NavLink>
            </div>
            {
                csvData ?
                    <>
                        <h4>CSV Data Table</h4>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        {
                                            csvData.header.map((element, index) => (
                                                <th scope="col" key={index}>{element.name}</th>
                                            ))
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        csvData.table_data.map((element, index) => (
                                            <tr key={index}>
                                                {
                                                    element.map((el, i) => (
                                                        <td key={i}>{el}</td>
                                                    ))
                                                }
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <CSVLink type="button" className="btn btn-secondary" data={csvReport} >Download CSV File</CSVLink>
                        </div>

                        <div className="grid-container mt-4">
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-secondary">Download PDF</button>
                            </div>

                            <ul className="nav nav-tabs nav-justified" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="scatter-tab" data-toggle="tab" href="#scatter" role="tab" aria-controls="scatter" aria-selected="true">Scatter</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="box-tab" data-toggle="tab" href="#box" role="tab" aria-controls="box" aria-selected="false">Box</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="histogram-tab" data-toggle="tab" href="#histogram" role="tab" aria-controls="histogram" aria-selected="false">Histogram</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                {/* Scatter Plot Tab */}
                                <div className="tab-pane fade show active" id="scatter" role="tabpanel" aria-labelledby="scatter-tab">
                                    <div id="chart">
                                        <Scatter />
                                    </div>
                                </div>
                                {/* Box Plot Tab */}
                                <div className="tab-pane fade" id="box" role="tabpanel" aria-labelledby="box-tab">
                                    <PlotBox />
                                </div>
                                {/* Histogram Plot Tab */}
                                <div className="tab-pane fade" id="histogram" role="tabpanel" aria-labelledby="histogram-tab">
                                    <Histogram />
                                </div>
                            </div>


                        </div>
                    </> :
                    <>
                        <h3>No CSV found</h3>
                        {
                            returnUploadComponent()
                        }
                    </>
            }

        </div >
    );
}

export default Page2;