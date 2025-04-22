import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <>
        {/* <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
          <NavbarBrand tag={Link} to="/">AutoStoreProject</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Navbar> */}             

                <div className="nk-header is-light nk-header-fixed is-light">
                  <div className="container-xl wide-xl">
                      <div className="nk-header-wrap">
                  <div className="nk-menu-trigger d-xl-none ms-n1 me-3">
                      <a href="#" className="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu"><em className="icon ni ni-menu"></em></a>
                  </div>
                  <div className="nk-header-brand d-xl-none">
                      <a href="html/index.html" className="logo-link">
                          <img className="logo-light logo-img" src="./images/sca.png" srcSet="./images/sca.png 2x" alt="logo"/>
                          <img className="logo-dark logo-img" src="./images/sca.png" srcSet="./images/sca.png 2x" alt="logo-dark"/>
                      </a>
                  </div>
                  <div className="nk-header-tools">
                      <ul className="nk-quick-nav">
                          <li className="dropdown chats-dropdown hide-mb-sm">
                              <a href="#" className="dropdown-toggle nk-quick-nav-icon" data-bs-toggle="dropdown">
                                  <div className="icon-status icon-status-na"><em className="icon ni ni-comments"></em></div>
                              </a>
                              <div className="dropdown-menu dropdown-menu-xl dropdown-menu-end">
                                  <div className="dropdown-head">
                                      <span className="sub-title nk-dropdown-title">Recent Chats</span>
                                      <a href="#">Setting</a>
                                  </div>
                                  <div className="dropdown-body">
                                      <ul className="chat-list">
                                          <li className="chat-item">
                                              <a className="chat-link" href="html/apps-chats.html">
                                                  <div className="chat-media user-avatar">
                                                      <span>IH</span>
                                                      <span className="status dot dot-lg dot-gray"></span>
                                                  </div>
                                                  <div className="chat-info">
                                                      <div className="chat-from">
                                                          <div className="name">Iliash Hossain</div>
                                                          <span className="time">Now</span>
                                                      </div>
                                                      <div className="chat-context">
                                                          <div className="text">You: Please confrim if you got my last messages.</div>
                                                          <div className="status delivered">
                                                              <em className="icon ni ni-check-circle-fill"></em>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </a>
                                          </li>
                                          <li className="chat-item is-unread">
                                              <a className="chat-link" href="html/apps-chats.html">
                                                  <div className="chat-media user-avatar bg-pink">
                                                      <span>AB</span>
                                                      <span className="status dot dot-lg dot-success"></span>
                                                  </div>
                                                  <div className="chat-info">
                                                      <div className="chat-from">
                                                          <div className="name">Abu Bin Ishtiyak</div>
                                                          <span className="time">4:49 AM</span>
                                                      </div>
                                                      <div className="chat-context">
                                                          <div className="text">Hi, I am Ishtiyak, can you help me with this problem ?</div>
                                                          <div className="status unread">
                                                              <em className="icon ni ni-bullet-fill"></em>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </a>
                                          </li>
                                          <li className="chat-item">
                                              <a className="chat-link" href="html/apps-chats.html">
                                                  <div className="chat-media user-avatar">
                                                      <img src="./images/avatar/b-sm.jpg" alt=""/>
                                                  </div>
                                                  <div className="chat-info">
                                                      <div className="chat-from">
                                                          <div className="name">George Philips</div>
                                                          <span className="time">6 Apr</span>
                                                      </div>
                                                      <div className="chat-context">
                                                          <div className="text">Have you seens the claim from Rose?</div>
                                                      </div>
                                                  </div>
                                              </a>
                                          </li>
                                          <li className="chat-item">
                                              <a className="chat-link" href="html/apps-chats.html">
                                                  <div className="chat-media user-avatar user-avatar-multiple">
                                                      <div className="user-avatar">
                                                          <img src="./images/avatar/c-sm.jpg" alt=""/>
                                                      </div>
                                                      <div className="user-avatar">
                                                          <span>AB</span>
                                                      </div>
                                                  </div>
                                                  <div className="chat-info">
                                                      <div className="chat-from">
                                                          <div className="name">Softnio Group</div>
                                                          <span className="time">27 Mar</span>
                                                      </div>
                                                      <div className="chat-context">
                                                          <div className="text">You: I just bought a new computer but i am having some problem</div>
                                                          <div className="status sent">
                                                              <em className="icon ni ni-check-circle"></em>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </a>
                                          </li>
                                          <li className="chat-item">
                                              <a className="chat-link" href="html/apps-chats.html">
                                                  <div className="chat-media user-avatar">
                                                      <img src="./images/avatar/a-sm.jpg" alt=""/>
                                                      <span className="status dot dot-lg dot-success"></span>
                                                  </div>
                                                  <div className="chat-info">
                                                      <div className="chat-from">
                                                          <div className="name">Larry Hughes</div>
                                                          <span className="time">3 Apr</span>
                                                      </div>
                                                      <div className="chat-context">
                                                          <div className="text">Hi Frank! How is you doing?</div>
                                                      </div>
                                                  </div>
                                              </a>
                                          </li>
                                          <li className="chat-item">
                                              <a className="chat-link" href="html/apps-chats.html">
                                                  <div className="chat-media user-avatar bg-purple">
                                                      <span>TW</span>
                                                  </div>
                                                  <div className="chat-info">
                                                      <div className="chat-from">
                                                          <div className="name">Tammy Wilson</div>
                                                          <span className="time">27 Mar</span>
                                                      </div>
                                                      <div className="chat-context">
                                                          <div className="text">You: I just bought a new computer but i am having some problem</div>
                                                          <div className="status sent">
                                                              <em className="icon ni ni-check-circle"></em>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                                  <div className="dropdown-foot center">
                                      <a href="html/apps-chats.html">View All</a>
                                  </div>
                              </div>
                          </li>
                          <li className="dropdown notification-dropdown">
                              <a href="#" className="dropdown-toggle nk-quick-nav-icon" data-bs-toggle="dropdown">
                                  <div className="icon-status icon-status-info"><em className="icon ni ni-bell"></em></div>
                              </a>
                              <div className="dropdown-menu dropdown-menu-xl dropdown-menu-end">
                                  <div className="dropdown-head">
                                      <span className="sub-title nk-dropdown-title">Notifications</span>
                                      <a href="#">Mark All as Read</a>
                                  </div>
                                  <div className="dropdown-body">
                                      <div className="nk-notification">
                                          <div className="nk-notification-item dropdown-inner">
                                              <div className="nk-notification-icon">
                                                  <em className="icon icon-circle bg-primary-dim ni ni-share"></em>
                                              </div>
                                              <div className="nk-notification-content">
                                                  <div className="nk-notification-text">Iliash shared <span>Dashlite-v2</span> with you.</div>
                                                  <div className="nk-notification-time">Just now</div>
                                              </div>
                                          </div>
                                          <div className="nk-notification-item dropdown-inner">
                                              <div className="nk-notification-icon">
                                                  <em className="icon icon-circle bg-info-dim ni ni-edit"></em>
                                              </div>
                                              <div className="nk-notification-content">
                                                  <div className="nk-notification-text">Iliash <span>invited</span> you to edit <span>DashLite</span> folder</div>
                                                  <div className="nk-notification-time">2 hrs ago</div>
                                              </div>
                                          </div>
                                          <div className="nk-notification-item dropdown-inner">
                                              <div className="nk-notification-icon">
                                                  <em className="icon icon-circle bg-primary-dim ni ni-share"></em>
                                              </div>
                                              <div className="nk-notification-content">
                                                  <div className="nk-notification-text">You have shared <span>project v2</span> with Parvez.</div>
                                                  <div className="nk-notification-time">7 days ago</div>
                                              </div>
                                          </div>
                                          <div className="nk-notification-item dropdown-inner">
                                              <div className="nk-notification-icon">
                                                  <em className="icon icon-circle bg-success-dim ni ni-spark"></em>
                                              </div>
                                              <div className="nk-notification-content">
                                                  <div className="nk-notification-text">Your <span>Subscription</span> renew successfully.</div>
                                                  <div className="nk-notification-time">2 month ago</div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="dropdown-foot center">
                                      <a href="#">View All</a>
                                  </div>
                              </div>
                          </li>
                          <li className="dropdown language-dropdown d-none d-sm-block me-n1">
                              <a href="#" className="dropdown-toggle nk-quick-nav-icon" data-bs-toggle="dropdown">
                                  <div className="quick-icon border border-light">
                                      <img className="icon" src="./images/flags/english-sq.png" alt=""/>
                                  </div>
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
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
                          <li className="dropdown user-dropdown">
                              <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">
                                  <div className="user-toggle">
                                      <div className="user-avatar sm">
                                          <em className="icon ni ni-user-alt"></em>
                                      </div>
                                  </div>
                              </a>
                              <div className="dropdown-menu dropdown-menu-md dropdown-menu-end">
                                  <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                                      <div className="user-card">
                                          <div className="user-avatar">
                                              <span>AB</span>
                                          </div>
                                          <div className="user-info">
                                              <span className="lead-text">Abu Bin Ishtiyak</span>
                                              <span className="sub-text">info@softnio.com</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="dropdown-inner">
                                      <ul className="link-list">
                                          <li><a href="html/user-profile-regular.html"><em className="icon ni ni-user-alt"></em><span>View Profile</span></a></li>
                                          <li><a href="html/user-profile-setting.html"><em className="icon ni ni-setting-alt"></em><span>Account Setting</span></a></li>
                                          <li><a href="html/user-profile-activity.html"><em className="icon ni ni-activity-alt"></em><span>Login Activity</span></a></li>
                                          <li><a className="dark-switch" href="#"><em className="icon ni ni-moon"></em><span>Dark Mode</span></a></li>
                                      </ul>
                                  </div>
                                  <div className="dropdown-inner">
                                      <ul className="link-list">
                                          <li><a href="#"><em className="icon ni ni-signout"></em><span>Sign out</span></a></li>
                                      </ul>
                                  </div>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
            </div>
                    
                </div>
       

      </>
    );
  }
}
