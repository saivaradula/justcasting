import React from 'react';
import { Form } from 'react-bootstrap';

const AddStaff = () => {
    return (
        <>
            <div className="page-header">
                <h3 className="page-title">
                    <span className="page-title-icon bg-gradient-primary text-white mr-2">
                    <i className="mdi mdi-home"></i>
                    </span>Add Staff</h3>
            </div>
            <div className="row">
                <div className="col-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <form className="forms-sample">
                                <Form.Group>
                                    <label htmlFor="exampleInputName1">Name</label>
                                    <Form.Control type="text" className="form-control" id="exampleInputName1" placeholder="Name" />
                                </Form.Group>
                                <Form.Group>
                                    <label htmlFor="exampleInputEmail3">Email address</label>
                                    <Form.Control type="email" className="form-control" id="exampleInputEmail3" placeholder="Email" />
                                </Form.Group>
                                <Form.Group>
                                    <label htmlFor="exampleInputPassword4">Password</label>
                                    <Form.Control type="password" className="form-control" id="exampleInputPassword4" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group>
                                    <label htmlFor="exampleSelectGender">Gender</label>
                                    <select className="form-control" id="exampleSelectGender">
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </Form.Group>
                                <Form.Group>
                                    <label>File upload</label>
                                    <div className="custom-file">
                                    <Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es"/>
                                    <label className="custom-file-label" htmlFor="customFileLang">Upload image</label>
                                    </div>
                                </Form.Group>
                                <Form.Group>
                                    <label htmlFor="exampleInputCity1">City</label>
                                    <Form.Control type="text" className="form-control" id="exampleInputCity1" placeholder="Location" />
                                </Form.Group>
                                <Form.Group>
                                    <label htmlFor="exampleTextarea1">Textarea</label>
                                    <textarea className="form-control" id="exampleTextarea1" rows="4"></textarea>
                                </Form.Group>
                                <button type="submit" className="btn btn-gradient-primary mr-2">Submit</button>
                                <button className="btn btn-light">Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddStaff;