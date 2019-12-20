import React, { Component } from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import BurgerNav from '../../components/BurgerNav/BurgerNav';
import Backdrop from '../../components/Backdrop/Backdrop';

export default class Layout extends Component {
  state = {
    burgerNavOpen: false,
  };

  burgerClickHandler = () => {
    this.setState((prevState) => ({ burgerNavOpen: !prevState.burgerNavOpen }));
  };

  backdropClickHandler = () => {
    this.setState({ burgerNavOpen: false });
  };

  render() {
    let backdrop;
    const { burgerNavOpen } = this.state;
    const { children } = this.props;


    if (burgerNavOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: '100%' }}>
        <Toolbar burgerClickHandler={this.burgerClickHandler} />
        <BurgerNav show={burgerNavOpen} />
        {backdrop}
        <main style={{ marginTop: '55px', background: '#99C1DA' }}>
          {children}
        </main>
      </div>
    );
  }
}
