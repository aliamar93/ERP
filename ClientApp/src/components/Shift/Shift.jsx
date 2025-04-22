import React,{Component} from 'react';
import ShiftDetailModal from './ShiftDetail';
import API_BASE_URL from '../../api/API_BASE_URL';


class Shift extends Component {
    state={
        showModal:false,
        selectedShift:null,
        shift:[],
        loading:false
        };
    
    handleOpenModal = (shift) => {
        this.setState({ selectedShift:shift, showModal:true });
    };

    handleCloseModal = () => {
        this.setState({ showModal:false });
    };

    async componentDidMount(){
        const data=await this.populateShifts();
        this.setState({shift:data,loading:false});
    }

    populateShifts = async () =>{
        try {
            const response = await fetch(`${API_BASE_URL}/Shift/GetAllShifts`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json"
                // ,
                // Authorization: `Bearer ${token.replace(/"/g, '')}` // Remove quotes if stored with JSON.stringify
              },
            });
            if (!response.ok) throw new Error("Failed to fetch users.");
            const data = await response.json();
            return data;
          } catch (error) {
            console.error("Error:", error);
            // this.setState({ loading: false });
          }
      }


    fetchShifts(shift) {
        return(
            <div className="card-inner p-0">
                                                <div className="nk-tb-list nk-tb-ulist">
                                                    <div className="nk-tb-item nk-tb-head">
                                                        <div className="nk-tb-col nk-tb-col-check">
                                                            <div className="custom-control custom-control-sm custom-checkbox notext">
                                                                <input type="checkbox"  defaultChecked={false} className="custom-control-input" id="uid"/>
                                                                <label className="custom-control-label" htmlFor="uid"></label>
                                                            </div>
                                                        </div>
                                                        <div className="nk-tb-col"><span className="sub-text">User</span></div>
                                                        <div className="nk-tb-col tb-col-mb"><span className="sub-text">Balance</span></div>
                                                        <div className="nk-tb-col tb-col-md"><span className="sub-text">Phone</span></div>
                                                        <div className="nk-tb-col tb-col-lg"><span className="sub-text">Assigned</span></div>
                                                        <div className="nk-tb-col tb-col-md"><span className="sub-text">Status</span></div>
                                                        <div className="nk-tb-col nk-tb-col-tools text-end">
                                                            <div className="dropdown">
                                                                <a href="#" className="btn btn-xs btn-outline-light btn-icon dropdown-toggle" data-bs-toggle="dropdown" data-offset="0,5"><em className="icon ni ni-plus"></em></a>
                                                                <div className="dropdown-menu dropdown-menu-xs dropdown-menu-end">
                                                                    <ul className="link-tidy sm no-bdr">
                                                                        <li>
                                                                            <div className="custom-control custom-control-sm custom-checkbox">
                                                                                <input type="checkbox" className="custom-control-input"  defaultChecked={true} id="bl"/>
                                                                                <label className="custom-control-label" htmlFor="bl">Balance</label>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="custom-control custom-control-sm custom-checkbox">
                                                                                <input type="checkbox" className="custom-control-input"  defaultChecked={true} id="ph"/>
                                                                                <label className="custom-control-label" htmlFor="ph">Phone</label>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="custom-control custom-control-sm custom-checkbox">
                                                                                <input type="checkbox" className="custom-control-input"  defaultChecked={true} id="vri"/>
                                                                                <label className="custom-control-label" htmlFor="vri">Assigned</label>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="custom-control custom-control-sm custom-checkbox">
                                                                                <input type="checkbox" className="custom-control-input"  defaultChecked={true} id="st"/>
                                                                                <label className="custom-control-label" htmlFor="st">Status</label>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
    
                                                   {shift.map(shift => (
    
                                                        <div className="nk-tb-item" key={shift.id}>
                                                        <div className="nk-tb-col nk-tb-col-check">
                                                            <div className="custom-control custom-control-sm custom-checkbox notext">
                                                                <input type="checkbox" className="custom-control-input"  defaultChecked={true} id="uid1"/>
                                                                <label className="custom-control-label" htmlFor="uid1"></label>
                                                            </div>
                                                        </div>
                                                        <div className="nk-tb-col">
                                                            <a href="html/user-details-regular.html">
                                                                <div className="user-card">
                                                                    <div className="user-avatar bg-primary">
                                                                        <span>AB</span>
                                                                    </div>
                                                                    <div className="user-info">
                                                                        <span className="tb-lead">{shift.dateTime} <span className="dot dot-success d-md-none ms-1"></span></span>
                                                                        <span></span>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="nk-tb-col tb-col-mb">
                                                            <span className="tb-amount">{shift.authorizedBy} <span className="currency">USD</span></span>
                                                        </div>
                                                        <div className="nk-tb-col tb-col-md">
                                                            <span>+811 847-4958</span>
                                                        </div>
                                                        
                                                        <div className="nk-tb-col tb-col-lg">
                                                            <span>{new Date(shift.dateTime).toLocaleString("en-DE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit"
        })}</span>
                                                        </div>
                                                        <div className="nk-tb-col tb-col-md">
                                                            <span className={
    "tb-status " +
    (shift.status === null
      ? "text-warning"
      : shift.status === 1
      ? "text-success"
      : "text-danger")
  }> {shift.status ===null ? "Pending" : shift.status=== 1?"Authorized":"Rejected"}</span>
                                                        </div>
                                                        <div className="nk-tb-col nk-tb-col-tools">
                                                             <ul className="nk-tb-actions gx-1" style={{ right: '2rem' }}>
                                                                    <li className="">
                                                                    <button value={shift.id} onClick={()=>this.handleOpenModal(shift)}  className="btn btn-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Detail">
                                                                        <em className="icon ni ni-eye"></em>
                                                                    </button>
                                                                 </li>
                                                            </ul> 
                                                        </div>
                                                        </div>
    
                                                   ))}    
                                                </div>
            </div>
        )
    }


    render(){
        const {shift,selectedShift,showModal,loading}=this.state;
        // const content=this.fetchShifts(shift);
        let content=loading?(
            <p>
            <em>Loading...</em>
            </p>
        ):(
            this.fetchShifts(shift)
        )
        
        return(
            <>
            <div className="nk-content nk-content-fluid">
                    <div className="container-xl wide-xl">
                        <div className="nk-content-body">
                            <div className="nk-block-head nk-block-head-sm">
                                <div className="nk-block-between">
                                    <div className="nk-block-head-content">
                                        <h3 className="nk-block-title page-title">Users Lists</h3>
                                        <div className="nk-block-des text-soft">
                                            <p>You have total 2,595 users.</p>
                                        </div>
                                    </div>
                                    <div className="nk-block-head-content">
                                        <div className="toggle-wrap nk-block-tools-toggle">
                                            <a href="#" className="btn btn-icon btn-trigger toggle-expand me-n1" data-target="pageMenu"><em className="icon ni ni-menu-alt-r"></em></a>
                                            <div className="toggle-expand-content" data-content="pageMenu">
                                                <ul className="nk-block-tools g-3">
                                                    <li><a href="#" className="btn btn-white btn-outline-light"><em className="icon ni ni-download-cloud"></em><span>Export</span></a></li>
                                                    <li className="nk-block-tools-opt">
                                                        <div className="drodown">
                                                            <a href="#" className="dropdown-toggle btn btn-icon btn-primary" data-bs-toggle="dropdown"><em className="icon ni ni-plus"></em></a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <ul className="link-list-opt no-bdr">
                                                                    <li><a href="#"><span>Add User</span></a></li>
                                                                    <li><a href="#"><span>Add Team</span></a></li>
                                                                    <li><a href="#"><span>Import User</span></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="nk-block">
                                <div className="card card-stretch">
                                    <div className="card-inner-group">
                                        <div className="card-inner position-relative card-tools-toggle">
                                            <div className="card-title-group">
                                                <div className="card-tools">
                                                    <div className="form-inline flex-nowrap gx-3">
                                                        <div className="form-wrap w-150px">
                                                            <select className="form-select js-select2" data-search="off" data-placeholder="Bulk Action">
                                                                <option value="">Bulk Action</option>
                                                                <option value="email">Send Email</option>
                                                                <option value="group">Change Group</option>
                                                                <option value="suspend">Suspend User</option>
                                                                <option value="delete">Delete User</option>
                                                            </select>
                                                        </div>
                                                        <div className="btn-wrap">
                                                            <span className="d-none d-md-block"><button className="btn btn-dim btn-outline-light disabled">Apply</button></span>
                                                            <span className="d-md-none"><button className="btn btn-dim btn-outline-light btn-icon disabled"><em className="icon ni ni-arrow-right"></em></button></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-tools me-n1">
                                                    <ul className="btn-toolbar gx-1">
                                                        <li>
                                                            <a href="#" className="btn btn-icon search-toggle toggle-search" data-target="search"><em className="icon ni ni-search"></em></a>
                                                        </li>
                                                        <li className="btn-toolbar-sep"></li>
                                                        <li>
                                                            <div className="toggle-wrap">
                                                                <a href="#" className="btn btn-icon btn-trigger toggle" data-target="cardTools"><em className="icon ni ni-menu-right"></em></a>
                                                                <div className="toggle-content" data-content="cardTools">
                                                                    <ul className="btn-toolbar gx-1">
                                                                        <li className="toggle-close">
                                                                            <a href="#" className="btn btn-icon btn-trigger toggle" data-target="cardTools"><em className="icon ni ni-arrow-left"></em></a>
                                                                        </li>
                                                                        <li>
                                                                            <div className="dropdown">
                                                                                <a href="#" className="btn btn-trigger btn-icon dropdown-toggle" data-bs-toggle="dropdown">
                                                                                    <div className="dot dot-primary"></div>
                                                                                    <em className="icon ni ni-filter-alt"></em>
                                                                                </a>
                                                                                <div className="filter-wg dropdown-menu dropdown-menu-xl dropdown-menu-end">
                                                                                    <div className="dropdown-head">
                                                                                        <span className="sub-title dropdown-title">Filter Users</span>
                                                                                        <div className="dropdown">
                                                                                            <a href="#" className="btn btn-sm btn-icon">
                                                                                                <em className="icon ni ni-more-h"></em>
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="dropdown-body dropdown-body-rg">
                                                                                        <div className="row gx-6 gy-3">
                                                                                            <div className="col-6">
                                                                                                <div className="custom-control custom-control-sm custom-checkbox">
                                                                                                    <input type="checkbox" className="custom-control-input"  defaultChecked={true} id="hasBalance"/>
                                                                                                    <label className="custom-control-label" htmlFor="hasBalance"> Have Balance</label>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-6">
                                                                                                <div className="custom-control custom-control-sm custom-checkbox">
                                                                                                    <input type="checkbox" className="custom-control-input"  defaultChecked={true} id="hasKYC"/>
                                                                                                    <label className="custom-control-label" htmlFor="hasKYC"> KYC Verified</label>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-6">
                                                                                                <div className="form-group">
                                                                                                    <label className="overline-title overline-title-alt">Role</label>
                                                                                                    <select className="form-select js-select2">
                                                                                                        <option value="any">Any Role</option>
                                                                                                        <option value="investor">Investor</option>
                                                                                                        <option value="seller">Seller</option>
                                                                                                        <option value="buyer">Buyer</option>
                                                                                                    </select>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-6">
                                                                                                <div className="form-group">
                                                                                                    <label className="overline-title overline-title-alt">Status</label>
                                                                                                    <select className="form-select js-select2">
                                                                                                        <option value="any">Any Status</option>
                                                                                                        <option value="active">Active</option>
                                                                                                        <option value="pending">Pending</option>
                                                                                                        <option value="suspend">Suspend</option>
                                                                                                        <option value="deleted">Deleted</option>
                                                                                                    </select>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-12">
                                                                                                <div className="form-group">
                                                                                                    <button type="button" className="btn btn-secondary">Filter</button>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="dropdown-foot between">
                                                                                        <a className="clickable" href="#">Reset Filter</a>
                                                                                        <a href="#">Save Filter</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="dropdown">
                                                                                <a href="#" className="btn btn-trigger btn-icon dropdown-toggle" data-bs-toggle="dropdown">
                                                                                    <em className="icon ni ni-setting"></em>
                                                                                </a>
                                                                                <div className="dropdown-menu dropdown-menu-xs dropdown-menu-end">
                                                                                    <ul className="link-check">
                                                                                        <li><span>Show</span></li>
                                                                                        <li className="active"><a href="#">10</a></li>
                                                                                        <li><a href="#">20</a></li>
                                                                                        <li><a href="#">50</a></li>
                                                                                    </ul>
                                                                                    <ul className="link-check">
                                                                                        <li><span>Order</span></li>
                                                                                        <li className="active"><a href="#">DESC</a></li>
                                                                                        <li><a href="#">ASC</a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="card-search search-wrap" data-search="search">
                                                <div className="card-body">
                                                    <div className="search-content">
                                                        <a href="#" className="search-back btn btn-icon toggle-search" data-target="search"><em className="icon ni ni-arrow-left"></em></a>
                                                        <input type="text" className="form-control border-transparent form-focus-none" placeholder="Search by user or email"/>
                                                        <button className="search-submit btn btn-icon"><em className="icon ni ni-search"></em></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {content}

                                        <div className="card-inner">
                                            <div className="nk-block-between-md g-3">
                                                <div className="g">
                                                    <ul className="pagination justify-content-center justify-content-md-start">
                                                        <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                        <li className="page-item"><span className="page-link"><em className="icon ni ni-more-h"></em></span></li>
                                                        <li className="page-item"><a className="page-link" href="#">6</a></li>
                                                        <li className="page-item"><a className="page-link" href="#">7</a></li>
                                                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                                    </ul>
                                                </div>
                                                <div className="g">
                                                    <div className="pagination-goto d-flex justify-content-center justify-content-md-start gx-3">
                                                        <div>Page</div>
                                                        <div>
                                                            <select className="form-select js-select2" data-search="on" data-dropdown="xs center">
                                                                <option value="page-1">1</option>
                                                                <option value="page-2">2</option>
                                                                <option value="page-4">4</option>
                                                                <option value="page-5">5</option>
                                                                <option value="page-6">6</option>
                                                                <option value="page-7">7</option>
                                                                <option value="page-8">8</option>
                                                                <option value="page-9">9</option>
                                                                <option value="page-10">10</option>
                                                                <option value="page-11">11</option>
                                                                <option value="page-12">12</option>
                                                                <option value="page-13">13</option>
                                                                <option value="page-14">14</option>
                                                                <option value="page-15">15</option>
                                                                <option value="page-16">16</option>
                                                                <option value="page-17">17</option>
                                                                <option value="page-18">18</option>
                                                                <option value="page-19">19</option>
                                                                <option value="page-20">20</option>
                                                            </select>
                                                        </div>
                                                        <div>OF 102</div>
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
            {selectedShift && (
               <ShiftDetailModal shift={selectedShift} showModal={{showModal}} onClose={this.handleCloseModal}/>
            )}
            </>
        )
    }

}

export default Shift; 