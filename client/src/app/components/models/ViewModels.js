import React from 'react';

const ViewModels = () => {
    return (
        <>
            <div className="page-header">
                <h3 className="page-title">
                    <span className="page-title-icon bg-gradient-primary text-white mr-2">
                    <i className="mdi mdi-home"></i>
                    </span>View Models</h3>
            </div>
            <div className="row">
                <div className="col-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <ul className="list-arrow">
                                <li>Model 1</li>
                                <li>Model 2</li>
                                <li>Model 3</li>
                                <li>Model 4</li>
                                <li>Model 5</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewModels;