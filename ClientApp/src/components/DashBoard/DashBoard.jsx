import { useState } from "react"

const DashBoard =()=>{

    const [Dashboard,setDashboard]=useState({

    });
    return(
        <div className="nk-content nk-content-fluid">
        <div className="container-xl wide-xl">
            <div className="nk-content-body">
                <div className="nk-block-head nk-block-head-sm">
                    <div className="nk-block-between">
                        <div className="nk-block-head-content">
                            <h3 className="nk-block-title page-title">Campaign Management</h3>
                            <div className="nk-block-des text-soft">
                                <p>Welcome to Campaign Management Dashboard.</p>
                            </div>
                        </div>
                        <div className="nk-block-head-content">
                            <div className="toggle-wrap nk-block-tools-toggle">
                                <a href="#" className="btn btn-icon btn-trigger toggle-expand me-n1" data-target="pageMenu"><em className="icon ni ni-more-v"></em></a>
                                <div className="toggle-expand-content" data-content="pageMenu">
                                    <ul className="nk-block-tools g-3">
                                        <li>
                                            <a href="#" className="dropdown-toggle btn btn-white btn-dim btn-outline-light" data-bs-toggle="dropdown"><em className="icon ni ni-plus"></em><span><span className="d-md-none">Add</span><span className="d-none d-md-block">Add Campaign</span></span></a>
                                        </li>
                                        <li className="nk-block-tools-opt"><a href="#" className="btn btn-primary"><em className="icon ni ni-reports"></em><span>Reports</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nk-block">
                    <div className="row g-gs">
                        <div className="col-lg-3 col-sm-6">
                            <div className="card h-100 bg-primary">
                                <div className="nk-cmwg nk-cmwg1">
                                    <div className="card-inner pt-3">
                                        <div className="d-flex justify-content-between">
                                            <div className="flex-item">
                                                <div className="text-white d-flex flex-wrap">
                                                    <span className="fs-2 me-1">56.8K</span>
                                                    <span className="align-self-end fs-14px pb-1"><em className="icon ni ni-arrow-long-up"></em>12.4%</span>
                                                </div>
                                                <h6 className="text-white">Running Campaign</h6>
                                            </div>
                                            <div className="card-tools me-n1">
                                                <div className="dropdown">
                                                    <a href="#" className="dropdown-toggle btn btn-icon btn-sm btn-trigger on-dark" data-bs-toggle="dropdown"><em className="icon ni ni-more-v"></em></a>
                                                    <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                                        <ul className="link-list-opt no-bdr">
                                                            <li><a href="#" className="active"><span>15 Days</span></a></li>
                                                            <li><a href="#"><span>30 Days</span></a></li>
                                                            <li><a href="#"><span>3 Months</span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nk-ck-wrap mt-auto overflow-hidden rounded-bottom">
                                        <div className="nk-cmwg1-ck">
                                            <canvas className="campaign-line-chart-s1 rounded-bottom" id="runningCampaign"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="card h-100 bg-info">
                                <div className="nk-cmwg nk-cmwg1">
                                    <div className="card-inner pt-3">
                                        <div className="d-flex justify-content-between">
                                            <div className="flex-item">
                                                <div className="text-white d-flex flex-wrap">
                                                    <span className="fs-2 me-1">857.6K</span>
                                                    <span className="align-self-end fs-14px pb-1"><em className="icon ni ni-arrow-long-up"></em>12.4%</span>
                                                </div>
                                                <h6 className="text-white">Total Audience</h6>
                                            </div>
                                            <div className="card-tools me-n1">
                                                <div className="dropdown">
                                                    <a href="#" className="dropdown-toggle btn btn-icon btn-sm btn-trigger on-dark" data-bs-toggle="dropdown"><em className="icon ni ni-more-v"></em></a>
                                                    <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                                        <ul className="link-list-opt no-bdr">
                                                            <li><a href="#" className="active"><span>15 Days</span></a></li>
                                                            <li><a href="#"><span>30 Days</span></a></li>
                                                            <li><a href="#"><span>3 Months</span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nk-cmwg1-ck mt-auto">
                                        <canvas className="campaign-line-chart-s1 rounded-bottom" id="totalAudience"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="card h-100 bg-warning">
                                <div className="nk-cmwg nk-cmwg1">
                                    <div className="card-inner pt-3">
                                        <div className="d-flex justify-content-between">
                                            <div className="flex-item">
                                                <div className="text-white d-flex flex-wrap">
                                                    <span className="fs-2 me-1">9.3K</span>
                                                    <span className="align-self-end fs-14px pb-1"><em className="icon ni ni-arrow-long-up"></em>12.4%</span>
                                                </div>
                                                <h6 className="text-white">Avg. Rating</h6>
                                            </div>
                                            <div className="card-tools me-n1">
                                                <div className="dropdown">
                                                    <a href="#" className="dropdown-toggle btn btn-icon btn-sm btn-trigger on-dark" data-bs-toggle="dropdown"><em className="icon ni ni-more-v"></em></a>
                                                    <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                                        <ul className="link-list-opt no-bdr">
                                                            <li><a href="#" className="active"><span>15 Days</span></a></li>
                                                            <li><a href="#"><span>30 Days</span></a></li>
                                                            <li><a href="#"><span>3 Months</span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nk-ck-wrap mt-auto overflow-hidden rounded-bottom">
                                        <div className="nk-cmwg1-ck">
                                            <canvas className="campaign-bar-chart-s1 rounded-bottom" id="avgRating"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="card h-100 bg-danger">
                                <div className="nk-cmwg nk-cmwg1">
                                    <div className="card-inner pt-3">
                                        <div className="d-flex justify-content-between">
                                            <div className="flex-item">
                                                <div className="text-white d-flex flex-wrap">
                                                    <span className="fs-2 me-1">175.2K</span>
                                                    <span className="align-self-end fs-14px pb-1"><em className="icon ni ni-arrow-long-up"></em>12.4%</span>
                                                </div>
                                                <h6 className="text-white">Subscriber</h6>
                                            </div>
                                            <div className="card-tools me-n1">
                                                <div className="dropdown">
                                                    <a href="#" className="dropdown-toggle btn btn-icon btn-sm btn-trigger on-dark" data-bs-toggle="dropdown"><em className="icon ni ni-more-v"></em></a>
                                                    <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                                        <ul className="link-list-opt no-bdr">
                                                            <li><a href="#" className="active"><span>15 Days</span></a></li>
                                                            <li><a href="#"><span>30 Days</span></a></li>
                                                            <li><a href="#"><span>3 Months</span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nk-ck-wrap mt-auto overflow-hidden rounded-bottom">
                                        <div className="nk-cmwg1-ck">
                                            <canvas className="campaign-line-chart-s1 rounded-bottom" id="newSubscriber"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-8 col-lg-7">
                            <div className="card card-full">
                                <div className="card-inner">
                                    <div className="card-title-group">
                                        <div className="card-title">
                                            <h6 className="title">Performance Overview</h6>
                                        </div>
                                        <div className="card-tools">
                                            <ul className="card-tools-nav">
                                                <li><a href="#"><span>Week</span></a></li>
                                                <li className="active"><a href="#"><span>Month</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-inner pt-0">
                                    <ul className="d-flex justify-content-center flex-wrap gx-3 mb-2">
                                        <li className="align-center"><span className="dot" data-bg="#733AEA"></span><span className="ms-1">Social</span></li>
                                        <li className="align-center"><span className="dot" data-bg="#0FCA7A"></span><span className="ms-1">Email</span></li>
                                        <li className="align-center"><span className="dot" data-bg="#F2426E"></span><span className="ms-1">Courses</span></li>
                                        <li className="align-center"><span className="dot" data-bg="#FD9722"></span><span className="ms-1">Google Ads</span></li>
                                    </ul>
                                    <div className="nk-cmwg2-ck">
                                        <canvas className="campaign-line-chart-s2" id="performanceOverview"></canvas>
                                    </div>
                                    <div className="chart-label-group ms-5">
                                        <div className="chart-label">03 Jan</div>
                                        <div className="chart-label d-none d-sm-block">10 Jan</div>
                                        <div className="chart-label d-none d-sm-block">17 Jan</div>
                                        <div className="chart-label d-none d-sm-block">24 Jan</div>
                                        <div className="chart-label">31 Jan</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-lg-5">
                            <div className="card card-full">
                                <div className="card-inner">
                                    <div className="card-title-group">
                                        <div className="card-title">
                                            <h6 className="title">Top Channels</h6>
                                        </div>
                                        <div className="card-tools">
                                            <a href="#" className="link">View All</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-inner pt-0">
                                    <ul className="gy-4">
                                        <li className="justify-between align-center border-bottom border-0 border-dashed">
                                            <div className="align-center">
                                                <div className="user-avatar sq bg-transparent"><img src="./images/icons/campaign/brand/google.png" alt=""/></div>
                                                <div className="ms-2">
                                                    <div className="lead-text">Google </div>
                                                    <div className="sub-text">SEO & PPC</div>
                                                </div>
                                            </div>
                                            <div className="align-center">
                                                <div className="sub-text me-2">70%</div>
                                                <div className="progress rounded-pill w-80px">
                                                    <div className="progress-bar bg-success rounded-pill" data-progress="70"></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="justify-between align-center border-bottom border-0 border-dashed">
                                            <div className="align-center">
                                                <div className="user-avatar sq bg-transparent"><img src="./images/icons/campaign/brand/instagram.png" alt=""/></div>
                                                <div className="ms-2">
                                                    <div className="lead-text">Instagram </div>
                                                    <div className="sub-text">Social Media</div>
                                                </div>
                                            </div>
                                            <div className="align-center">
                                                <div className="sub-text me-2">86%</div>
                                                <div className="progress rounded-pill w-80px">
                                                    <div className="progress-bar bg-primary rounded-pill" data-progress="86"></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="justify-between align-center border-bottom border-0 border-dashed">
                                            <div className="align-center">
                                                <div className="user-avatar sq bg-transparent"><img src="./images/icons/campaign/brand/linkedin.png" alt=""/></div>
                                                <div className="ms-2">
                                                    <div className="lead-text">Linked In </div>
                                                    <div className="sub-text">Social Media</div>
                                                </div>
                                            </div>
                                            <div className="align-center">
                                                <div className="sub-text me-2">75%</div>
                                                <div className="progress rounded-pill w-80px">
                                                    <div className="progress-bar bg-danger rounded-pill" data-progress="75"></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="justify-between align-center border-bottom border-0 border-dashed">
                                            <div className="align-center">
                                                <div className="user-avatar sq bg-transparent"><img src="./images/icons/campaign/brand/slack.png" alt=""/></div>
                                                <div className="ms-2">
                                                    <div className="lead-text">Slack </div>
                                                    <div className="sub-text">Messanger</div>
                                                </div>
                                            </div>
                                            <div className="align-center">
                                                <div className="sub-text me-2">64%</div>
                                                <div className="progress rounded-pill w-80px">
                                                    <div className="progress-bar bg-info rounded-pill" data-progress="64"></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="justify-between align-center">
                                            <div className="align-center">
                                                <div className="user-avatar sq bg-transparent"><img src="./images/icons/campaign/brand/twitter.png" alt=""/></div>
                                                <div className="ms-2">
                                                    <div className="lead-text">Twitter </div>
                                                    <div className="sub-text">Social Media</div>
                                                </div>
                                            </div>
                                            <div className="align-center">
                                                <div className="sub-text me-2">54%</div>
                                                <div className="progress rounded-pill w-80px">
                                                    <div className="progress-bar bg-warning rounded-pill" data-progress="54"></div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-8">
                            <div className="card card-full">
                                <div className="card-inner">
                                    <div className="card-title-group">
                                        <div className="card-title">
                                            <h6 className="title">Active Campaign</h6>
                                        </div>
                                        <div className="card-tools">
                                            <a href="#" className="link">View All</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-inner py-0 mt-n2">
                                    <div className="nk-tb-list nk-tb-flush nk-tb-dashed">
                                        <div className="nk-tb-item nk-tb-head">
                                            <div className="nk-tb-col"><span>Subject</span></div>
                                            <div className="nk-tb-col tb-col-mb"><span>Channels</span></div>
                                            <div className="nk-tb-col tb-col-sm"><span>Status</span></div>
                                            <div className="nk-tb-col tb-col-md"><span>Assignee</span></div>
                                            <div className="nk-tb-col text-end"><span>Date Range</span></div>
                                        </div>
                                        <div className="nk-tb-item">
                                            <div className="nk-tb-col">
                                                <span className="tb-lead">Happy Christmas <span className="dot dot-success d-sm-none ms-1"></span></span>
                                                <span className="tb-sub">Created on 01 Dec 22</span>
                                            </div>
                                            <div className="nk-tb-col tb-col-mb">
                                                <ul className="d-flex gx-1">
                                                    <li className="text-facebook"><em className="icon ni ni-facebook-f"></em></li>
                                                    <li className="text-instagram"><em className="icon ni ni-instagram"></em></li>
                                                    <li className="text-linkedin"><em className="icon ni ni-linkedin"></em></li>
                                                    <li className="text-twitter"><em className="icon ni ni-twitter"></em></li>
                                                    <li className="text-youtube"><em className="icon ni ni-youtube-fill"></em></li>
                                                </ul>
                                            </div>
                                            <div className="nk-tb-col tb-col-sm">
                                                <div className="badge badge-dim bg-success">Live Now</div>
                                            </div>
                                            <div className="nk-tb-col tb-col-md">
                                                <div className="user-avatar-group">
                                                    <div className="user-avatar xs">
                                                        <img src="./images/avatar/e-sm.jpg" alt=""/>
                                                    </div>
                                                    <div className="user-avatar xs">
                                                        <img src="./images/avatar/f-sm.jpg" alt=""/>
                                                    </div>
                                                    <div className="user-avatar xs">
                                                        <img src="./images/avatar/g-sm.jpg" alt=""/>
                                                    </div>
                                                    <div className="user-avatar xs">
                                                        <span>2+</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nk-tb-col text-end"><span>01 Dec - 07 Dec</span></div>
                                        </div>
                                        <div className="nk-tb-item">
                                            <div className="nk-tb-col">
                                                <span className="tb-lead">Black Friday <span className="dot dot-success d-sm-none ms-1"></span></span>
                                                <span className="tb-sub">Created on 01 Dec 22</span>
                                            </div>
                                            <div className="nk-tb-col tb-col-mb">
                                                <ul className="d-flex gx-1">
                                                    <li className="text-linkedin"><em className="icon ni ni-linkedin"></em></li>
                                                    <li className="text-facebook"><em className="icon ni ni-facebook-f"></em></li>
                                                    <li className="text-instagram"><em className="icon ni ni-instagram"></em></li>
                                                    <li className="text-youtube"><em className="icon ni ni-youtube-fill"></em></li>
                                                </ul>
                                            </div>
                                            <div className="nk-tb-col tb-col-sm">
                                                <div className="badge badge-dim bg-success">Live Now</div>
                                            </div>
                                            <div className="nk-tb-col tb-col-md">
                                                <div className="user-avatar-group">
                                                    <div className="user-avatar xs">
                                                        <img src="./images/avatar/h-sm.jpg" alt=""/>
                                                    </div>
                                                    <div className="user-avatar xs">
                                                        <img src="./images/avatar/i-sm.jpg" alt=""/>
                                                    </div>
                                                    <div className="user-avatar xs">
                                                        <img src="./images/avatar/j-sm.jpg" alt=""/>
                                                    </div>
                                                    <div className="user-avatar xs">
                                                        <span>7+</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nk-tb-col text-end"><span>01 Dec - 07 Dec</span></div>
                                        </div>
                                        <div className="nk-tb-item">
                                            <div className="nk-tb-col">
                                                <span className="tb-lead">Tree Plantation <span className="dot dot-warning d-sm-none ms-1"></span></span>
                                                <span className="tb-sub">Created on 01 Jan 23</span>
                                            </div>
                                            <div className="nk-tb-col tb-col-mb">
                                                <ul className="d-flex gx-1">
                                                    <li className="text-twitter"><em className="icon ni ni-twitter"></em></li>
                                                    <li className="text-instagram"><em className="icon ni ni-instagram"></em></li>
                                                    <li className="text-linkedin"><em className="icon ni ni-linkedin"></em></li>
                                                </ul>
                                            </div>
                                            <div className="nk-tb-col tb-col-sm">
                                                <div className="badge badge-dim bg-warning">Paused</div>
                                            </div>
                                            <div className="nk-tb-col tb-col-md">
                                                <div className="user-avatar-group">
                                                    <div className="user-avatar xs">
                                                        <img src="./images/avatar/k-sm.jpg" alt=""/>
                                                    </div>
                                                    <div className="user-avatar xs bg-pink">
                                                        <span>AE</span>
                                                    </div>
                                                    <div className="user-avatar xs">
                                                        <img src="./images/avatar/e-sm.jpg" alt=""/>
                                                    </div>
                                                    <div className="user-avatar xs">
                                                        <span>3+</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nk-tb-col text-end"><span>01 Dec - 07 Dec</span></div>
                                        </div>
                                        <div className="nk-tb-item">
                                            <div className="nk-tb-col">
                                                <span className="tb-lead">Getaway Trailer <span className="dot dot-success d-sm-none ms-1"></span></span>
                                                <span className="tb-sub">Created on 12 Dec 22</span>
                                            </div>
                                            <div className="nk-tb-col tb-col-mb">
                                                <ul className="d-flex gx-1">
                                                    <li className="text-linkedin"><em className="icon ni ni-linkedin"></em></li>
                                                    <li className="text-twitter"><em className="icon ni ni-twitter"></em></li>
                                                    <li className="text-facebook"><em className="icon ni ni-facebook-f"></em></li>
                                                    <li className="text-youtube"><em className="icon ni ni-youtube-fill"></em></li>
                                                </ul>
                                            </div>
                                            <div className="nk-tb-col tb-col-sm">
                                                <div className="badge badge-dim bg-success">Live Now</div>
                                            </div>
                                            <div className="nk-tb-col tb-col-md">
                                                <div className="user-avatar-group">
                                                    <div className="user-avatar xs">
                                                        <img src="./images/avatar/i-sm.jpg" alt=""/>
                                                    </div>
                                                    <div className="user-avatar xs">
                                                        <img src="./images/avatar/k-sm.jpg" alt=""/>
                                                    </div>
                                                    <div className="user-avatar xs">
                                                        <img src="./images/avatar/e-sm.jpg" alt=""/>
                                                    </div>
                                                    <div className="user-avatar xs">
                                                        <img src="./images/avatar/g-sm.jpg" alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nk-tb-col text-end"><span>01 Dec - 07 Dec</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-md-6">
                            <div className="card card-full">
                                <div className="card-inner">
                                    <div className="card-title-group">
                                        <div className="card-title">
                                            <h6 className="title">Key Statistics</h6>
                                        </div>
                                        <div className="card-tools me-n1 mt-n1">
                                            <div className="dropdown">
                                                <a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-bs-toggle="dropdown"><em className="icon ni ni-more-h"></em></a>
                                                <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                                    <ul className="link-list-opt no-bdr">
                                                        <li><a href="#" className="active"><span>15 Days</span></a></li>
                                                        <li><a href="#"><span>30 Days</span></a></li>
                                                        <li><a href="#"><span>3 Months</span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-inner pt-0">
                                    <ul className="gy-4">
                                        <li className="border-bottom border-0 border-dashed">
                                            <div className="mb-1">
                                                <span className="fs-2 lh-1 mb-1 text-head">85.6K</span>
                                                <div className="sub-text">Average Like</div>
                                            </div>
                                            <div className="align-center">
                                                <div className="small text-primary me-2">54%</div>
                                                <div className="progress progress-md rounded-pill w-100 bg-primary-dim">
                                                    <div className="progress-bar bg-primary rounded-pill" data-progress="54"></div>
                                                </div>
                                                <div className="dropdown ms-3">
                                                    <a className="dropdown-toggle dropdown-indicator sub-text" href="#" type="button" data-bs-toggle="dropdown" data-bs-offset="0, 10">Dec 22 - Feb 22</a>
                                                    <div className="dropdown-menu dropdown-menu-end text-right">
                                                        <ul className="link-list-opt">
                                                            <li><a href="#"><span>Dec 22 - Feb 22</span></a></li>
                                                            <li><a href="#"><span>Oct 22 - Dec 22</span></a></li>
                                                            <li><a href="#"><span>Aug 22 - Oct 22</span></a></li>
                                                            <li><a href="#"><span>Jun 22 - Aug 22</span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="border-bottom border-0 border-dashed">
                                            <div className="mb-1">
                                                <span className="fs-2 lh-1 mb-1 text-head">42.7K</span>
                                                <div className="sub-text">Average Comments</div>
                                            </div>
                                            <div className="align-center">
                                                <div className="small text-danger me-2">84%</div>
                                                <div className="progress progress-md rounded-pill w-100 bg-danger-dim">
                                                    <div className="progress-bar bg-danger rounded-pill" data-progress="84"></div>
                                                </div>
                                                <div className="dropdown ms-3">
                                                    <a className="dropdown-toggle dropdown-indicator sub-text" href="#" type="button" data-bs-toggle="dropdown" data-bs-offset="0, 10">Dec 22 - Feb 22</a>
                                                    <div className="dropdown-menu dropdown-menu-end text-right">
                                                        <ul className="link-list-opt">
                                                            <li><a href="#"><span>Dec 22 - Feb 22</span></a></li>
                                                            <li><a href="#"><span>Oct 22 - Dec 22</span></a></li>
                                                            <li><a href="#"><span>Aug 22 - Oct 22</span></a></li>
                                                            <li><a href="#"><span>Jun 22 - Aug 22</span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="mb-1">
                                                <span className="fs-2 lh-1 mb-1 text-head">25.4K</span>
                                                <div className="sub-text">Average Shares</div>
                                            </div>
                                            <div className="align-center">
                                                <div className="small text-success me-2">62%</div>
                                                <div className="progress progress-md rounded-pill w-100 bg-success-dim">
                                                    <div className="progress-bar bg-success rounded-pill" data-progress="62"></div>
                                                </div>
                                                <div className="dropdown ms-3">
                                                    <a className="dropdown-toggle dropdown-indicator sub-text" href="#" type="button" data-bs-toggle="dropdown" data-bs-offset="0, 10">Dec 22 - Feb 22</a>
                                                    <div className="dropdown-menu dropdown-menu-end text-right">
                                                        <ul className="link-list-opt">
                                                            <li><a href="#"><span>Dec 22 - Feb 22</span></a></li>
                                                            <li><a href="#"><span>Oct 22 - Dec 22</span></a></li>
                                                            <li><a href="#"><span>Aug 22 - Oct 22</span></a></li>
                                                            <li><a href="#"><span>Jun 22 - Aug 22</span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-md-6">
                            <div className="card card-full">
                                <div className="card-inner">
                                    <div className="card-title-group">
                                        <div className="card-title">
                                            <h6 className="title">Instagram Campaign</h6>
                                        </div>
                                        <div className="card-tools">
                                            <ul className="d-flex gx-2">
                                                <li><button className="btn btn-icon btn-sm btn-outline-light rounded-pill"><em className="icon ni ni-chevron-left"></em></button></li>
                                                <li><button className="btn btn-icon btn-sm btn-outline-primary rounded-pill"><em className="icon ni ni-chevron-right"></em></button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-inner pt-0">
                                    <div className="rounded px-2 py-4 bg-primary">
                                        <div className="d-flex">
                                            <div className="w-50 px-4">
                                                <span className="fs-2 lh-1 mb-1 text-white">24.6K</span>
                                                <div className="fs-14px text-white text-opacity-75">New Followers</div>
                                            </div>
                                            <div className="border-start opacity-50"></div>
                                            <div className="w-50 px-4">
                                                <span className="fs-2 lh-1 mb-1 text-white">120.0K</span>
                                                <div className="fs-14px text-white text-opacity-75">Followers Goal</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nk-cmwg3-ck mt-3">
                                        <canvas className="campaign-line-chart-s3" id="instagramCampaign"></canvas>
                                    </div>
                                    <div className="chart-label-group ms-5 mt-0">
                                        <div className="chart-label">03 Jan</div>
                                        <div className="chart-label d-none d-sm-block">10 Jan</div>
                                        <div className="chart-label d-none d-sm-block">17 Jan</div>
                                        <div className="chart-label d-none d-sm-block">24 Jan</div>
                                        <div className="chart-label">31 Jan</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-md-6">
                            <div className="card card-full">
                                <div className="card-inner">
                                    <div className="card-title-group">
                                        <div className="card-title">
                                            <h6 className="title">Clicks by location</h6>
                                        </div>
                                        <div className="card-tools me-n1 mt-n1">
                                            <div className="dropdown">
                                                <a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-bs-toggle="dropdown"><em className="icon ni ni-more-h"></em></a>
                                                <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                                    <ul className="link-list-opt no-bdr">
                                                        <li><a href="#" className="active"><span>15 Days</span></a></li>
                                                        <li><a href="#"><span>30 Days</span></a></li>
                                                        <li><a href="#"><span>3 Months</span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-inner pt-0">
                                    <ul className="my-n2">
                                        <li className="align-center justify-between py-1 gx-1 border-bottom border-0 border-dashed">
                                            <div className="lead-text">United States</div>
                                            <div className="sub-text">14,356</div>
                                        </li>
                                        <li className="align-center justify-between py-1 gx-1 border-bottom border-0 border-dashed">
                                            <div className="lead-text">Ireland</div>
                                            <div className="sub-text">11,203</div>
                                        </li>
                                        <li className="align-center justify-between py-1 gx-1 border-bottom border-0 border-dashed">
                                            <div className="lead-text">United Kingdom</div>
                                            <div className="sub-text">10,653</div>
                                        </li>
                                        <li className="align-center justify-between py-1 gx-1 border-bottom border-0 border-dashed">
                                            <div className="lead-text">Canada</div>
                                            <div className="sub-text">7,215</div>
                                        </li>
                                        <li className="align-center justify-between py-1 gx-1 border-bottom border-0 border-dashed">
                                            <div className="lead-text">Australia</div>
                                            <div className="sub-text">6,653</div>
                                        </li>
                                        <li className="align-center justify-between py-1 gx-1 border-bottom border-0 border-dashed">
                                            <div className="lead-text">Japan</div>
                                            <div className="sub-text">3,945</div>
                                        </li>
                                        <li className="align-center justify-between py-1 gx-1 border-bottom border-0 border-dashed">
                                            <div className="lead-text">China</div>
                                            <div className="sub-text">2,945</div>
                                        </li>
                                        <li className="align-center justify-between py-1 gx-1">
                                            <div className="lead-text">France</div>
                                            <div className="sub-text">954</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-md-6">
                            <div className="card card-full">
                                <div className="card-inner">
                                    <div className="card-title-group">
                                        <div className="card-title">
                                            <h6 className="title">Web conv. rate</h6>
                                        </div>
                                        <div className="card-tools me-n1 mt-n1">
                                            <div className="dropdown">
                                                <a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-bs-toggle="dropdown"><em className="icon ni ni-more-h"></em></a>
                                                <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                                    <ul className="link-list-opt no-bdr">
                                                        <li><a href="#" className="active"><span>15 Days</span></a></li>
                                                        <li><a href="#"><span>30 Days</span></a></li>
                                                        <li><a href="#"><span>3 Months</span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-inner pt-0">
                                    <div className="">
                                        <span className="fs-2 lh-1 mb-1 text-head">3.86%</span>
                                        <div className="fs-14px">This month</div>
                                    </div>
                                    <div className="nk-cmwg4-ck mt-4">
                                        <canvas className="campaign-line-chart-s3" id="webConvRate"></canvas>
                                    </div>
                                    <div className="chart-label-group ms-5 mt-0">
                                        <div className="chart-label">Jan</div>
                                        <div className="chart-label d-none d-sm-block">Feb</div>
                                        <div className="chart-label d-none d-sm-block">Mar</div>
                                        <div className="chart-label d-none d-sm-block">Apr</div>
                                        <div className="chart-label d-none d-sm-block">May</div>
                                        <div className="chart-label">Jun</div>
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

export default DashBoard