import React,{useReducer} from "react";

let MessageThree=()=>{
    let initialState='Hello!'

    let reducer=(state=initialState,action)=>{
        switch(action){
            case 'gm':
                return ('Good Morning');
            case 'ga':
                return ('Good Afternoon') ;
            case 'ge':
                return ('Good Evening') ;
            default : return(state)          

        }
        
    }
    
    let[message, dispatch] = useReducer(reducer,initialState)
    
    return(
        <React.Fragment>
            <section className="p-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-danger">
                                <p className="h4">useReducer() Hooks 'string'</p>
                            </div>
                            <div className="card-body">
                                <p className="h4">{message}</p>
                                
                                    <button onClick={e=>dispatch('gm')} className="btn btn-primary btn-sm ">Good Morning</button>
                                    <button onClick={e=>dispatch('ga')} className="btn btn-secondary btn-sm ">Good Afternoon</button>
                                    <button onClick={e=>dispatch('ge')} className="btn btn-danger btn-sm ">Good Evening</button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>

    )
}
export default MessageThree;