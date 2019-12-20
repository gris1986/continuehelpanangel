import React from 'react';

import BurgerNavButton from '../BurgerNav/BurgerNavButton';
import './Toolbar.css';
import { Link } from 'react-router-dom';

const toolbar = (props) => {
  const { burgerClickHandler } = props;
  return (
    <header className="toolbar">
      <nav className="toolbar_navigation">
        <div className="toolbar_burger_button">
          <BurgerNavButton click={burgerClickHandler} />
        </div>
        <div className="toolbar_logo"><Link to="/">HELP AN ANGEL</Link></div>
        <div className="space_nav" />
        <div className="toolbar_navigation_item">
          <ul>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default toolbar;
