import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.min.css';






import './App.css';
import 'bootstrap-4-react/dist/bootstrap-4-react';
import Register from './Functional_Based/Use_Ref/Register';



let App = () => {
 


  return (
    <React.Fragment>
      <nav className='navbar-nav navbar-dark nav-brand text-white'>
        <h2>Use Ref and Use Reducer Using React Hooks </h2>
      </nav>
     <Register/>
       
    </React.Fragment>
      
      
  );
}

export default App; 
