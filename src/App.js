import React, { useState, useContext } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Routes,Route } from 'react-router-dom';






import './App.css';
import 'bootstrap-4-react/dist/bootstrap-4-react';
// import ContactApp from './Functional_Based/Contact_APP/ContactApp';
// import Home from './Functional_Based/React_Routing/root/Layout/Home';
// import Navbar from './Functional_Based/React_Routing/root/Layout/Navbar';
// import About from './Functional_Based/React_Routing/root/Layout/About';
// import EmployeeList from './Functional_Based/React_Routing/Employees/EmployeeList'
// import EmployeeDetails from './Functional_Based/React_Routing/Employees/EmployeeDetails'
// import StockList from './Functional_Based/React_Routing/Stocks/StockList'
// import StockDetails from './Functional_Based/React_Routing/Stocks/StockDetails'
import Filter from './Functional_Based/SelectBox/Filter'





let App = () => {
 


  return (
    <React.Fragment>
      {/* <nav className='navbar-nav navbar-dark nav-brand text-white'>
        <h2>REACT ROUTING Using React Hooks </h2>
      </nav> */}
{/*      
        <Navbar/>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/employees'} element={<EmployeeList/>}/>
          <Route path={'/stocks'} element={<StockList/>}/>
          <Route path={'/about'} element={<About/>}/>
          <Route path={"/employees/:id"} element={<EmployeeDetails/>} />
          <Route path={'/stocks/:id'} element={<StockDetails/>}/>
        </Routes> */}
   
    {/* <SelectBox/> */}
    {/* <TaskSelectBox/> */}
    {/* <FileSelect/> */}
    <Filter/>
     
      

    </React.Fragment>
      
      
  );
}

export default App; 
