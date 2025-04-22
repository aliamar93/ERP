import React from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ResetPassword = () => {

    const navigate = useNavigate(); // ✅ This sets up navigation
    // const location = useLocation(); // ✅ This sets up location
    const onSubmit=(e)=>
        {
        try
            {
                e.preventDefault();
                
                const email = e.target.email.value;
                navigate('/'); // Redirect to login page after successful submission
                toast.success(`Reset password link sent to ${email}`);
            }
            catch (error) {
                toast.error('An error occurred while sending the reset password link.');
            }
           
            // Add your logic to handle the reset password request here
            // For example, you can make an API call to send the reset link to the user's email
        }
  return (
    <div className="nk-body bg-white npc-general pg-auth">
      <div className="nk-app-root">
        <div className="nk-main">
          <div className="nk-wrap nk-wrap-nosidebar">
            <div className="nk-content">
              <div className="nk-split nk-split-page nk-split-md">
                <div className="nk-split-content nk-block-area nk-block-area-column nk-auth-container bg-white w-lg-45">
                  <div className="nk-block nk-block-middle nk-auth-body">
                    <div className="brand-logo pb-5">
                      <Link to="" className="logo-link">
                      <img className="logo-light logo-img logo-img-lg" src="./images/sca.png" srcSet="./images/sca.png 2x" alt="logo"/>
                      <img className="logo-dark logo-img logo-img-lg" src="./images/sca.png" srcSet="./images/sca.png 2x" alt="logo-dark"/>
                      </Link>
                    </div>
                    <div className="nk-block-head">
                      <div className="nk-block-head-content">
                        <h5 className="nk-block-title">Reset password</h5>
                        <div className="nk-block-des">
                          <p>If you forgot your password, we’ll email you instructions to reset it.</p>
                        </div>
                      </div>
                    </div>

                    <form onSubmit={onSubmit} className="form-validate is-alter">
                      <div className="form-group">
                        <div className="form-label-group">
                          <label className="form-label" htmlFor="email">Email</label>
                          <a className="link link-primary link-sm" href="#">Need Help?</a>
                        </div>
                        <div className="form-control-wrap">
                          <input type="email" className="form-control form-control-lg" required id="email" placeholder="Enter your email address" />
                        </div>
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn btn-lg btn-primary btn-block">Send Reset Link</button>
                      </div>
                    </form>

                    <div className="form-note-s2 pt-5">
                      <Link to="/"><strong>Return to login</strong></Link>
                    </div>
                  </div>

                  <div className="nk-block nk-auth-footer">
                    <div className="nk-block-between">
                      <ul className="nav nav-sm">
                        <li className="nav-item"><a className="link link-primary fw-normal py-2 px-3" href="#">Terms & Condition</a></li>
                        <li className="nav-item"><a className="link link-primary fw-normal py-2 px-3" href="#">Privacy Policy</a></li>
                        <li className="nav-item"><a className="link link-primary fw-normal py-2 px-3" href="#">Help</a></li>
                        <li className="nav-item dropup">
                          <a href="#" className="dropdown-toggle dropdown-indicator has-indicator link link-primary fw-normal py-2 px-3 text-base" data-bs-toggle="dropdown" data-offset="0,10"><small>English</small></a>
                          <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                            <ul className="language-list">
                              {["english", "spanish", "french", "turkey"].map((lang, i) => (
                                <li key={i}>
                                  <a href="#" className="language-item">
                                    <img src={`/images/flags/${lang}.png`} alt="" className="language-flag" />
                                    <span className="language-name">{lang.charAt(0).toUpperCase() + lang.slice(1)}</span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-3">
                      <p>&copy; 2023 DashLite. All Rights Reserved.</p>
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
};

export default ResetPassword;
