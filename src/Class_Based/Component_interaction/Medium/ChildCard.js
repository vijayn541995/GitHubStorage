import React from 'react';

class   ChildCard extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            cText:''
        }
        
    };
    updateText=(event)=>{
        this.setState({
            cText:event.target.value
        });
        this.props.sendData(this.state.cText); /*or  this.props.sendData(event.target.value);  */
    };
    

    render() {
        return ( 
            <React.Fragment>
                <section className="p-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header custom">
                                    <p className="h3">Child Card</p>
                                    <small>{this.props.pText}</small>
                                </div>
                                <div className="card-body custom">
                                    <form>
                                        
                                        <input 
                                        value={this.state.cText}
                                        onChange={this.updateText}
                                        type="text" placeholder='Child Text' className='form-group' />
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
    
};
export default ChildCard;