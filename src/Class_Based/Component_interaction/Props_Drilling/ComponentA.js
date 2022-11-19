import React from 'react';
import ComponentB from './ComponentB';



class ComponentA extends React.Component {
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
                                    <p className="h4">Component A</p>
                                    <p className="h4">{JSON.stringify(this.props.user)}</p>


                                    < ComponentB user={this.props.user}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }

};
export default ComponentA;