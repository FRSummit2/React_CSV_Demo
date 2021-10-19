import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import DataTable from 'react-data-table-component';

const Page1 = () => {

    const [columns, setColumns] = useState([]);
    const [data, setData] = useState([]);

    // process CSV data
    const processData = dataString => {
        const dataStringLines = dataString.split(/\r\n|\n/);
        const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);

        const list = [];
        for (let i = 1; i < dataStringLines.length; i++) {
            const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
            if (headers && row.length === headers.length) {
                const obj = {};
                for (let j = 0; j < headers.length; j++) {
                    let d = row[j];
                    if (d.length > 0) {
                        if (d[0] === '"')
                            d = d.substring(1, d.length - 1);
                        if (d[d.length - 1] === '"')
                            d = d.substring(d.length - 2, 1);
                    }
                    if (headers[j]) {
                        obj[headers[j]] = d;
                    }
                }

                // remove the blank rows
                if (Object.values(obj).filter(x => x).length > 0) {
                    list.push(obj);
                }
            }
        }

        // prepare columns list from headers
        const columns = headers.map(c => ({
            name: c,
            selector: c,
        }));
        console.log(columns)
        console.log(list)

        setData(list);
        setColumns(columns);
    }

    // handle file upload
    const handleFileUpload = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (evt) => {
            /* Parse data */
            const bstr = evt.target.result;
            // console.log(bstr)
            const wb = XLSX.read(bstr, { type: 'binary' });
            /* Get first worksheet */
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            /* Convert array of arrays */
            const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
            processData(data);
        };
        reader.readAsBinaryString(file);
    }

    return (
        <div className="container">
            <div className="container-fluid d-flex justify-content-center align-items-center">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-3 col-sm-4">
                        <label htmlFor="exampleInputEmail1">CSV file link</label>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-4">
                        <input type="file" className="border-0" accept=".csv,.xlsx,.xls" onChange={handleFileUpload} />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>

            {/* <DataTable
                pagination
                highlightOnHover
                columns={columns}
                data={data}
            /> */}
        </div>
    );
}

export default Page1;