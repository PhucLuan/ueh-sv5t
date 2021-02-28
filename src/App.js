import './App.css';
import React, {useState} from 'react';
import NavBar from './components/NavBar/NavBar';
import ExamplaryStu from './components/ExamplaryStu/ExamplaryStu';
import Homepage from './components/Homepage/Homepage';
import News from './components/News/News';
import InfoEvent from './components/InfoEvent/InfoEvent';
import NotFound from './components/NotFound/NotFound'
import InfoStudentContainer from './components/InfoStudent/InfoStudentContainer/InfoStudentContainer';
import RegisAndLogin from './components/RegisAndLogin/RegisAndLogin';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {

  return (
    <div>
      <Router className="RouterApp">
        <div className="SV5Tapp">
          <Switch>
            <Route exact path="/InfoStudentContainer" component={InfoStudentContainer} />
            <div>
              <NavBar/>
              <Route exact path="/RegisAndLogin" exact component={RegisAndLogin} />
              <Route exact path="/" exact component={Homepage} />
              <Route exact path="/Homepage" exact component={Homepage} />
              <Route exact path="/News" exact component={News} />
              <Route exact path="/ExamplaryStu/" component={ExamplaryStu} />
              <Route exact path="/InfoEvent/" component={InfoEvent} />              
            </div>
            <Route component={NotFound} />
          </Switch>
          
        </div>
      </Router>
      
    </div>
  );
}

export default App;
