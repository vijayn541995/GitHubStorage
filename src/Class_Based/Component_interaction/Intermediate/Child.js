import React from 'react';

class   Child extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            childInput:''
        }
        
    };

    updateText=(event)=>{
        this.setState({
            childInput:event.target.value 
        })

        this.props.sendData(event.target.value);

    };

    render() {
        return ( 
            <React.Fragment>
                <section className="p-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body bg-danger">
                                    <p className="h4">Child</p>
                                    <input onChange={this.updateText} type="text" placeholder='Type here' />
                                    <p className="h4">{this.props.parentInput}</p>

                                        
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
    
};
export default Child;