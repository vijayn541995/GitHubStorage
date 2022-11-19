import React from 'react';



class ComponentC extends React.Component{
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
                                    <p className="h4">Component C</p>
                                    <p>{JSON.stringify(this.props.user)}</p>
                                    
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
    
};
export default ComponentC;