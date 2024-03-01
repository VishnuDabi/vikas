import React from 'react'
import '../pages/SignUp.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const SignUp = () => {

    return (
        <div className='container'>
            <div className='row'>
                <div className='signUp-title'>
                    <h1>New Account</h1>
                </div>
                <div className='login-cont'>
                    <div className='sig-up-form-inn'>
                        <form action="" className='sign-Up-form'>
                            <div className='flex-container'>
                                <div className='log-for-cont'>
                                    <div className='log-for-con-lab'>
                                        <label htmlFor="">Email Address</label>
                                        <small>REQUIRED</small>
                                    </div>
                                    <input type="text" />
                                    {/* <div className='form-err'>
                        You must enter an email
                      </div> */}
                                </div>
                                <div className='log-for-cont'>
                                    <div className='log-for-con-lab'>
                                        <label htmlFor="">Password</label>
                                        <small>REQUIRED</small>
                                    </div>
                                    <input type="text" />
                                    {/* <div className='form-err'>
                        You must enter an email
                      </div> */}
                                </div>
                                <div className='log-for-cont'>
                                    <div className='log-for-con-lab'>
                                        <label htmlFor="">Confirm Password</label>
                                        <small>REQUIRED</small>
                                    </div>
                                    <input type="text" />
                                    {/* <div className='form-err'>
                        You must enter an email
                      </div> */}
                                </div>
                                <div className='log-for-cont'>
                                    <div className='log-for-con-lab'>
                                        <label htmlFor="">Country</label>
                                        <small>REQUIRED</small>
                                    </div>
                                    {/* <input type="text" /> */}
                                    <select name="" id="">
                                        <option value="">Select Country</option>
                                        <option value="">India</option>
                                        <option value="">USA</option>
                                        <option value="">Finland</option>
                                        <option value="">Ireland</option>
                                        <option value="">England</option>
                                        <option value="">Autralia</option>
                                    </select>
                                    {/* <div className='form-err'>
                        You must enter an email
                      </div> */}
                                </div>
                                <div className='log-for-cont'>
                                    <div className='log-for-con-lab'>
                                        <label htmlFor="">First Name</label>
                                        <small>REQUIRED</small>
                                    </div>
                                    <input type="text" />
                                    {/* <div className='form-err'>
                        You must enter an email
                      </div> */}
                                </div>
                                <div className='log-for-cont'>
                                    <div className='log-for-con-lab'>
                                        <label htmlFor="">Last Name</label>
                                        <small>REQUIRED</small>
                                    </div>
                                    <input type="text" />
                                    {/* <div className='form-err'>
                        You must enter an email
                      </div> */}
                                </div>
                                <div className='log-for-cont'>
                                    <div className='log-for-con-lab'>
                                        <label htmlFor="">Address Line 1</label>
                                        <small>REQUIRED</small>
                                    </div>
                                    <input type="text" />
                                    {/* <div className='form-err'>
                        You must enter an email
                      </div> */}
                                </div>
                                <div className='log-for-cont'>
                                    <div className='log-for-con-lab'>
                                        <label htmlFor="">Address Line 2</label>
                                        {/* <small>REQUIRED</small> */}
                                    </div>
                                    <input type="text" />
                                    {/* <div className='form-err'>
                        You must enter an email
                      </div> */}
                                </div>
                                <div className='log-for-cont'>
                                    <div className='log-for-con-lab'>
                                        <label htmlFor="">Company Name</label>
                                        {/* <small>REQUIRED</small> */}
                                    </div>
                                    <input type="text" />
                                    {/* <div className='form-err'>
                        You must enter an email
                      </div> */}
                                </div>
                                <div className='log-for-cont'>
                                    <div className='log-for-con-lab'>
                                        <label htmlFor="">Suburb/City</label>
                                        <small>REQUIRED</small>
                                    </div>
                                    <input type="text" />
                                    {/* <div className='form-err'>
                        You must enter an email
                      </div> */}
                                </div>
                                <div className='log-for-cont'>
                                    <div className='log-for-con-lab'>
                                        <label htmlFor="">State/Province</label>
                                        <small>REQUIRED</small>
                                    </div>
                                    <input type="text" />
                                    {/* <div className='form-err'>
                        You must enter an email
                      </div> */}
                                </div>
                                <div className='log-for-cont'>
                                    <div className='log-for-con-lab'>
                                        <label htmlFor="">Zip/Postcode</label>
                                        <small>REQUIRED</small>
                                    </div>
                                    <input type="text" />
                                    {/* <div className='form-err'>
                        You must enter an email
                      </div> */}
                                </div>
                                <div className='log-for-cont'>
                                    <div className='log-for-con-lab'>
                                        <label htmlFor="">Phone Number</label>
                                        {/* <small>REQUIRED</small> */}
                                    </div>
                                    <input type="text" name='Phone Number' />
                                    {/* <div className='form-err'>
                        You must enter an email
                      </div> */}
                                </div>
                            </div>
                            <div className='signUp-btn'>
                                <button>Create Account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
