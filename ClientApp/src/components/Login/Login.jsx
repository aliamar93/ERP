import React, { Component } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../api/API_BASE_URL';
import  withNavigation  from '../../utils/withNavigation';
import { toast } from 'react-toastify';
import '../../custom.css';



export class Login extends Component {
        constructor(props) {

            super(props);
            this.state = {
                UserNameOrEmail: '',
                password: '',
                errorMessage: ''
            };
            this.onSubmit = this.onSubmit.bind(this);
            // this.onChange = this.onChange.bind(this);
        }

        // onChange(e) 
        // {
        //         this.setState({ password: e.target.value });
        // }

        onSubmit(e)
        {
            e.preventDefault();
            let loginobject={
                UserNameOrEmail:this.state.UserNameOrEmail,
                password:this.state.password
            }
            if(!loginobject.UserNameOrEmail || !loginobject.password) {
                toast.error('Please fill in all fields.');
                return;
            }
            else if(loginobject.password.length < 6) {
                toast.error('Password must be at least 6 characters long.');
            }
            else
            {
                axios.post(`${API_BASE_URL}/Validate/ValidateUser`, loginobject)
                    .then((response) => {
                        // localStorage.token=response.data.token;
                        // localStorage.user=response.data.user;
                        
                        // Handle successful login
                        this.props.navigate('/Profile', { state: { User: response.data.user, token:response.data.token } }); // Redirect to Profile page after successful login
                        toast.success(`Welcome, ${loginobject.UserNameOrEmail}!`);
                    })
                    .catch((error) => {
                        // Handle login error
                        toast.error('Login failed. Please check your credentials.');
                    });

            }
            
            // Perform login logic here, e.g., API call
            
        }

        render(){
            return(

    <div className="nk-app-root">
        <div className="nk-main ">
            <div className="nk-wrap nk-wrap-nosidebar">
                <div className="nk-content ">
                    {/* Background iframe video */}
                {/* <div className="background-video">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.sca-muc.de/video_startseite/"
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        title="Background Video"
                    ></iframe>
                </div> */}

                    <div className="nk-block nk-block-middle nk-auth-body  wide-xs">
                        <div className="brand-logo pb-4 text-center">
                            <a href="html/index.html" className="logo-link">
                           		    <img className="logo-light logo-img logo-img-lg" src="./images/sca.png" srcSet="./images/sca.png 2x" alt="logo"/>
                                    <img className="logo-dark logo-img logo-img-lg" src="./images/sca.png" srcSet="./images/sca.png 2x" alt="logo-dark"/>
                            </a>
                        </div>
                        <div className="card card-bordered" >
                            <div className="card-inner card-inner-lg">
                                <div className="nk-block-head">
                                    <div className="nk-block-head-content">
                                        <h4 className="nk-block-title">Sign-In</h4>
                                        <div className="nk-block-des">
                                            <p>Access the Autostore panel using your email and passcode.</p>
                                        </div>
                                    </div>
                                </div>
                                <form onSubmit= {this.onSubmit} className="form-validate is-alter">

                                    <div className="form-group">
                                        <div className="form-label-group">
                                                    <label className="form-label" htmlFor="email">Email</label>
                                        </div>
                                        <div className="form-control-wrap">
 <input type="email" className="form-control form-control-lg" id="email" required onChange={(e) => this.setState({UserNameOrEmail: e.target.value})} value={this.state.UserNameOrEmail} placeholder="Enter your email address"/>
                                        </div>
                                    </div>
                                    



					<div className="form-group">
                                        <div className="form-label-group">
                                            <label className="form-label" htmlFor="Password">Passcode</label>
                                            <a className="link link-primary link-sm" tabIndex={-1} href="/Reset">Forgot Code?</a>
                                        </div>
                                        <div className="form-control-wrap">
                                            <a tabIndex={-1} className="form-icon form-icon-right passcode-switch lg" data-target="Password">
                                                        <em className="passcode-icon icon-show icon ni ni-eye"></em>
                                                        <em className="passcode-icon icon-hide icon ni ni-eye-off"></em>
                                                    </a>
                                                    <input type="password" className="form-control form-control-lg" minLength={6} id="Password" required onChange={(e)=>this.setState({password:e.target.value})} value={this.state.password} placeholder="Enter your passcode"/>

                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button  type='submit' className="btn btn-lg btn-dim btn-outline-danger btn-block">Sign in</button>
                                    </div>
                                </form>

       <div className="form-note-s2 text-center pt-4"> New on our platform? <a href="/SignUp">Create an account</a>
                                </div>
                                <div className="text-center pt-4 pb-3">
                                    <h6 className="overline-title overline-title-sap"><span>OR</span></h6>
                                </div>
                                <ul className="nav justify-center gx-4">
                                    <li className="nav-item"><a className="link link-primary fw-normal py-2 px-3" href="#">Facebook</a></li>
                                    <li className="nav-item"><a className="link link-primary fw-normal py-2 px-3" href="#">Google</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="nk-footer nk-auth-footer-full">
                        <div className="container wide-lg">
                            <div className="row g-3">
                                <div className="col-lg-6 order-lg-last">
                                    <ul className="nav nav-sm justify-content-center justify-content-lg-end">
                                        <li className="nav-item">
                                            <a className="link link-primary fw-normal py-2 px-3" href="#">Terms & Condition</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="link link-primary fw-normal py-2 px-3" href="#">Privacy Policy</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="link link-primary fw-normal py-2 px-3" href="#">Help</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <div className="nk-block-content text-center text-lg-left">
                                        <p className="text-soft">&copy; 2023 Amar Ali. All Rights Reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            );
        }
}


export default withNavigation(Login);