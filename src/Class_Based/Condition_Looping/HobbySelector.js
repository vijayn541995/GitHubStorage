import React from "react";
class HobbySelector extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            hobby:{
                eating:false,
                coding:false,
                sleeping:false
            }
        }
      
    };
       updateCheck=(e)=>{
        this.setState({
            hobby:{
                ...this.state.hobby,
            [e.target.name]: e.target.checked
        }
            
        })
        }   
 

    render() { 
        let{hobby}=this.state
        return (
            <React.Fragment>
            <pre>{JSON.stringify(this.state.hobby)}</pre>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <h2>HobbySelector</h2>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="form-check">
                                                <input
                                                    //Get or read component data
                                                    name="eating"
                                                    //event
                                                    onChange={this.updateCheck}
                                                    className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="form-check-label" for="defaultCheck1">
                                                    Eating
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    name="coding"
                                                    onChange={this.updateCheck}
                                                    className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="form-check-label" for="defaultCheck1">
                                                    Coding
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    name="sleeping"
                                                    onChange={this.updateCheck}
                                                    className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="form-check-label" for="defaultCheck1">
                                                    Sleeping
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-9">
                                            {
                                                (hobby.eating) &&
                                                <div className="card m-1 animated-jello">
                                                    <div className="card-body bg-success text-white">
                                                        <p className="h3"><i className="fa fa-check-circle" />Eating</p>
                                                        <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, dignissimos</small>
                                                    </div>
                                                </div>
                                            }
                                            {
                                                (hobby.coding) &&
                                                <div className="card m-1">
                                                    <div className="card-body bg-warning text-white">
                                                        <p className="h3"><i className="fa fa-check-circle" />Coding</p>
                                                        <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, dignissimos</small>
                                                    </div>
                                                </div>
                                            }
                                            {
                                                (hobby.sleeping) &&
                                                <div className="card m-1">
                                                    <div className="card-body bg-danger text-white">
                                                        <p className="h3"><i className="fa fa-check-circle" />Sleeping</p>
                                                        <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, dignissimos</small>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>
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

export default HobbySelector;