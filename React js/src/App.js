import React from 'react';
import Home  from './Components/Home/Home';
import About  from './Components/About/About';
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './App.css';
import Register from './Components/Register/Register';
import SignIn from './Components/SignIn/SignIn';


function App() {
  return (
    <Router>
    <div >
     <Route exact path="/" component={Home}/>
     <Route   path="/About" component={About}/>
     <Route  path="/Register" component={Register}/>
     <Route  path="/SignIn" component={SignIn}/>
    </div>
    </Router>
  );  
}

export default App;
