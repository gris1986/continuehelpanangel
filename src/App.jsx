import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from './containers/Home/Home';
import About from './components/About/About';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
    </Router>
  );
}

export default App;
