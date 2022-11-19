import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';




import './App.css';
import '../node_modules/bootstrap-4-react/dist/bootstrap-4-react';
// import GithubProfileSearch from './Github_Profile_Search/Components/GithubProfileSearch';
// import ContactApp from './ContactApp/ContactApp';
import Navbar from './ReactRouting/root/Layout/Components/Navbar/Navbar';
import Home from './ReactRouting/root/Layout/Components/Home/Home'
import EmployeeList from './ReactRouting/Employees/Components/EmployeeList/EmployeeList';
import StockList from './ReactRouting/Stocks/Components/StockList/StockList';
import About from './ReactRouting/root/Layout/Components/About/About';
import EmployeeDetails from './ReactRouting/Employees/Components/EmployeeDetails/EmployeeDetails'







class App extends React.Component{
  constructor(props){ 
    super(props);
  
   

  }

 render() {
  return (
    <React.Fragment>
     {/* <nav className='navbar navbar-dark bg-dark navbar-expand-sm m-auto'>
      <a href="/" className="h3 nav-brand  text-white h2">React with Contact App</a>
      </nav> */}
      {/* <ContactApp/> */}

       {/* <GithubProfileSearch/> */}
       <Router>
       <Navbar/>
       <Routes>
       <Route path='/' element={<Home/>} />
        <Route path='/employees' element={<EmployeeList/>} />
        <Route path='/employees/:emp_id' element={<EmployeeDetails/>} />
        <Route path='/stocks' element={<StockList/>} />
        <Route path='/about' element={<About/>} />
       </Routes>
       </Router>
       
      </React.Fragment>
  );
 }
}


export default App;
