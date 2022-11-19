import React from "react";

class ContactCard extends React.Component{
    constructor(props) {
        super(props);
        
    }
    render() {
        let{selectedContact}=this.props;
        return (
            <React.Fragment>
                                <div className="card sticky-top">
                                    <div className="card-header h3 bg-primary ">
                                    <div className="p-3"/>
                                    </div>
                                    <div className="card-body custom text-center ">
                                        <img src={selectedContact.image} alt="" className="w-50 img-fluid rounded-circle img-thumbnail contact-img" />
                                        <div>
                                            <ul className="list-group">
                                            
                                            <li className="list-group-item list-group-item-primary "><strong className="text-danger">ID:</strong>{selectedContact.id} </li>
                                                <li className="list-group-item list-group-item-primary"><strong className="text-danger">NAME:</strong>{selectedContact.first_name} {selectedContact.last_name}</li>
                                                <li className="list-group-item list-group-item-primary"><strong className="text-danger">CITY:</strong>{selectedContact.address}</li>
                                                <li className="list-group-item list-group-item-primary"><strong className="text-danger">EMAIL:</strong>{selectedContact.email}</li>  
                                            </ul>
                                    </div>
                                    </div>
                                   
                                </div>
                                <pre>{JSON.stringify(this.props.selectedContact)}</pre>
            </React.Fragment>
        );
    }
    
}
export default ContactCard;