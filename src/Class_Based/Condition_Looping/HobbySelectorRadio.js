import React from "react";
class HobbySelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hobby: ''
        }

    };
    updateRadio = (e) => {
        this.setState({
            hobby: e.target.value
        }

        )
    }



    render() {
        return (
            <React.Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="card">
                                    <div className="card-header bg-secondary text-white">
                                        <h2>HobbySelectorRadio</h2>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div class="form-check">
                                                    <input
                                                        //only event, value & name is not required
                                                        onChange={this.updateRadio}
                                                        className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="eating" />
                                                    <label className="form-check-label" for="exampleRadios1">
                                                        Eating
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input
                                                        onChange={this.updateRadio}
                                                        class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="coding" />
                                                    <label class="form-check-label" for="exampleRadios1">
                                                        Coding
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input
                                                        //event
                                                        onChange={this.updateRadio}
                                                        class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="sleeping" />
                                                    <label class="form-check-label" for="exampleRadios1">
                                                        Sleeping
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-9">
                                                {
                                                    this.state.hobby === 'eating' &&
                                                    <div className="card m-1 animated-jello">
                                                        <div className="card-body bg-success text-white">
                                                            <p className="h3"><i className="fa fa-check-circle" />Eating</p>
                                                            <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, dignissimos</small>
                                                        </div>
                                                    </div>
                                                }
                                                {
                                                    this.state.hobby === 'coding' &&
                                                    <div className="card m-1">
                                                        <div className="card-body bg-warning text-white">
                                                            <p className="h3"><i className="fa fa-check-circle" />Coding</p>
                                                            <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, dignissimos</small>
                                                        </div>
                                                    </div>
                                                }
                                                {
                                                    this.state.hobby === 'sleeping' &&
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
}

export default HobbySelector;