import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import { toast } from 'react-toastify';


const Profile=() =>{

    const location = useLocation(); // ✅ This sets up location
    // const token=location.state.token;
    // const navigate = useNavigate(); // ✅ This sets up navigation

    const [userprofile,setuserprofile]=React.useState({
        firstName:'',
        lastName:'',
        gender:'',
        dateOfBirth:'',
        email:'',
        personalNr:'',
        image:null,
        imagePreview:'',
        phone:'',
        userName:'',
        password:''
    });

    let userProfile = location.state.User;



    // This runs once on initial load (componentDidMount)
    useEffect(()=>
        {

            const modalEl = document.getElementById('modalZoom');
            if (modalEl) {
              const modalInstance = new window.bootstrap.Modal(modalEl);
              modalInstance.show();
            }
            setuserprofile(userProfile)
            // this.handleChange=this.handleChange.bind(this);
        },[userProfile]);
    
    
    const handleChange=(e)=>{
        e.preventDefault();
        const {name,value}=e.target;
        setuserprofile(pre=>({
            ...pre,
            [name]:value
        }))
    }
    

    return(
        <>
        <div className="nk-app-root">
            <div className="nk-wrap ">

                <div className="nk-content ">
                    <div className="container-fluid">
                        <div className="nk-content-inner">
                            <div className="nk-content-body">
                                <div className="nk-block-head nk-block-head-sm">
                                    <div className="nk-block-between g-3">
                                        <div className="nk-block-head-content">
                                            <h3 className="nk-block-title page-title">Customer Details</h3>
                                            <div className="nk-block-des text-soft">
                                                <p>An example page for customer details</p>
                                            </div>
                                        </div>
                                        <div className="nk-block-head-content">
                                            <a href="html/customer-list.html" className="btn btn-outline-light bg-white d-none d-sm-inline-flex"><em className="icon ni ni-arrow-left"></em><span>Back</span></a>
                                            <a href="html/customer-list.html" className="btn btn-icon btn-outline-light bg-white d-inline-flex d-sm-none"><em className="icon ni ni-arrow-left"></em></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="nk-block">
                                    <div className="row g-gs">
                                        <div className="col-lg-4 col-xl-4 col-xxl-3">
                                            <div className="card card-bordered">
                                                <div className="card-inner-group">
                                                    <div className="card-inner">
                                                        <div className="user-card user-card-s2">
                                                            <div className="user-avatar lg bg-primary">
                                                                <img src="./images/avatar/b-sm.jpg" alt="" />
                                                            </div>
                                                            <div className="user-info">
                                                                <div className="badge bg-light rounded-pill ucap">Platinam</div>
                                                                <h5>{userprofile.firstName ? `${userprofile.userName}` : `Name: ---------`}</h5>
                                                                <span className="sub-text">{userprofile.personalNr ? `${userprofile.personalNr}` : `Personal Nr: `}</span>

                                                                {/* <input
type="text"
value={formData.name}
onChange={e => setFormData({ ...formData, name: e.target.value })}
/> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-inner card-inner-sm">
                                                        <ul className="btn-toolbar justify-center gx-1">
                                                            <li><a href="#" className="btn btn-trigger btn-icon"><em className="icon ni ni-shield-off"></em></a></li>
                                                            <li><a href="#" className="btn btn-trigger btn-icon"><em className="icon ni ni-mail"></em></a></li>
                                                            <li><a href="#" className="btn btn-trigger btn-icon"><em className="icon ni ni-bookmark"></em></a></li>
                                                            <li><a href="#" className="btn btn-trigger btn-icon text-danger"><em className="icon ni ni-na"></em></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-inner">
                                                        <div className="row text-center">
                                                            <div className="col-4">
                                                                <div className="profile-stats">
                                                                    <span className="amount">{userprofile.personalNr}</span>
                                                                    <span className="sub-text">Total Order</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-4">
                                                                <div className="profile-stats">
                                                                    <span className="amount">20</span>
                                                                    <span className="sub-text">Complete</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-4">
                                                                <div className="profile-stats">
                                                                    <span className="amount">3</span>
                                                                    <span className="sub-text">Progress</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-inner">
                                                        <h6 className="overline-title mb-2">Short Details</h6>
                                                        <div className="row g-3">
                                                            <div className="col-sm-6 col-md-4 col-lg-12">
                                                                <span className="sub-text">User ID:</span>
                                                                <span>UD003054</span>
                                                            </div>
                                                            <div className="col-sm-6 col-md-4 col-lg-12">
                                                                <span className="sub-text">Billing Email:</span>
                                                                <span>billing@softnio.com</span>
                                                            </div>
                                                            <div className="col-sm-6 col-md-4 col-lg-12">
                                                                <span className="sub-text">Billing Address:</span>
                                                                <span>551 Swanston Street, Melbourne <br /> Victoria 3053 Australia</span>
                                                            </div>
                                                            <div className="col-sm-6 col-md-4 col-lg-12">
                                                                <span className="sub-text">Language:</span>
                                                                <span>English, France</span>
                                                            </div>
                                                            <div className="col-sm-6 col-md-4 col-lg-12">
                                                                <span className="sub-text">Last Login:</span>
                                                                <span>15 Feb, 2019 01:02 PM</span>
                                                            </div>
                                                            <div className="col-sm-6 col-md-4 col-lg-12">
                                                                <span className="sub-text">KYC Status:</span>
                                                                <span className="lead-text text-success">Approved</span>
                                                            </div>
                                                            <div className="col-sm-6 col-md-4 col-lg-12">
                                                                <span className="sub-text">Register At:</span>
                                                                <span>Nov 24, 2019</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-xl-8 col-xxl-9">
                                            <div className="card card-bordered">
                                                <div className="card-inner">
                                                    <div className="nk-block">
                                                        <div className="overline-title-alt mb-2 mt-2">In Account</div>
                                                        <div className="profile-balance">
                                                            <div className="profile-balance-group gx-4">
                                                                <div className="profile-balance-sub">
                                                                    <div className="profile-balance-amount">
                                                                        <div className="number">237.89 <small className="currency currency-usd">USD</small></div>
                                                                    </div>
                                                                    <div className="profile-balance-subtitle">Wallet Balance</div>
                                                                </div>
                                                                <div className="profile-balance-sub">
                                                                    <span className="profile-balance-plus text-soft"><em className="icon ni ni-plus"></em></span>
                                                                    <div className="profile-balance-amount">
                                                                        <div className="number">1,643</div>
                                                                    </div>
                                                                    <div className="profile-balance-subtitle">Credit Points</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="nk-block">
                                                        <h6 className="lead-text mb-3">Recent Orders</h6>
                                                        <div className="nk-tb-list nk-tb-ulist is-compact border round-sm">
                                                            <div className="nk-tb-item nk-tb-head">
                                                                <div className="nk-tb-col">
                                                                    <span className="sub-text">Order ID</span>
                                                                </div>
                                                                <div className="nk-tb-col tb-col-sm">
                                                                    <span className="sub-text">Product Name</span>
                                                                </div>
                                                                <div className="nk-tb-col tb-col-xxl">
                                                                    <span className="sub-text">Total Price</span>
                                                                </div>
                                                                <div className="nk-tb-col">
                                                                    <span className="sub-text">Status</span>
                                                                </div>
                                                                <div className="nk-tb-col">
                                                                    <span className="sub-text">Delivery</span>
                                                                </div>
                                                            </div>
                                                            <div className="nk-tb-item">
                                                                <div className="nk-tb-col">
                                                                    <a href="#"><span className="fw-bold">#4947</span></a>
                                                                </div>
                                                                <div className="nk-tb-col tb-col-sm">
                                                                    <span className="tb-product">
                                                                        <img src="./images/product/c.png" alt="" className="thumb" />
                                                                        <span className="title">Black Mi Band Smartwatch</span>
                                                                    </span>
                                                                </div>
                                                                <div className="nk-tb-col tb-col-xxl">
                                                                    <span className="amount">$ 89.49</span>
                                                                </div>
                                                                <div className="nk-tb-col">
                                                                    <span className="lead-text text-warning">Shipped</span>
                                                                </div>
                                                                <div className="nk-tb-col">
                                                                    <span className="sub-text">In 2 days</span>
                                                                </div>
                                                            </div>
                                                            <div className="nk-tb-item">
                                                                <div className="nk-tb-col">
                                                                    <a href="#"><span className="fw-bold">#4948</span></a>
                                                                </div>
                                                                <div className="nk-tb-col tb-col-sm">
                                                                    <span className="tb-product">
                                                                        <img src="./images/product/b.png" alt="" className="thumb" />
                                                                        <span className="title">Purple Smartwatch</span>
                                                                    </span>
                                                                </div>
                                                                <div className="nk-tb-col tb-col-xxl">
                                                                    <span className="amount">$299.49</span>
                                                                </div>
                                                                <div className="nk-tb-col">
                                                                    <span className="lead-text text-success">Delivered</span>
                                                                </div>
                                                                <div className="nk-tb-col">
                                                                    <span className="sub-text">12 Dec, 2020</span>
                                                                </div>
                                                            </div>
                                                            <div className="nk-tb-item">
                                                                <div className="nk-tb-col">
                                                                    <a href="#"><span className="fw-bold">#4949</span></a>
                                                                </div>
                                                                <div className="nk-tb-col tb-col-sm">
                                                                    <span className="tb-product">
                                                                        <img src="./images/product/a.png" alt="" className="thumb" />
                                                                        <span className="title">Pink Fitness Tracker</span>
                                                                    </span>
                                                                </div>
                                                                <div className="nk-tb-col tb-col-xxl">
                                                                    <span className="amount">$99.49</span>
                                                                </div>
                                                                <div className="nk-tb-col">
                                                                    <span className="lead-text text-danger">Canceled</span>
                                                                </div>
                                                                <div className="nk-tb-col">
                                                                    <span className="sub-text">Never</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="nk-block">
                                                        <h6 className="lead-text mb-3">Payment Methods</h6>
                                                        <div className="row g-3">
                                                            <div className="col-xl-12 col-xxl-6">
                                                                <div className="card card-bordered">
                                                                    <div className="card-inner">
                                                                        <div className="d-flex align-items-center justify-content-between">
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="icon-circle icon-circle-lg">
                                                                                    <em className="icon ni ni-visa"></em>
                                                                                </div>
                                                                                <div className="ms-3">
                                                                                    <h6 className="lead-text">Visa Card <span className="text-soft ml-1">**** 1955</span></h6>
                                                                                    <span className="sub-text">Expires Nov 2023</span>
                                                                                </div>
                                                                            </div>
                                                                            <ul className="btn-toolbar justify-center gx-1 me-n1 flex-nowrap">
                                                                                <li><a href="#" className="btn btn-trigger btn-icon"><em className="icon ni ni-edit"></em></a></li>
                                                                                <li><a href="#" className="btn btn-trigger btn-icon"><em className="icon ni ni-trash"></em></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-xxl-6">
                                                                <div className="card card-bordered">
                                                                    <div className="card-inner">
                                                                        <div className="d-flex align-items-center justify-content-between">
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="icon-circle icon-circle-lg bg-indigo">
                                                                                    <em className="icon ni ni-american-express"></em>
                                                                                </div>
                                                                                <div className="ms-3">
                                                                                    <h6 className="lead-text">American Express <span className="text-soft ml-1">**** 4352</span></h6>
                                                                                    <span className="sub-text">Expires Feb 2024</span>
                                                                                </div>
                                                                            </div>
                                                                            <ul className="btn-toolbar justify-center gx-1 me-n1 flex-nowrap">
                                                                                <li><a href="#" className="btn btn-trigger btn-icon"><em className="icon ni ni-edit"></em></a></li>
                                                                                <li><a href="#" className="btn btn-trigger btn-icon"><em className="icon ni ni-trash"></em></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-xxl-6">
                                                                <div className="card card-bordered">
                                                                    <div className="card-inner">
                                                                        <div className="d-flex align-items-center justify-content-between">
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="icon-circle icon-circle-lg bg-orange">
                                                                                    <em className="icon ni ni-mc"></em>
                                                                                </div>
                                                                                <div className="ms-3">
                                                                                    <h6 className="lead-text">Mastercard <span className="text-soft ml-1">**** 9478</span></h6>
                                                                                    <span className="sub-text text-danger">Expired</span>
                                                                                </div>
                                                                            </div>
                                                                            <ul className="btn-toolbar justify-center gx-1 me-n1 flex-nowrap">
                                                                                <li><a href="#" className="btn btn-trigger btn-icon"><em className="icon ni ni-edit"></em></a></li>
                                                                                <li><a href="#" className="btn btn-trigger btn-icon"><em className="icon ni ni-trash"></em></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-xxl-6">
                                                                <button className="h-100 w-100 bg-white border border-dashed round-sm p-4 d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#add-card">
                                                                    <span className="text-soft">Add New Card</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="nk-block">
                                                        <h6 className="lead-text">Connect to Facebook</h6>
                                                        <div className="card card-bordered">
                                                            <div className="card-inner">
                                                                <div className="between-center flex-wrap flex-md-nowrap g-3">
                                                                    <div className="media media-center gx-3 wide-xs">
                                                                        <div className="media-object">
                                                                            <em className="icon icon-circle icon-circle-lg ni ni-facebook-f"></em>
                                                                        </div>
                                                                        <div className="media-content">
                                                                            <p>You have successfully connected with your facebook account, you can easily log in using your account too.</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="nk-block-actions flex-shrink-0">
                                                                        <a href="#" className="btn btn-lg btn-danger">Revoke Access</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 className="lead-text">Connect to Google</h6>
                                                        <div className="card card-bordered">
                                                            <div className="card-inner">
                                                                <div className="between-center flex-wrap flex-md-nowrap g-3">
                                                                    <div className="media media-center gx-3 wide-xs">
                                                                        <div className="media-object">
                                                                            <em className="icon icon-circle icon-circle-lg ni ni-google"></em>
                                                                        </div>
                                                                        <div className="media-content">
                                                                            <p>You can connect with your google account. <em className="d-block text-soft">Not connected yet</em></p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="nk-block-actions flex-shrink-0">
                                                                        <a href="#" className="btn btn-lg btn-dim btn-primary">Connect</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="nk-block-head nk-block-head-sm">
                                                            <div className="nk-block-head-content">
                                                                <h6 className="nk-block-title">Import Contacts <a href="#" className="link link-primary ms-auto">Import from Google</a></h6>
                                                                <div className="nk-block-des">
                                                                    <p>You have not imported contacts from your mobile phone.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nk-footer bg-white">
                    <div className="container-fluid">
                        <div className="nk-footer-wrap">
                            <div className="nk-footer-copyright"> &copy; 2023 Dashlite. Template by <a href="https://softnio.com" target="_blank">Softnio</a>
                            </div>
                            <div className="nk-footer-links">
                                <ul className="nav nav-sm">
                                    <li className="nav-item dropup">
                                        <a href="#" className="dropdown-toggle dropdown-indicator has-indicator nav-link text-base" data-bs-toggle="dropdown" data-offset="0,10"><span>English</span></a>
                                        <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                            <ul className="language-list">
                                                <li>
                                                    <a href="#" className="language-item">
                                                        <span className="language-name">English</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="language-item">
                                                        <span className="language-name">Español</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="language-item">
                                                        <span className="language-name">Français</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="language-item">
                                                        <span className="language-name">Türkçe</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a data-bs-toggle="modal" href="#region" className="nav-link"><em className="icon ni ni-globe"></em><span className="ms-1">Select Region</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal fade zoom" tabIndex={-1} id="modalZoom">
                <div className="modal-dialog modal-lg" role="document">
                <form action="#" className="form-validate is-alter">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Profile : {userprofile.personalNr} </h5>
                            <a href="#" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <em className="icon ni ni-cross"></em>
                            </a>
                        </div>
                        <div className="modal-body">
                        <div className="card">
                                        <div className="card-inner">
                                            
                                                <div className="row g-gs">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label" htmlFor="fva-full-name">First Name</label>
                                                            <div className="form-control-wrap">
                                                                <input type="text" className="form-control" value={userprofile.firstName ?? ''}
                                                                onChange={handleChange}
                                                                id="fva-full-name" name="fva-full-name" required/>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="form-label" htmlFor="fva-last-name">Last Name</label>
                                                            <div className="form-control-wrap">
                                                                <input type="text" className="form-control" value={userprofile.lastName ?? ''}
                                                                 onChange={handleChange} id="fva-last-name" name="fva-last-name" required/>
                                                            </div>
                                                        </div>
                                                       
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label" htmlFor="email">Email address</label>
                                                            <div className="form-control-wrap">
                                                                <div className="form-icon form-icon-right">
                                                                    <em className="icon ni ni-mail"></em>
                                                                </div>
                                                                <input type="text" className="form-control" value={userprofile.email ?? ''} id="email"  onChange={handleChange} name="email" readOnly/>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="form-label" htmlFor="user">User Name</label>
                                                            <div className="form-control-wrap">
                                                                <div className="form-icon form-icon-right">
                                                                    <em className="icon ni ni-user"></em>
                                                                </div>
                                                                <input type="text" className="form-control" value={userprofile.userName ?? ''} id="user"  onChange={handleChange} name="user" readOnly/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label" htmlFor="fv-phone">Phone</label>
                                                            <div className="form-control-wrap">
                                                                <div className="input-group">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text" id="fv-phone">+49</span>
                                                                    </div>
                                                                    <input type="text" className="form-control" value={userprofile.phone ?? ''}  onChange={handleChange}  required/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label" htmlFor="fv-phone">Sex / Gender</label>
                                                            <div className="form-control-wrap">
                                                                <ul className="custom-control-group">
                                                                    <li>
                                                                        <div className="custom-control custom-radio custom-control-pro no-control">
                                                                            <input type="radio" className="custom-control-input" name="fv-sex" id="alt-sex-male" value={userprofile.gender ?? ''}  onChange={handleChange} required/>
                                                                            <label className="custom-control-label" htmlFor="alt-sex-male">Male</label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="custom-control custom-radio custom-control-pro no-control">
                                                                            <input type="radio" className="custom-control-input" name="fv-sex" id="alt-sex-female" value={userprofile.gender?? ''} onChange={handleChange} required/>
                                                                            <label className="custom-control-label" htmlFor="alt-sex-female">Female</label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="custom-control custom-radio custom-control-pro no-control">
                                                                            <input type="radio" className="custom-control-input" name="fv-sex" id="alt-sex-other" value={userprofile.gender?? ''} onChange={handleChange} required/>
                                                                            <label className="custom-control-label" htmlFor="alt-sex-other">Others</label>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label" htmlFor="department-select">Department</label>
                                                            <div className="form-control-wrap ">
                                                                <select className="form-select js-select2" id="department-select" name="department-select" data-placeholder="Select a option"
                                                                value={userprofile.personalNr} onChange={(e) => setuserprofile(prev => ({ ...prev, personalNr: e.target.value }))}
                                                                required>
                                                                    <option label="empty" value=""></option>
                                                                    <option value="1717">AutoStore</option>
                                                                    <option value="fva-tq">Tachnical Question</option>
                                                                    <option value="fva-ab">Account &amp; Billing</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label" htmlFor="role-select">Role</label>
                                                            <div className="form-control-wrap ">
                                                                <select className="form-select js-select2" id="role-select" name="role-select" data-placeholder="Select a option"
                                                                value={userprofile.personalNr} onChange={(e)=>setuserprofile(pre=>({...pre,personalNr:e.target.value}))}
                                                                required
                                                                style={{ position: 'absolute', top: '532.675px', left: '937.4px' }}>
                                                                    <option label="empty" value=""></option>
                                                                    <option value="1717">Packer</option>
                                                                    <option value="fva-tq">Tachnical Question</option>
                                                                    <option value="fva-ab">Account &amp; Billing</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="form-label" htmlFor="fva-message">Message</label>
                                                            <div className="form-control-wrap">
                                                                <textarea className="form-control form-control-sm" id="fva-message" name="fva-message" placeholder="Write your message" required></textarea>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="form-label">Communication</label>
                                                            <ul className="custom-control-group g-3 align-center">
                                                                <li>
                                                                    <div className="custom-control custom-checkbox">
                                                                        <input type="checkbox" className="custom-control-input" defaultChecked={true} name="fva-com" id="fva-com-email" required/>
                                                                        <label className="custom-control-label" htmlFor="fva-com-email">Email</label>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="custom-control custom-checkbox">
                                                                        <input type="checkbox" className="custom-control-input" defaultChecked={false} name="fva-com" id="fva-com-sms" required/>
                                                                        <label className="custom-control-label" htmlFor="fva-com-sms">SMS</label>
                                                                    </div>
                                                                </li>
                                                                {/* <li>
                                                                    <div className="custom-control custom-checkbox">
                                                                        <input type="checkbox" className="custom-control-input" name="fva-com" id="fva-com-phone" required/>
                                                                        <label className="custom-control-label" htmlFor="fva-com-phone">Phone</label>
                                                                    </div>
                                                                </li> */}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                        </div>
                                    </div>
                                </div>
                        <div className="modal-footer bg-light">
                            <div className="col-sm-06">
                                <div className="form-group d-flex">
                                    <button type="submit" className="btn btn-dim btn-outline-success me-2">Save</button>
                                
                                    {/* <button type="submit" className="btn btn-dim btn-outline-danger">Cancel</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                </div>
        </div>
        </>
    );
}


export default Profile;