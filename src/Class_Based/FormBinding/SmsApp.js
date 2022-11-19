import { Button } from "bootstrap-4-react/lib/components";
import React from "react";

class SmsApp extends React.Component {
    constructor(props) {
        super(props);
         this.state={
            maxcount:100,
            text:''
         }


    };
    UpdateText=(event)=>{
      this.setState({
        ...this.state,
        text:event.target.value
      })
    }
    SendMessage=(event)=>{
       
        event.preventDefault();
        console.log(this.state.text)
      };

    render() {
        return (
            
            <React.Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="card">
                                    <div className="card-header">
                                        <p className="h4">SMS App</p>
                                    </div>
                                    <form onSubmit={this.SendMessage}>
                                    <div className="card-body">
                                        <textarea
                                        value={this.state.text}
                                        onChange={this.UpdateText}
                                        maxLength={this.state.maxcount}
                                          className="form-control"  name="SMS" id="" cols="30" rows="8" placeholder="Type your sms here"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <button
                                          className="btn btn-primary btn-sm">Send</button>
                                    </div>
                                    </form>
                                    <p className=" form-group ">Remaining Characters:{this.state.maxcount-this.state.text.length}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
              

            </React.Fragment>
        );
    }

}
export default SmsApp;

