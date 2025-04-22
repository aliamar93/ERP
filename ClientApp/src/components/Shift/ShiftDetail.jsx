import React from "react";
import API_BASE_URL from '../../api/API_BASE_URL';

class ShiftDetailModal extends React.Component {
    constructor(props) {
        super(props);
        this.modalRef = React.createRef();
        this.state = {
            shiftDetail: {},
            loading: true,
            currentShiftId: null
        };
    }

    // componentDidUpdate(prevProps) {
    //     alert("componentDidUpdate")
    // }
    
    
    async componentDidUpdate(prevProps) {
        const { showModal, shift } = this.props;

        if (showModal && shift?.id) {
            // Only fetch if shift ID is new or modal just opened
            if (shift.id !== this.state.currentShiftId) {
                this.fetchShiftDetail(shift.id);
                this.setState({ currentShiftId: shift.id });
            }

            // Show modal when it becomes visible
            if (!prevProps.showModal || showModal && this.modalRef.current) {
                const modal = new window.bootstrap.Modal(this.modalRef.current);
                modal.show();

                this.modalRef.current.addEventListener('hidden.bs.modal', () => {
                    this.props.onClose();
                    this.setState({ shiftDetail: {}, loading: true, currentShiftId: null });
                });
            }
            // const modal = new window.bootstrap.Modal(this.modalRef.current);
            //     modal.show();
            //     // document.querySelector('.modal-backdrop')?.remove();
                
            //     this.modalRef.current.addEventListener('hidden.bs.modal', () => {
            //         this.props.onClose();
            //         this.setState({ shiftDetail: {}, loading: true, currentShiftId: null });
            //     });
            
        }
    }

    fetchShiftDetail(shiftId) {
        fetch(`${API_BASE_URL}/Shift/GetShiftById/${shiftId}`)
            .then(response => response.json())
            .then(data => {
                console.log('Shift detail:', data);
                this.setState({ shiftDetail: data, loading: false });
            })
            .catch(error => {
                console.error('Error fetching shift detail:', error);
                this.setState({ shiftDetail: {}, loading: false });
            });
    }

    render() {
        const { shiftDetail, loading } = this.state;
        const { shift } = this.props;

        return (
            <div className="modal fade" tabIndex={-1} id="modalshiftDetail" ref={this.modalRef} aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
            <div className="modal-dialog modal-lg" role="document">
            <form action="#" className="form-validate is-alter">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Date : {new Date(shift?.dateTime).toLocaleDateString("en-DE")} </h5>
                        <a href="#" className="close" data-bs-dismiss="modal" aria-label="Close" onClick={this.props.onClose}>
                            <em className="icon ni ni-cross"></em>
                        </a>
                    </div>
                            <div className="modal-body">
                                {loading ? (
                                    <p>Loading shift details...</p>
                                ) : (
                                    <div className="card">
                                        <div className="card-inner">
                                            <div className="row g-gs">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">From</label>
                                                        <input type="text" className="form-control"
                                                            value={shiftDetail.toDateTime ? new Date(shiftDetail.toDateTime).toLocaleTimeString("en-DE") : "Not Scheduled"}
                                                            readOnly />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="form-label">Assigned By</label>
                                                        <input type="text" className="form-control"
                                                            value={shift.assignedBy || ''}
                                                            readOnly />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">To</label>
                                                        <input type="text" className="form-control"
                                                            value={shiftDetail.fromDateTime ? new Date(shiftDetail.fromDateTime).toLocaleTimeString("en-DE") : "Not Scheduled"}
                                                            readOnly />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="form-label">Status</label>
                                                        <input type="text" className="form-control"
                                                            value={shift.status ===null ? "Pending" : shift.status=== 1?"Authorized":"Rejected"}
                                                            readOnly />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label className="form-label">Created By</label>
                                                        <input type="text" className="form-control"
                                                            value={shiftDetail.createdBy || ''}
                                                            readOnly />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="modal-footer bg-light">
                                <button type="submit" className="btn btn-dim btn-outline-success me-2" data-bs-dismiss="modal" onClick={this.props.onClose}>Authorized</button>
                                <button type="button" className="btn btn-dim btn-outline-danger" data-bs-dismiss="modal" onClick={this.props.onClose}>Reject</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ShiftDetailModal;
