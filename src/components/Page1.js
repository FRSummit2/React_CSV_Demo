import React from 'react'
import * as XLSX from 'xlsx'
import { useDispatch } from 'react-redux'
import { csvTransection } from '../actions'
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

        const tableData = {
            header: columns,
            body: list,
            table_data: list_table,
            writable: [headers].concat(list_table)
        }
        
        dispatch(csvTransection(tableData))

        history.push({
            pathname: "/page2"
        });
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

    return (
        <div className="container mt-5">
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
        </div>
    );
}

export default Page1;