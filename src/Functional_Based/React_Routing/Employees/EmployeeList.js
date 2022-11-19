import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
let EmployeeList = () => {
    let navigate=useNavigate();
    let [employees, setEmployees] = useState([])
    let [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        getAllEmployess();
    }, [])

    let getAllEmployess = () => {
        let dataUrl = `http://myjson.dit.upm.es/api/bins/gv6e`;
        Axios.get(dataUrl).then((response) => {
            setEmployees(response.data)
        })
            .catch((error) => {
                setErrorMessage(error.message)  
            })
    }

    let clickSendEmployee=(employee)=>{
       
        navigate(`/employees/${employee.id}`)
     }


    return (
        <React.Fragment>
            <pre>{JSON.stringify(employees)}</pre>

            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-teal">Employees Info</p>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem quas omnis enim veniam pariatur a dolorem, nisi libero, cupiditate eligendi sunt tenetur, distinctio quo unde. Ducimus quas quia velit!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {
                                employees.length > 0 ?
                                    <React.Fragment>
                                        <table className="table table-hover table-striped table-primary text-center">
                                            <thead className="bg-primary text-white">
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Name</th>
                                                    <th>Gender</th>
                                                    <th>Email</th>
                                                    <th>Country</th>
                                                    <th>Ip-address</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    employees.map((employee) => {
                                                        return (
                                                            <tr key={employee.id} onClick={clickSendEmployee.bind(this,employee)}>
                                                                <td>{employee.id}</td>
                                                                <td>
                                                                {employee.first_name} {employee.last_name}
                                                                </td>
                                                                <td>{employee.gender}</td>
                                                                <td>{employee.email}</td>
                                                                <td>{employee.country}</td>
                                                                <td>{employee.ip_address}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }

                                            </tbody>
                                        </table>
                                    </React.Fragment> : errorMessage

                            }
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}


export default EmployeeList;

