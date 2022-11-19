import React from "react";
import axios from "axios";

class ContactList extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            contacts:[],
            errorMessage:''
        }
        
    }
    
componentDidMount(){
this.getAllContacts();
}

getAllContacts=async()=>{
    try{
        let dataURL='http://myjson.dit.upm.es/api/bins/9ypy';
        let response=await axios.get(dataURL);
        this.setState({
            ...this.state,
            contacts:response.data

        })
    }
    catch(error){
        this.setState({
            ...this.state,
            errorMessage:'error while fetching data-please check your internent connection'

        })
    }
}

clickSendContact=(contact)=>{
this.props.sendData(contact);
}





    render() {
        return (
            <React.Fragment>
              <section className="p-1">
                <table className="table table-hover table-primary table-striped text-center">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th>ID</th>
                            <th>IMAGE</th>
                            <th>NAME</th>
                            <th>CITY</th>
                            <th>EMAIL</th>
                            
                        </tr>
                    </thead>
                    {
                        this.state.contacts.length>0?
                        <React.Fragment> 
                            <tbody>
                             {
                                this.state.contacts.map((contact)=>{
                                    return(
                                        <tr key={contact.id} onClick={this.clickSendContact.bind(this,contact)}>
                                            <td>{contact.id}</td>
                                            <td><img src={contact.image} alt="" /></td>
                                            <td>{contact.first_name}-{contact.last_name}</td>
                                            <td>{contact.address}</td>
                                            <td>{contact.email}</td>
                                        </tr>
                                    )
                                })
                             }
                            </tbody>
                       </React.Fragment>:<p> {JSON.stringify(this.state.errorMessage)}</p>
                    }
                </table>
              </section>
            </React.Fragment>
        );
    }
    
}
export default ContactList;