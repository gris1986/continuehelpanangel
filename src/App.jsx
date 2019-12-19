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

import petsData from './api/data.json';
import Carousel from './components/CarouselPage/CarouselPage';
import Search from './components/Search/Search';
import CardBox from './components/CardBox/CardBox';


class App extends Component {
  state = {
    burgerNavOpen: false,
    pets: [...petsData],
    type: '',
    city: '',
    size: '',
  };

  searchClickHandler = () => {

  }

  burgerClickHandler = () => {
    this.setState((prevState) => {
      return { burgerNavOpen: !prevState.burgerNavOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ burgerNavOpen: false });
  };

  render() {
    let backdrop;
    const { pets, burgerNavOpen } = this.state;


    if (burgerNavOpen) {
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
        <BurgerNav show={burgerNavOpen} />
        {backdrop}
        <main style={{ marginTop: '55px', background: '#99C1DA' }}>
          <Carousel> </Carousel>
          <Search click={this.searchClickHandler} />
        </main>
        <CardBox pets={pets} />
      </div>
    );
  }
}

export default App;
