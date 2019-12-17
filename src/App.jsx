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
import Toolbar from './components/Toolbar/Toolbar';
import BurgerNav from './components/BurgerNav/BurgerNav';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {
  state = {
    burgerNavOpen: false,
  };

  burgerClickHandler = () => {
    this.setState((prevState) => {
      return { burgerNavOpen: !prevState.burgerNavOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({burgerNavOpen: false});
  };

  render() {
    let backdrop;


    if (this.state.burgerNavOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: '100%' }}>
        <Toolbar burgerClickHandler={this.burgerClickHandler}>
          <Router>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
          </Router>
        </Toolbar>
        <BurgerNav show={this.state.burgerNavOpen} />
        {backdrop}
        <main style={{ marginTop: '64px' }}>
          <p>This will be a slider</p>
        </main>
      </div>
    );
  }
}

export default App;
