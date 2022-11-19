import React from 'react';
import ChildCard from './ChildCard';


class ParentCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pText:'',
            cText:''
        }

    };
    updateText=(event)=>{
        this.setState({
            pText:event.target.value
        });
    };

    recieveData=(value)=>{
        this.setState({
            ...this.state,
            cText:value
        });
    };



    render() {
        return (
            <React.Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
                <section className="p-3">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">
                                    <p className="h3">ParentCard</p>
                                    <small>{this.state.cText}</small>
                                </div>
                                <div className="card-body rgba-purple-light">
                                    <form>
                                        <input 
                                        value={this.state.pText}
                                        onChange={this.updateText} /* or onChange={e=>this.setState({pText:e.target.value})}*/
                                        type="text" placeholder='Type here' className='form-group' />
                                    </form>
                                        <ChildCard pText={this.state.pText} sendData={this.recieveData}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }

};
export default ParentCard;