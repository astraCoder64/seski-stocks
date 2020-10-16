import React from 'react'
import Form from './pages/ls'
import home from './pages/home'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" component={home} exact/>
          <Route path="logsign" component={Form} exact/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
