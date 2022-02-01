import React from 'react'
import * as XLSX from 'xlsx'
import { useDispatch, useSelector } from 'react-redux'
import { csvTransection, testReduxData } from '../actions'
import { useHistory } from "react-router"

const Page1 = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const processData = dataString => {
        const dataStringLines = dataString.split(/\r\n|\n/)
        const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/)

        const list = []
        const list_table = []
        for (let i = 1; i < dataStringLines.length; i++) {
            const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/)
            if (headers && row.length === headers.length) {
                const obj = {}
                const obj_table = []
                for (let j = 0; j < headers.length; j++) {
                    let d = row[j];
                    if (d.length > 0) {
                        if (d[0] === '"')
                            d = d.substring(1, d.length - 1)
                        if (d[d.length - 1] === '"')
                            d = d.substring(d.length - 2, 1)
                    }
                    if (headers[j]) {
                        obj[headers[j]] = d
                        obj_table.push(d)
                    }
                }

                if (Object.values(obj).filter(x => x).length > 0) {
                    list.push(obj)
                    list_table.push(obj_table)
                }
            }
        }
        const columns = headers.map(c => ({
            name: c
        }));
        
//=============================================================================
        console.log(list)
        console.log(columns)
        function getUnique(array, key) {
            if (typeof key !== 'function') {
              const property = key;
              key = function(item) { return item[property]; };
            }
            return Array.from(array.reduce(function(map, item) {
              const k = key(item);
              if (!map.has(k)) map.set(k, item);
              return map;
            }, new Map()).values());
          }
        //   const items = [
        //     { id: 2, name: "sumit" },
        //     { id: 1, name: "amit" },
        //     { id: 3, name: "sam" },
        //     { id: 4, name: "jay" },
        //     { id: 2, name: "ra one" },
        //     { id: 3, name: "alex" },
        //     { id: 1, name: "devid" },
        //     { id: 7, name: "sam" },
        //   ];
          console.log(getUnique(list, 'Asset Type'));
          let hh = [{name: 'Asset Type'}, {name: 'Longitude'}]
          let ex_arr = list
        //   columns.forEach(element => {
          hh.forEach(element => {
            // console.log(ex_arr)
            ex_arr = getUnique(ex_arr, element.name)
          });
          console.log(ex_arr)
//=============================================================================

        const tableData = {
            header: columns,
            body: list,
            table_data: list_table,
            writable: [headers].concat(list_table)
        }

        dispatch(csvTransection(tableData))

        if (document.getElementById('radio-input').checked === false) {
            history.push({
                pathname: "/page2"
            });
        } else {
            history.push({
                pathname: "/page3"
            });
        }
    }

    const handleFileUpload = e => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.onload = (evt) => {
            const bstr = evt.target.result
            const wb = XLSX.read(bstr, { type: 'binary' })
            const wsname = wb.SheetNames[0]
            const ws = wb.Sheets[wsname]
            const data = XLSX.utils.sheet_to_csv(ws, { header: 1 })
            processData(data)
        };
        reader.readAsBinaryString(file)
    }

    const goToLoadPage = () => {
        // history.push({
        //     pathname: "/page3"
        // });
        console.log(document.getElementById('radio-input').checked)
    }

    const loadPage = (path) => {
        history.push({
            pathname: "/" + path
        });
    }

    let csvData = useSelector(state => state.testReduxData)

    const changeState = () => {
        console.log('changeState')

        // let tableData = {
        //     name: 'F R SUMMIT'
        // }

        let tableData = 'F R SUMMIT'

        dispatch(testReduxData(tableData))
    }

    return (
        <div className="container mt-5">
            <div className="d-flex align-items-center">
                <label className="mb-0 mr-4">Go to load page</label>
                <input type="checkbox" id="radio-input" />
            </div>
            <div className="container-fluid d-flex justify-content-center align-items-center">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroupFileAddon01">Upload CSV File</span>
                    </div>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" onChange={handleFileUpload} accept=".csv,.xlsx,.xls" />
                        <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                    </div>
                </div>
            </div>

            <div className="row m-0 custom-row">
                <button className="blue-btn-menu col-lg-3 col-md-2 col-sm-2" onClick={() => goToLoadPage()}>Load Page</button>
                <button className="blue-btn-menu col-lg-3 col-md-2 col-sm-2" onClick={() => loadPage('simple-list-demo')}>Simple List Demo</button>
                <button className="blue-btn-menu col-lg-3 col-md-2 col-sm-2" onClick={() => loadPage('simple-grid-demo')}>Simple Grid Demo</button>
                <button className="blue-btn-menu col-lg-3 col-md-2 col-sm-2" onClick={() => loadPage('custom-window-demo')}>Custom Window Demo</button>

                <button className="blue-btn-menu col-lg-3 col-md-2 col-sm-2" onClick={() => loadPage('render-html')}>Chart Plotly</button>
                <button className="blue-btn-menu col-lg-3 col-md-2 col-sm-2" onClick={() => loadPage('basic-charts')}>Basic Chart</button>
                <button className="blue-btn-menu col-lg-3 col-md-2 col-sm-2" onClick={() => loadPage('statistical-charts')}>Statistical Charts</button>
                <button className="blue-btn-menu col-lg-3 col-md-2 col-sm-2" onClick={() => loadPage('animations')}>Animations</button>
                <button className="blue-btn-menu col-lg-3 col-md-2 col-sm-2" onClick={() => loadPage('map-chart')}>Map Chart</button>
            </div>

            <div className="container-fluid mt-4">
                <p>State data {csvData}</p>
                <button className="blue-btn-menu" onClick={() => changeState()}>Button</button>
                {/* <button onClick={() => dispatch(testReduxData('F R SUMMIT')) }>Button</button> */}
            </div>
        </div>
    );
}

export default Page1;
