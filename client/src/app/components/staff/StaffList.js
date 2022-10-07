import React from 'react';

const StaffList = () => {
    return (
        <>
            <div className="page-header">
                <h3 className="page-title">
                    <span className="page-title-icon bg-gradient-primary text-white mr-2">
                    <i className="mdi mdi-home"></i>
                    </span>Staff List</h3>
            </div>
            <div className="row">
                <div className="col-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <ul className="list-arrow">
                                <li>Staff 1</li>
                                <li>Staff 2</li>
                                <li>Staff 3</li>
                                <li>Staff 4</li>
                                <li>Staff 5</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StaffList;