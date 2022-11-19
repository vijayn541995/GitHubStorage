import React from "react";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";

class ContactApp extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            selectedContact:{}
        }
        
    }
recieveData=(contact)=>{
    this.setState({
        selectedContact:contact 
    })
}


    render() {
        return (
            <React.Fragment>
                <pre>{JSON.stringify(this.state.selectedContact)}</pre>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-header bg-primary  text-center display-4 text-white">Contact APP</div>
                                    <div className="card-body custom">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptates quod velit quasi quas hic enim quam excepturi ullam ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, iure.</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="p-2">
                <div className="row">
                    <div className="col-md-8">
                        <ContactList sendData={this.recieveData}/>
                    </div>
                    <div className="col-md-4">
                        <ContactCard selectedContact={this.state.selectedContact}/>
                    </div>
                </div>
                </section>

            </React.Fragment>
        );
    }
    
}
export default ContactApp