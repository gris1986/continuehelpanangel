import React from 'react';

import BurgerNavButton from '../BurgerNav/BurgerNavButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar_burger_button">
        <BurgerNavButton click={props.burgerClickHandler} />
      </div>
      <div className="toolbar_logo"><a href="/">HELP AN ANGEL</a></div>
      <div className="space_nav" />
      <div className="toolbar_navigation_item">
        <ul>
          <li><a href="/sponsor">Sponsor a pet</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
