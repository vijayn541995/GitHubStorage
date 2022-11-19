import React from "react";

class SelectBox extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            SelectedCar:'' 
        }
    }
  
    updateSlected=(event)=>{

this.setState({
    [event.target.name]:event.target.value
}); 
    };
    render() {
        return (
            <React.Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
                <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <p className="h4">Select a Car</p>
                                </div>
                                <div className="card-body ">
                                    <div className="row">
                                        <div className="col">
                                            <form>
                                                <div className="form-group">
                                                    <select 
                                                    name="SelectedCar"
                                                    onChange={this.updateSlected}
                                                    className="form-control">
                                                        <option value="">Select a Car</option>
                                                        <option value="BMW">BMW</option>
                                                        <option value="Ducati">Ducati</option>
                                                        <option value="Audi">Audi</option>
                                                        <option value="Volkswagan">Volkswagan</option>
                                                        <option value="ferrari">ferrari</option>
                                                    </select>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col">
                                            <p className="h4">{this.state.SelectedCar}</p>
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
export default SelectBox;