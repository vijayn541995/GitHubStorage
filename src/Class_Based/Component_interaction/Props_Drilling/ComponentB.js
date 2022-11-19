import React from 'react';
import ComponentC from './ComponentC';


class ComponentB extends React.Component{
    constructor(props) {
        super(props);
        
        
    };
    

    render() {
        return (
            <React.Fragment>
                
                <section className="p-3">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-body rgba-purple-light">
                                    <p className="h4">Component B</p>
                                    <p className="h4">  </p>
                                    <p>{JSON.stringify(this.props.user)}</p>
                                    <ComponentC user={this.props.user}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
    
};
export default ComponentB;