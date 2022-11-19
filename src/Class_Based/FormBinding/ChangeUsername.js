import React from "react";
 class ChangeUsername extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            Username:""
        };
        
    }
    updateUserName=(event)=>{
        this.setState({
            Username:event.target.value
        }
        )
    }
    render() {
        return (
            <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-primary text-white">
                                    <p className="h4">Change UserName</p>
                                </div>
                                <div className="card-body ">
                                    <form >
                                        <div className="form-group">
                                        <input
                                        value={this.state.Username}
                                        onChange={this.updateUserName}
                                        type="text" classname="form-control" placeholder="UserName" />
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer">
                                    <p className="h4">{this.state.Username}</p>
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
 export default ChangeUsername;