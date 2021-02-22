import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ExamplaryStu from './components/ExamplaryStu/ExamplaryStu';
import News from './components/News/News';
import InfoEvent from './components/InfoEvent/InfoEvent';
import NotFound from './components/NotFound/NotFound'
import Calendar from './components/Calendar/Calendar';
import InfoStudentContainer from './components/InfoStudent/InfoStudentContainer/InfoStudentContainer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {

  return (
    <div>

      <Router className="RouterApp">
        <div className="SV5Tapp">
          <Switch>
            <Route exact path="/InfoStudentContainer" component={InfoStudentContainer} />
            <div>
              <NavBar />
              <Route exact path="/" exact component={News} />
              <Route exact path="/ExamplaryStu/" component={ExamplaryStu} />
              <Route exact path="/InfoEvent/" component={InfoEvent} />
              <Route exact path="/Calendar" component={Calendar} />
              
            </div>
            <Route component={NotFound} />
          </Switch>
          
        </div>
      </Router>
      
    </div>
  );
}

export default App;
