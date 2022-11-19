import React from 'react';

class   Son extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            sonTells:'Son-"I Will always be your Son Dad"'
        }
        };

        clickSend=()=>{
            this.props.sendData(this.state.sonTells);
        };
    

    render() {
        return ( 
            <React.Fragment>
                <section className="p-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body bg-danger">
                                    <p className="h4">Son Component</p>
                                    <small className='dad'>{this.props.dad}</small><br />
                                    <button onClick={this.clickSend} className="btn btn-warning btn-sm">Send Data to Dad</button>
                    
                                        
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
    
};
export default Son;