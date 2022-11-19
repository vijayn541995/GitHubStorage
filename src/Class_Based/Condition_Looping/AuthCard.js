import React from 'react';

class AuthCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        }

    }

    Login = () => {
        this.setState({
            isLoggedIn: true
        });
    };
    Logout = () => {
        this.setState({
            isLoggedIn: false
        });
    };



    render() {
        return (
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header bg-dark">
                                        <p className="h4">Authantication Card</p>
                                    </div>
                                    <div className="card-body">
                                        {
                                            this.state.isLoggedIn ? 
                                            <React.Fragment>
                                                <input onClick={this.Logout} type="button" value="Logout" className="btn btn-danger btn-block" />
                                            </React.Fragment> :

                                            <React.Fragment>
                                                    <input onClick={this.Login} type="button" value="Login" className="btn btn-success btn-block m-2" />
                                            </React.Fragment>

                                        }

                                        {
                                            this.state.isLoggedIn ?
                                                <React.Fragment>
                                                    <div>
                                                        <p className="h2">Welcome Vijay!</p>
                                                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt velit tenetur aliquid atque mollitia sapiente eligendi nihil rerum earum eius.</small>
                                                    </div>
                                                </React.Fragment> :
                                                <React.Fragment>
                                                    <div>
                                                        <p className="h2">Welcome Guest User!</p>
                                                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt velit tenetur aliquid atque mollitia sapiente eligendi nihil rerum earum eius.</small>
                                                    </div>
                                                </React.Fragment>
                                        }


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
export default AuthCard;