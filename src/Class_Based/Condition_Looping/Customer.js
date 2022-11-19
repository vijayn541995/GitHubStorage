import React from 'react';
import { customerList } from './CustomerStore';

class Customer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            customers:customerList
        };

    };

  



    render() {
        return (
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="h3 text-primary">Customer List</p>
                                <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis porro molestias voluptates quas quia rerum reprehenderit natus alias, vero vel.</p>

                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col">
                                <table className='table table-hover text-center table-secondary table-striped '>
                                    <thead className='bg-dark text-bold'> 
                                    <tr>
                                      <th>ID</th>
                                      <th>IMAGE</th>
                                      <th>FULL NAME</th>
                                      <th>GENDER</th>
                                      <th>EMAIL</th> 
                                      <th>CITY</th>
                                    </tr>
                                    </thead>
                                   
                                    <tbody>
                                        {
                                            this.state.customers.map((customer)=>{
                                                return (
                                                <tr key={customer.id}>
                                                    <td>{customer.id}</td>
                                                    <td>
                                                        <img src={customer.image} alt='' width='50' height='50' />
                                                    </td>
                                                    <td>{customer.first_name} {customer.last_name}</td>
                                                    <td>{customer.gender}</td>
                                                    <td>{customer.email}</td>
                                                    <td>{customer.address}</td>  
                                                 </tr>
                                                );
                                            })

                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }

};
export default Customer;