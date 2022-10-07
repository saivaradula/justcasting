import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';

const Login = () => {

  const history = useHistory();

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, showErrorMessage] = useState(false);

  const onChangeEvent = (e, type) => {
    if(type === 'userName') setUserName(e.target.value);
    else setPassword(e.target.value);
  }

  const signIn = () => {
    if(userName === 'admin' && password === 'admin') history.push("/dashboard");
    else {
      showErrorMessage(true);
      setUserName('');
      setPassword('');
    }
  }

  const alert = () => {
    return (
      <>
        <Alert key={'danger'} variant={'danger'}>
          Please enter User Name and Password as admin
        </Alert>
      </>
    );
  }

  return (
    <div>
      <div className="d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                <span className="logo-text">JC</span>
              </div>
              <Form className="pt-3">
                <Form.Group className="d-flex search-field">
                  <Form.Control autoComplete="off" type="email" placeholder="Username" name="email" size="lg" className="h-auto" value={userName} onChange={(e) => onChangeEvent(e, 'userName')} />
                </Form.Group>
                <Form.Group className="d-flex search-field">
                  <Form.Control autoComplete="off" type="password" placeholder="Password" name="password" size="lg" className="h-auto" value={password} onChange={(e) => onChangeEvent(e, 'password')} />
                </Form.Group>
                {errorMessage && alert() }
                <div className="mt-3">
                  <button type="button" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={() => signIn()}>SIGN IN</button>
                </div>
                <div className="my-2 d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input"/>
                      <i className="input-helper"></i>
                      Keep me signed in
                    </label>
                  </div>
                  <a href="!#" onClick={event => event.preventDefault()} className="auth-link text-black">Forgot password?</a>
                </div>
                <div className="text-center mt-4 font-weight-light">
                  Don't have an account? <Link to="/user-pages/register" className="text-primary">Create</Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Login
