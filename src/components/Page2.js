import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from "react-router"

const Page2 = () => {

    const history = useHistory();

    const csvData = useSelector(state => state.csvTransection)
    console.log(csvData)

    const returnUploadComponent = () => {
        setTimeout( () => {
            history.push({
                pathname: "/"
            });
        }, 1500)
    }

    return (
        <div className="container-fluid">
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
                            <button type="button" className="btn btn-secondary">Download CSV File</button>
                        </div>

                        <div className="grid-container mt-4">
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-secondary">Download PDF</button>
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

        </div>
    );
}

export default Page2;