import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Topics from './components/Topics';
import Contact from './components/Contact';

import './App.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <hr />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const NoMatch = ({ location }) => (
  <div>
    <h3>
      {' '}
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

export default App;
