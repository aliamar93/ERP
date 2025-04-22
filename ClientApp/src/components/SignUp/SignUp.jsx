import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../api/API_BASE_URL';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

const SignUp=()=>{
    
    const navigate = useNavigate();
        const[useformData,setUseformData]=useState({
            UserNameOrEmail:'',
            Password:'',
            PersonalNr:''
        });

   const  handleChange=(e)=>
    {
        e.preventDefault();
        const { name, value } = e.target;
        setUseformData(pre=>({
            ...pre,
            [name]: value
        }))
    }
    const onSubmit=(e)=>
    {
        e.preventDefault();
        let signupobject={
            UserNameOrEmail:useformData.UserNameOrEmail,
            Password:useformData.Password,
            PersonalNr:useformData.PersonalNr
        }


        axios.post(`${API_BASE_URL}/Validate/SignUp`, signupobject, {
            headers: {
              'Content-Type': 'application/json'
            }
          }).then((response)=> {
            if(response==null)
            {
                toast.error("")
            }
            console.log(response);
            navigate('/');
            toast.success("Please Verify Email..");
            // toast.success(`Email: ${signupobject.UserNameOrEmail}, PersonalNr: ${signupobject.PersonalNr}`);
          });

        // axios.post(`${API_BASE_URL}/Validate/SignUp`, signupobject)
        // .then((response) => {
        //     console.log(response);
        // })
        // toast("Form submitted successfully", {
        //                 position: "bottom-left",
        //                 type: "success",
        //                 autoClose: 5000,
        //                 closeOnClick: true,
        //                 pauseOnHover: true,
        //                 draggable: true,
        //               });

        
        // Add your logic to handle the registration request here
        // For example, you can make an API call to register the user


    }


    
        return(
            <div className="nk-body bg-white npc-general pg-auth">
            <div className="nk-app-root">
       
        <div className="nk-main ">
           
            <div className="nk-wrap nk-wrap-nosidebar">
                
                <div className="nk-content ">
                    <div className="nk-split nk-split-page nk-split-md">
                        <div className="nk-split-content nk-block-area nk-block-area-column nk-auth-container bg-white w-lg-45">
                            <div className="nk-block nk-block-middle nk-auth-body">
                                <div className="brand-logo pb-5">
                                    <a href="html/index.html" className="logo-link">
                                        <img className="logo-light logo-img logo-img-lg" src="./images/sca.png" srcSet="./images/sca.png 2x" alt="logo"/>
                                        <img className="logo-dark logo-img logo-img-lg" src="./images/sca.png" srcSet="./images/sca.png 2x" alt="logo-dark"/>
                                    </a>
                                </div>
                                <div className="nk-block-head">
                                    <div className="nk-block-head-content">
                                        <h5 className="nk-block-title">Register</h5>
                                        <div className="nk-block-des">
                                            <p>Create New Autostore Account</p>
                                        </div>
                                    </div>
                                </div>
                                <form onSubmit={onSubmit}>
                                <div className="form-group">
                                {[
                        { label: 'Personal Nr', name: 'PersonalNr', type: 'number' },
                        { label: 'Email', name: 'UserNameOrEmail', type: 'email' },
                       
                        // { label: 'Skills', name: 'skills', type: 'text' },
                    ].map(({ label, name, type }) => (
                        <div key={name}>
                            <label className="form-label">{label}</label>
                            <div className="form-control-wrap">
                            <input
                                type={type}
                                name={name}
                                className="form-control form-control-lg"
                                placeholder={`Enter ${label}`}
                                required
                                value={useformData[name]}
                                onChange={handleChange}
                            />
                            </div>
                        </div>
                    ))}
                                </div>
                                    {/* <div className="form-group">
                                        <label className="form-label" htmlFor="name">Persoanl Nr</label>
                                        <div className="form-control-wrap">
                                            <input type="text" className="form-control form-control-lg" id="personalNr" placeholder="Enter your personal Nr"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="email">Email</label>
                                        <div className="form-control-wrap">
                                            <input type="text" className="form-control form-control-lg" id="email" placeholder="Enter your email address"/>
                                        </div>
                                    </div> */}
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="password">Passcode</label>
                                        <div className="form-control-wrap">
                                            <a tabIndex={-1} href="/" className="form-icon form-icon-right passcode-switch lg" data-target="password">
                                                <em className="passcode-icon icon-show icon ni ni-eye"></em>
                                                <em className="passcode-icon icon-hide icon ni ni-eye-off"></em>
                                            </a>
                                            <input type="password" className="form-control form-control-lg" onChange={handleChange} value={useformData.Password} required  id="password" placeholder="Enter your passcode" name="Password"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-control-xs custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="checkbox"/>
                                            <label className="custom-control-label" htmlFor="checkbox">I agree to Dashlite <a tabIndex={-1} href="/">Privacy Policy</a> &amp; <a tabIndex={-1} href="/"> Terms.</a></label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-lg btn-primary btn-block">Register</button>
                                    </div>
                                </form>
                                <div className="form-note-s2 pt-4"> Already have an account ? <a href="/"><strong>Sign in instead</strong></a>
                                </div>
                                <div className="text-center pt-4 pb-3">
                                    <h6 className="overline-title overline-title-sap"><span>OR</span></h6>
                                </div>
                                <ul className="nav justify-center gx-8">
                                    <li className="nav-item"><a className="link link-primary fw-normal py-2 px-3" href="">Facebook</a></li>
                                    <li className="nav-item"><a className="link link-primary fw-normal py-2 px-3" href="">Google</a></li>
                                </ul>
                            </div>
                            <div className="nk-block nk-auth-footer">
                                <div className="nk-block-between">
                                    <ul className="nav nav-sm">
                                        <li className="nav-item">
                                            <a className="link link-primary fw-normal py-2 px-3" href="">Terms & Condition</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="link link-primary fw-normal py-2 px-3" href="">Privacy Policy</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="link link-primary fw-normal py-2 px-3" href="">Help</a>
                                        </li>
                                        <li className="nav-item dropup">
                                            <a href="#" className="dropdown-toggle dropdown-indicator has-indicator link link-primary fw-normal py-2 px-3 text-base" data-bs-toggle="dropdown" data-offset="0,10"><small>English</small></a>
                                            <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                                                <ul className="language-list">
                                                    <li>
                                                        <a href="#" className="language-item">
                                                            <img src="./images/flags/english.png" alt="" className="language-flag"/>
                                                            <span className="language-name">English</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="language-item">
                                                            <img src="./images/flags/spanish.png" alt="" className="language-flag"/>
                                                            <span className="language-name">Español</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="language-item">
                                                            <img src="./images/flags/french.png" alt="" className="language-flag"/>
                                                            <span className="language-name">Français</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="language-item">
                                                            <img src="./images/flags/turkey.png" alt="" className="language-flag"/>
                                                            <span className="language-name">Türkçe</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-3">
                                    <p>&copy; 2023 Amar Ali. All Rights Reserved.</p>
                                </div>
                            </div>
                        </div>
                        <div className="nk-split-content nk-split-stretch bg-abstract"></div>
                    </div>
                </div>
            </div>
        </div>
            </div>
            </div>
        );
    
}
export default SignUp;