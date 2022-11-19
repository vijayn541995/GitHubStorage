import React,{useReducer} from "react";

let MessageFive=()=>{
    let GOOD_MORNING='GOOD_MORNING'
    let GOOD_AFTERNOON='GOOD_AFTERNOON'
    let GOOD_EVENING='GOOD_EVENING'

    let initialState='Hello'
    let reducer=(state=initialState,action)=>{
         switch(action){
            case GOOD_MORNING:
                return ('Good Morning')
            case GOOD_AFTERNOON:
                return ('Good Afternoon')
            case GOOD_EVENING:
                return ('Good Evening') 
            default: return(state)        
         }
    }
    let[message,dispatch]=useReducer(reducer,initialState)
    
    return(
        <React.Fragment>
            <section className="p-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-warning">
                                <p className="h4">useReducer() Redux Pattern</p>
                            </div>
                            <div className="card-body">
                                <p className="h4">{message}</p>
                                
                                    <button onClick={e=>dispatch('GOOD_MORNING')} className="btn btn-primary btn-sm ">Good Morning</button>
                                    <button onClick={e=>dispatch('GOOD_AFTERNOON')} className="btn btn-secondary btn-sm ">Good Afternoon</button>
                                    <button onClick={e=>dispatch('GOOD_EVENING')} className="btn btn-danger btn-sm ">Good Evening</button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>

    )
}
export default MessageFive;