import React from "react";
import Axios from "axios";
import axios from "axios";

class UserList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            users:[],
            errorMessage:''
        }
    }

    componentDidMount(){
        this.getAllUsers();

    };
    getAllUsers=()=>{
        let dataURL='https://jsonplaceholder.typicode.com/users';
        axios.get(dataURL)
        .then((response)=>{
           this.setState({
            ...this.state,
            users:response.data
           })
        })
        .catch((error)=>{
            this.setState({
                ...this.state,
                errorMessage:'error fecting data'
               })
        })
    };

    render() {
        return (
            <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-info text-white h2">User List</div>
                                <div className="card-body bg-gradient ">
                                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores itaque qui vitae, voluptates culpa minus. Vitae tempore porro placeat. Cupiditate. </h3>
                                    {this.state.users.length>0?
                                    <table className="table table-primary table-hover table-striped">
                                    <thead className="text-white">
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>City</th>
                                            <th>Website</th>
                                            <th>Phone</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                        this.state.users.map((user)=>{
                                            return(
                                                <tr key={user.id}>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.address.city}</td>
                                                    <td>{user.website}</td>
                                                    <td>{user.phone}</td>
                                                    
                                                </tr>
                                            )
                                        })
                
                                        
                                        }
                                    </tbody>
                                </table>:null}
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
        );
    }
};
export default UserList;