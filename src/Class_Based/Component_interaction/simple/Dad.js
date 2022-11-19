import React from 'react';
import Son from './Son';

class Dad extends React.Component{
    constructor(props) {
        super(props);
        this.state={
                dadTells:'Dad-"I Am Proud to say that Vijay is My Son" ',
                sonTells:''
        };
        
    };
    recieveData=(value)=>{
        this.setState({
                ...this.state,
                sonTells:value
        });
    }

    render() {
        return (
            <React.Fragment>
                <section className="p-3">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-body rgba-purple-light">
                                    <p className="h4">Dad Component</p>
                                    <small className='son'>{this.state.sonTells}</small>
                                
                                    <Son dad={this.state.dadTells} sendData={this.recieveData}/>    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
    
};
export default Dad;