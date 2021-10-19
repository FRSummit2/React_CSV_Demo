import React from 'react';

const Page2 = () => {
    return (
        <div className="container-fluid">
            <h4>CSV Data Table</h4>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.from({ length: 10 }, (_, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary">Download CSV File</button>
            </div>
            
            <div className="grid-container mt-4">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-secondary">Download PDF</button>
                </div>
            </div>
        </div>
    );
}

export default Page2;