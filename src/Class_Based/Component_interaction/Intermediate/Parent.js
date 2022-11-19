import React from 'react';
import Child from './Child';

class Parent extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            parentInput:'Parent text',
            childInput:''
            
        }
        
    };
    updateText=(event)=>{
        this.setState({
            ...this.state,
            parentInput:event.target.value 
        })
    };

    recieveData=(value)=>{
        this.setState({
            ...this.state,
            childInput:value 
        })
    };

    render() {
        return (
            <React.Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
                <section className="p-3">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-body rgba-purple-light">
                                    <p className="h4">Parent</p>
                                    <p className="h4">{this.state.childInput}</p>
                                    <input  onChange={this.updateText} type="text" placeholder='Type here' />
                                    
                                    <Child parentInput={this.state.parentInput} sendData={this.recieveData}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
    
};
export default Parent;