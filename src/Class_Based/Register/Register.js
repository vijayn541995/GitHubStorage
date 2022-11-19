import { Alert } from "bootstrap";
import React from "react";


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                Username: "",
                Email: "",
                Password: "",
                Designation: "",
                Terms: false
            }
        }



    }

    UpdateUser = (event) => {
        if(event.target.type==='checkbox'){this.setState({
            user: {
                ...this.state.user,
                [event.target.name]: event.target.checked
            }
        }
        );}
        else{this.setState({
            user: {
                ...this.state.user,
                [event.target.name]: event.target.value
            }
        }
        );}

        
    };
    SubmitRegister = (event) => { 
        event.preventDefault();
        console.log(this.state.user);
    }


    render() {
        return (
            <React.Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-header">
                                        <p className="h4">Register App</p>
                                    </div>
                                    <div className="card-body text-right rgba-red-light">
                                        <form onSubmit={this.SubmitRegister}>
                                            <div className="form-group mb-2">
                                                <input
                                                    name='Username' onChange={this.UpdateUser}
                                                    value={this.state.user.Username} type='text' className="form-control" placeholder="Username"></input>
                                            </div>
                                            <div className="form-group mb-2">
                                                <input name='Email' onChange={this.UpdateUser} value={this.state.user.Email} type='email' className="form-control" placeholder="Email"></input>
                                            </div>
                                            <div className="form-group mb-2">
                                                <input name='Password' onChange={this.UpdateUser} value={this.state.user.Password} type='password' className="form-control" placeholder="Password"></input>
                                            </div>
                                            <div className="form-group mb-2">
                                                <div className="form-group">
                                                    <select name='Designation' onChange={this.UpdateUser} value={this.state.user.Designation} 
                                                        className="form-control">
                                                        <option value=''>Select your Designation</option>
                                                        <option value='Software Engineer'>Software Engineer</option>
                                                        <option value='Sr.Software Engineer'>Sr.Software Engineer</option>
                                                        <option value='Project Manager'>Project Manager</option>
                                                        <option value='Tech Lead'>Tech Lead</option>
                                                        <option value='General Manager'>General Manager</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group mb-2">
                                                <div className="form-check">
                                                    <input name='Terms' onChange={this.UpdateUser} /*onChange={(event) => {
                                                        this.setState({
                                                        
                                                            user: {
                                                                ...this.state.user,
                                                                [event.target.name]: event.target.checked
                                                            }
                                                        });
                                                    }} */
                                                    value={this.state.user.Terms} class="form-check-input" type="checkbox"  id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        <a rel="stylesheet" href="www.google.com" />Accept all terms & Conditions
                                                    </label>
                                                </div>
                                                <button
                                                    className="btn btn-primary col-md-12 p-1">Register</button>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }

}
export default Register;