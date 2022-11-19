import React from "react";

class DigitalWatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date().toLocaleTimeString()
        }
    };
   
    componentDidMount(){
        this.timer=setInterval(()=>{
            this.setState({
                currentTime:new Date().toLocaleTimeString()
            });
        },1000);
    };
    
 componentWillUnmount(){
    clearInterval(this.state.currentTime);
 };

render(){
    return (
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header bg-info text-white">Digital Watch</div>
                                <div className="card-body bg-gradient ">
                                    <h3>{this.state.currentTime} </h3>
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

export default DigitalWatch;