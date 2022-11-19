import React from "react";
class MessageOne extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            message:'"Hello click A Button"'
        }

    };

    render() {
        return (
            <React.Fragment>
                <section className="p-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card my-3">
                                <div className="card-header bg-primary">
                                    <p className="h4">this.State</p>
                                </div>
                                <div className="card-body">
                                    <p className="h2">{this.state.message}</p>

                                    <button onClick={e=>{this.setState({message:'Good Morning'})}} className="btn btn-primary btn-sm ">Good Morning</button>
                                    <button onClick={e=>{this.setState({message:'Good Afternoon'})}} className="btn btn-secondary btn-sm ">Good Afternoon</button>
                                    <button onClick={e=>{this.setState({message:'Good Evening'})}} className="btn btn-danger btn-sm ">Good Evening</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>

        );
    }
};

export default MessageOne;