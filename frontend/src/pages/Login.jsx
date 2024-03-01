import React from 'react';
import './Login.css';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';


const Login = () => {
    return (
        <div className='containerlog'>
            <div className='row'>
                <div className='login-title'>
                    <h1>Sign In</h1>
                </div>
                <div className='login-cont'>
                    <div className='log-cont-inn'>
                        <div className='log-cont-left'>
                            <Form>
                                <Form.Group className="mb-4" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" />
                                </Form.Group>
                                <div className='log-btn'>
                                    <button>
                                        Login
                                    </button>
                                    <a href="">Forgot your password?</a>
                                </div>
                            </Form>
                        </div>
                        <div className='log-cont-right'>
                            <div className='log-cont-right-inn'>
                                <div className='log-cont-right-tit'>
                                    <h2>New customer?</h2>
                                </div>
                                <div className='log-righ-cont'>
                                    <p>Create an account with us and you'll be able to:</p>
                                    <ul>
                                        <li>Check out faster</li>
                                        <li>Save multiple shipping addresses</li>
                                        <li>Access your order history</li>
                                        <li>Track new orders</li>
                                    </ul>
                                    <div className='log-btn'>
                                        <Link to='/signUp'>
                                            <button>
                                                Create account
                                            </button>
                                        </Link>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Login
