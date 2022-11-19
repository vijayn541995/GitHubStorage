import React from "react";
import axios from "axios";
import {Link} from 'react-router-dom' 
class EmployeeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            errorMessage: ``
        }

    };
    componentDidMount() {
        this.getAllEmployess();
    }
    getAllEmployess = () => {
        let dataUrl = `http://myjson.dit.upm.es/api/bins/gv6e`;
        axios.get(dataUrl).then((response) => {
            this.setState({
                ...this.state,
                employees: response.data
            })
        })
            .catch((error) => {
                this.setState({
                    ...this.state,
                    errorMessage: error
                })
            })
    }
    render() {
        let { employees, errorMessage } = this.state
        return (
            <React.Fragment>
                <pre>{JSON.stringify(this.state.employees)}</pre>

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
                                                                <tr key={employee.id}>
                                                                    <td>{employee.id}</td>
                                                                    <td>
                                                                        <Link to={'/employees/${employee.id}'}>{employee.first_name} {employee.last_name}</Link>
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
                                        </React.Fragment> : null

                                }
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }

}
export default EmployeeList;