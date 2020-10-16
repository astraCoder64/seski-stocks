import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import home from './pages/home'
import form from './pages/form'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" component={ home} exact/>
          <Route path="/getstarted" component={form} exact/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
