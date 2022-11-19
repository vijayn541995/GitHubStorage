import axios from "axios";
import React,{useState,useEffect}from "react";
import { Link ,useNavigate } from "react-router-dom";
let StockList=()=>{
    let navigate=useNavigate();
    let[stocks,setStocks]=useState([]);
    let [errorMessage,setErrorMessage]=useState('')

    useEffect(()=>{
        getAllStocks();
    },[])


    let getAllStocks=()=>{
        let dataUrl=`http://myjson.dit.upm.es/api/bins/bkr4`;
        axios.get(dataUrl).then((response)=>{
            setStocks(response.data)
        }).catch((error)=>{
            setErrorMessage(error.message)})
    }
  

    let clickSendStock=(stock)=>{
       
       navigate(`/stocks/${stock.id}`)
    }
    
        return (
            <React.Fragment>
            <pre>{JSON.stringify(stocks)}</pre>
           
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-teal">Stock Info</p>
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
                                stocks.length > 0 ?
                                    <React.Fragment>
                                        <table className="table table-hover table-striped table-primary text-center">
                                            <thead className="bg-primary text-white">
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Industry</th>
                                                    <th>Department</th>
                                                    <th>Name</th>
                                                    <th>Capital</th>
                                                    <th>Symbol</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    stocks.map((stock) => {
                                                        return (
                                                            <tr key={stock.id} onClick={clickSendStock.bind(this,stock)}>
                                                                <td>{stock.id}</td>
                                                                <td>{stock.industry}</td>
                                                                <td>{stock.department}</td>
                                                                <td>{stock.name}</td>
                                                                <td>{stock.capital}</td>
                                                                <td>{stock.symbol}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }             
                                               
                                            </tbody>
                                        </table>
                                    </React.Fragment> :errorMessage
                            }
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
        );
    }
    

export default StockList;