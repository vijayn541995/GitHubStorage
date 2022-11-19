import React from "react";
import {params} from "react-router-dom"
class EmployeeDetails extends React.Component {
    constructor(props) {
        super(props);
        
    };
    
    render() {
        
        return (
            <React.Fragment>

                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="h3 text-teal">Employees Details</p>
                                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem quas omnis enim veniam pariatur a dolorem, nisi libero, cupiditate eligendi sunt tenetur, distinctio quo unde. Ducimus quas quia velit!</p>
                            </div>
                        </div>
                    </div>
                </section>
                
            </React.Fragment>
        );
    }

}
export default EmployeeDetails;