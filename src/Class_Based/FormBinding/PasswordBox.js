
import React from "react";

class PasswordBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputType:'password'
        }
    }

    ChangeType = (event) => {
        if(event.target.checked){
            this.setState({
                inputType:'text'});
        }
        else{
            this.setState({
                inputType:'password'});
        }
    };
        
    render() {
        return (
            <React.Fragment>
                {/* <pre>{JSON.stringify(this.state)}</pre> */}
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header bg-secondary text-white">
                                        <p className="h4">Login Form</p>
                                    </div>
                                    <div className="card-body ">
                                        <form>
                                            <div className="input-group mb-3">
                                                <input type={this.state.inputType} className="form-control" />
                                                <div className="input-group-append">
                                                    <div className="input-group-text">
                                                        <input
                                                        onChangeCapture={this.ChangeType} 
                                                        type="checkbox" className="m-2"/>Show password
                                                    </div>
                                                </div>

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
export default PasswordBox;