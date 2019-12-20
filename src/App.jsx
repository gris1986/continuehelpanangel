import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './containers/Home/Home';
import About from './components/About/About';

import Layout from './containers/Layout/Layout';

class App extends Component {

  render() {
    return (
      <Router>
        <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Layout>
      </Router>
    );
  }
}

export default App;
