// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import Axios from "axios";

// let EmployeeDetails = () => {
//     let employeeID = useParams().id;
//     let [selectedEmployee, setSelectedEmployee] = useState({"id":"403HIY835","first_name":"Garvin","last_name":"MacGiany","gender":"Male","email":"gmacgiany2@businessinsider.com","country":"Berlin","ip_address":"22.176.71.236"})
//     let [errorMessage, setErrorMessage] = useState('')

//     useEffect(() => {
//         let dataURL = `http://myjson.dit.upm.es/api/bins/gv6e`;
//         Axios.get(dataURL).then((response) => {
//             let employees = response.data;
//             let anEmployee = employees.find(employee => employee.id = employeeID);
//             setSelectedEmployee(anEmployee);
//         }).catch((error) => {
//             console.error(error);
//             setErrorMessage(error);
//         });
//     }, []);

// console.log(employeeID);
//     return (
//         <React.Fragment>
//                 <pre>{JSON.stringify(selectedEmployee)}</pre>
//             <section className="p-3">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col">
//                             <p className="h3 text-teal">Employees Details</p>
                           
//                             <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem quas omnis enim veniam pariatur a dolorem, nisi libero, cupiditate eligendi sunt tenetur, distinctio quo unde. Ducimus quas quia velit</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             {
//                 Object.keys(selectedEmployee).length > 0 ?
//                     <React.Fragment>
//                         <div className="container">
//                             <div className="row">
//                                 <div className="col">
//                                     <div className="card">
//                                         <div className="card-header bg-secondary"> Name:{selectedEmployee.first_name} {selectedEmployee.last_name}</div>
//                                     </div>
//                                     <div className="card-body ">
//                                         <ul className="list-group">
//                                             <li className="list-group-item ">
//                                               Gender: {selectedEmployee.gender}
//                                             </li>
//                                             <li className="list-group-item">
//                                                Email: {selectedEmployee.email}
//                                             </li>
//                                             <li className="list-group-item">
//                                               Country:  {selectedEmployee.country}
//                                             </li>
//                                             <li className="list-group-item">
//                                                Ip_Adress: {selectedEmployee.ip_address}
//                                             </li>
//                                         </ul>
//                                     </div>
//                                     <Link to="/employees" className="btn btn-secondary btn-sm">Back</Link>
//                                 </div>
                             
//                             </div>
//                         </div>
//                     </React.Fragment>:errorMessage

//                 }

           

//         </React.Fragment>
//     );
// }

// export default EmployeeDetails;


import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";
let EmployeeDetails = () => {
    let employeeId = useParams().id;
  
    let [selectedEmployee, setSelectedEmployee] = useState({"id":"307RSJ899","first_name":"Ron","last_name":"McGrudder","gender":"Male","email":"rmcgrudder0@samsung.com","country":"Ash Shajarah","ip_address":"27.21.170.15"});
    let [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        let dataURL = 'http://myjson.dit.upm.es/api/bins/gv6e';
        Axios.get(dataURL).then((response) => {
           
            let employees = response.data; 
            let anEmployee = employees.find(employee => employee.id === employeeId);
            setSelectedEmployee(anEmployee);
        }).catch((error) => {
            console.error(error);
            setErrorMessage(error);
        });
    }, []);
    return (
        <React.Fragment>
            <pre>{JSON.stringify(selectedEmployee)}</pre>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-primary">Employee Details</p>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tenetur accusamus, cum tempore sint dolores consequuntur,
                            dolor pariatur sapiente vel aut praesentium et labore, voluptates temporibus totam? Recusandae, nesciunt inventore!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {
                           Object.keys(selectedEmployee).length> 0 ?
                                <React.Fragment>
                                    <div className="card">
                                        <div className="card-header bg-secondary text-white">
                                            <p className="h5">{selectedEmployee.first_name} {selectedEmployee.last_name}</p>
                                        </div>
                                        <div className="card-body bg-success">
                                            <div className="row align-items-center">
                                                <div className="col-md-4 text-center">
                                                    <img src={selectedEmployee.img} alt="" />
                                                </div>
                                                <div className="col-md-8">
                                                    <ul className="list-group">
                                                        <li className="list-group-item">
                                                            EMAIL : {selectedEmployee.email}
                                                        </li>
                                                        <li className="list-group-item">
                                                            GENDER : {selectedEmployee.gender}
                                                        </li>
                                                        <li className="list-group-item">
                                                            COUNTRY : {selectedEmployee.country}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <Link to="/employees" className="btn btn-secondary btn-sm">Back</Link>
                                        </div>
                                    </div>
                                </React.Fragment> : errorMessage
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default EmployeeDetails;