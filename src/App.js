import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <h1>My Articles</h1>

          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
