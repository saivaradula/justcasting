import React from 'react';

const ViewOrders = () => {
    return (
        <>
            <div className="page-header">
                <h3 className="page-title">
                    <span className="page-title-icon bg-gradient-primary text-white mr-2">
                        <i className="mdi mdi-home"></i>
                    </span>View Orders</h3>
            </div>
            <div className="row">
                <div className="col-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <ul className="list-arrow">
                                <li>Order 1</li>
                                <li>Order 2</li>
                                <li>Order 3</li>
                                <li>Order 4</li>
                                <li>Order 5</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewOrders;