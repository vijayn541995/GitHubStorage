import React,{useRef} from "react";

let Register = () => {
 let registerBtnEl=useRef(null);

let updateCheck=(e)=>{
 registerBtnEl.current.disabled=!e.target.checked
}
    return (
        <React.Fragment>
            <section className="p-4">
              <div className="row">
                 <div className="col-md-4">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <p className="h4">Register</p>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-check">
                                <input 
                                onChange={updateCheck}
                                type="checkbox" className="form-check-input " />
                                <lable className="form-check-lable">   Terms & Conditions</lable>
                                </div>
                                <div>
                                    <input 
                                    ref={registerBtnEl}
                                    type="submit" value="Register" className="btn btn-secondary btn-sm" disabled />
                                </div>
                                
                            </form>
                        </div>
                    </div>
                 </div>
            </div>
            </section>
        </React.Fragment>


    )
}
export default  Register;