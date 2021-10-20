import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from "react-router"
import { CSVLink } from "react-csv"
import Scatter from './PlotScatter'
import PlotBox from './PlotBox'
import Histogram from './PlotHistogram'
import { NavLink } from 'react-router-dom'

const Page2 = () => {

    const history = useHistory();
    const [scatter, setScatterData] = useState(null)
    const [histogram, setHistogramData] = useState(null)

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

    const generateScatterPlotClickHandler = e => {
        e.preventDefault()
        console.log(e)
        console.log(e.target.elements.x_axis_name.value)
        console.log(e.target.elements.x_axis_column.value)
        console.log(e.target.elements.y_axis_name.value)
        console.log(e.target.elements.y_axis_column.value)

        let chart_data = []
        let x_axis_max_val = 0
        let y_axis_max_val = 0
        csvData.table_data.forEach((el, index) => {
            let target_x = el[e.target.elements.x_axis_column.value]
            let target_y = el[e.target.elements.y_axis_column.value]
            let point = []
            if (index === 0) {
                point.push(e.target.elements.x_axis_name.value)
                point.push(e.target.elements.y_axis_name.value)
                chart_data.push(point)
                point = []
            }
            if (!isNaN(target_x) && (target_x !== '')
                && !isNaN(target_y) && (target_y !== '')) {
                x_axis_max_val = x_axis_max_val > parseFloat(target_x) ? x_axis_max_val : parseFloat(target_x)
                y_axis_max_val = y_axis_max_val > parseFloat(target_y) ? y_axis_max_val : parseFloat(target_y)
                point.push(parseFloat(target_x))
                point.push(parseFloat(target_y))
                chart_data.push(point)
            } else {
                return
            }
        })

        let scatter_arr = []
        scatter_arr.push(chart_data)

        let scatter_data = {
            x_axis_title: e.target.elements.x_axis_name.value,
            x_axis_max_val: x_axis_max_val,
            y_axis_title: e.target.elements.y_axis_name.value,
            y_axis_max_val: y_axis_max_val,
            data: scatter_arr
        }

        console.log(scatter_data)

        setScatterData(scatter_data)

        e.target.elements.x_axis_name.value = ''
        e.target.elements.x_axis_column.value = null
        e.target.elements.y_axis_name.value = ''
        e.target.elements.y_axis_column.value = null
        document.getElementById('scatter-popup-close').click()
    }

    const generateHistogramPlotClickHandler = e => {
        e.preventDefault()

        let x_axis_data = []
        let y_axis_data = []
        csvData.table_data.forEach(el => {
            let target_x = el[e.target.elements.h_x_axis_column.value]
            let target_y = el[e.target.elements.h_y_axis_column.value]
            
            x_axis_data.push(target_x)
            y_axis_data.push(target_y)
        })
        // console.log(x_axis_data)
        // console.log(y_axis_data)
        let histogram_data = {
            labels: x_axis_data,
            data: y_axis_data
        }
        setHistogramData(histogram_data)

        e.target.elements.h_x_axis_column.value = null
        e.target.elements.h_y_axis_column.value = null
        document.getElementById('histogram-popup-close').click()
    }

    return (
        <div className="container-fluid p-0">
            <div className="header p-3">
                <NavLink exact to="/">Back to Home</NavLink>
                <h4>CSV Data Table</h4>
            </div>
            {
                csvData ?
                    <>
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
                        <div className="btn-group p-1" role="group" aria-label="Basic example">
                            <CSVLink type="button" className="btn btn-secondary" data={csvReport} >Download CSV File</CSVLink>
                        </div>

                        <div className="grid-container mt-4 p-1 mb-5">
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
                                <div className="tab-pane fade text-left show active" id="scatter" role="tabpanel" aria-labelledby="scatter-tab">
                                    <button type="button" className="btn btn-primary mt-2" data-toggle="modal" data-target="#scatter-modal">Generate Custom</button>
                                    <Scatter scatterData={scatter} />
                                </div>
                                <div className="tab-pane fade text-center" id="box" role="tabpanel" aria-labelledby="box-tab">
                                    <button type="button" className="btn btn-primary mt-2" data-toggle="modal" data-target="#report-modal">Generate Custom</button>
                                    <PlotBox />
                                </div>
                                <div className="tab-pane fade text-right" id="histogram" role="tabpanel" aria-labelledby="histogram-tab">
                                    <button type="button" className="btn btn-primary mt-2" data-toggle="modal" data-target="#histogram-modal">Generate Custom</button>
                                    <Histogram histogramData={histogram} />
                                </div>
                            </div>
                            {/* Plot Generator modal - Scatter */}
                            <div className="modal" id="scatter-modal" tabIndex="-1" role="dialog" aria-labelledby="scatter" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Select Plot Fields</h5>
                                            <button type="button" className="close" id="scatter-popup-close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form className="row" onSubmit={generateScatterPlotClickHandler}>
                                                <div className="col-12 form-group">
                                                    <label htmlFor="x_axis_name">X Axis Name</label>
                                                    <input type="text" className="form-control" name="x_axis_name" id="x_axis_name" name="x_axis_val" placeholder="Ex: Age" />
                                                </div>
                                                <div className="col-12 form-group">
                                                    <label htmlFor="x_axis_column">Select X Axis Table Column</label>
                                                    <select className="form-control" name="x_axis_column" id="x_axis_column">
                                                        <option>Select Parameter</option>
                                                        {
                                                            csvData.header.map((el, index) => (
                                                                <option key={index} value={index}>{el.name}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                                <div className="col-12 form-group">
                                                    <label htmlFor="y_axis_name">Y Axis Name</label>
                                                    <input type="text" className="form-control" name="y_axis_name" id="y_axis_name" placeholder="Ex: Weight" />
                                                </div>
                                                <div className="col-12 form-group">
                                                    <label htmlFor="y_axis_column">Select Y Axis Table Column</label>
                                                    <select className="form-control" name="y_axis_column" id="y_axis_column">
                                                        <option>Select Parameter</option>
                                                        {
                                                            csvData.header.map((el, index) => (
                                                                <option key={index} value={index}>{el.name}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                                <div className="modal-footer justify-content-center w-100">
                                                    <button type="submit" className="btn btn-primary btn-global">Generate</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Plot Generator modal - Histogram */}
                            <div className="modal" id="histogram-modal" tabIndex="-1" role="dialog" aria-labelledby="scatter" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Select Plot Fields</h5>
                                            <button type="button" className="close" id="histogram-popup-close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form className="row" onSubmit={generateHistogramPlotClickHandler}>
                                                <div className="col-12 form-group">
                                                    <label htmlFor="h_x_axis_column">Select X Axis Column</label>
                                                    <select className="form-control" name="h_x_axis_column" id="h_x_axis_column">
                                                        <option>Select Parameter</option>
                                                        {
                                                            csvData.header.map((el, index) => (
                                                                <option key={index} value={index}>{el.name}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                                <div className="col-12 form-group">
                                                    <label htmlFor="h_y_axis_column">Select Y Axis Column</label>
                                                    <select className="form-control" name="h_y_axis_column" id="h_y_axis_column">
                                                        <option>Select Parameter</option>
                                                        {
                                                            csvData.header.map((el, index) => (
                                                                <option key={index} value={index}>{el.name}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                                <div className="modal-footer justify-content-center w-100">
                                                    <button type="submit" className="btn btn-primary btn-global">Generate</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
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