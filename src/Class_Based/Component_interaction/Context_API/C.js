import React from 'react';
import {UserContext} from './UserContext'


class C extends React.Component{
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
                                    
                                    <UserContext.Consumer>
                                        
                                       {
                                        (user)=>{
                                            return(
                                                <small>{JSON.stringify(user)}</small>
                                            )
                                        }
                                       }
                                      
                                    </UserContext.Consumer>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
    
};
export default C;