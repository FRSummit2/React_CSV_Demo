import React from 'react';

const Page1 = () => {
    return (
        <div className="container">
            <div className="container-fluid d-flex justify-content-center align-items-center">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-3 col-sm-4">
                        <label for="exampleInputEmail1">CSV file link</label>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-4">
                        <input type="file" className="border-0" />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page1;