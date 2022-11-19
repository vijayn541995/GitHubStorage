import React,{useState} from "react";

let MessageTwo=()=>{
    let [message,setMessage]=useState('"Hello Click A Button"')

    return(
        <React.Fragment>
            <section className="p-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-secondary">
                                <p className="h4">useState() Hooks</p>
                            </div>
                            <div className="card-body">
                                <p className="h2">{message}</p>
                                
                                    <button onClick={e=>setMessage('Good Morning')} className="btn btn-primary btn-sm ">Good Morning</button>
                                    <button onClick={e=>setMessage('Good Afternoon')} className="btn btn-secondary btn-sm ">Good Afternoon</button>
                                    <button onClick={e=>setMessage('Good Evening')} className="btn btn-danger btn-sm ">Good Evening</button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>

    )
}
export default MessageTwo;