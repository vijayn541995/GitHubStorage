import React from "react";

class Registration extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            user:{
                Username:"",
                Email:"",
                Password:"",
                Designation:""
            }
        }
    }
    updateUser=(event)=>{
        this.setState({
            user:{
                ...this.state.user,
                [event.target.name]:event.target.value
            }
        });
    };
   
    submitLogin=(event)=>{
        event.preventDefault();
        console.log(this.state.user)

    };
    render() {
        return (
            <React.Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
                <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <p className="h4">Registration Form</p>
                                </div>
                                <div className="card-body ">
                                    <form onSubmit={this.submitLogin} >
                                        <div className="form-group m-2">
                                        <input
                                        name='Username'
                                        value={this.state.Username}
                                        onChange={this.updateUser} type="text" classname="form-control" placeholder="UserName" />
                                        </div>
                                    <div className="form-group m-2">
                                    <input
                                        name='Email'
                                        value={this.state.Email}
                                        onChange={this.updateUser} type="text" classname="form-control" placeholder="Email" />
                                    </div>
                                        <div className="form-group m-2">
                                        <input 
                                        name='Password'
                                        value={this.state.Password}
                                        onChange={this.updateUser}
                                        type="password" classname="form-control" placeholder="Password" />
                                        </div>
                                        <div className="form-group">
                                        <input type="submit" value='Login' classname="btn btn-secondary btn-sm" />
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
export default Registration;