import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";
let StockDetails = () => {
    let stockID = useParams().id;

    let [selectedStock, setSelectedStock] = useState({});
    let [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        let dataURL = `http://myjson.dit.upm.es/api/bins/bkr4`;
        Axios.get(dataURL).then((response) => {
            let stocks = response.data;
            let aStock = stocks.find(stock => stock.id = stockID);
            setSelectedStock(aStock);
        }).catch((error) => {
            console.error(error);
            setErrorMessage(error);
        });
    }, []);
    return (
        <React.Fragment>
            <pre>{JSON.stringify(selectedStock)}</pre>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-primary">Stocks Details</p>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tenetur accusamus, cum tempore sint dolores consequuntur,
                            dolor pariatur sapiente vel aut praesentium et labore, voluptates temporibus totam? Recusandae, nesciunt inventore!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {
                            Object.keys(selectedStock).length > 0 ?
                                <React.Fragment>
                                    <div className="card">
                                        <div className="card-header bg-secondary text-white">
                                            <p className="h5">{selectedStock.name} </p>
                                        </div>
                                        <div className="card-body bg-success">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <ul className="list-group">
                                                    <li className="list-group-item">
                                                            ID : {selectedStock.id}
                                                        </li>
                                                        <li className="list-group-item">
                                                            INDUSTRY : {selectedStock.industry}
                                                        </li>
                                                        <li className="list-group-item">
                                                            DEPARTMENT : {selectedStock.department}
                                                        </li>
                                                        <li className="list-group-item">
                                                            CAPITAL : {selectedStock.capital}
                                                        </li>
                                                        <li className="list-group-item">
                                                            SYMBOL : {selectedStock.symbol}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <Link to="/stocks" className="btn btn-secondary btn-sm">Back</Link>
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
export default StockDetails;
