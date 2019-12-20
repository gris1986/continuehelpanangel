import React from 'react';
import { Link } from 'react-router-dom';

import './BurgerNav.css';

const burgerNav = (props) => {
  const { show } = props;
  let burgerClasses = 'burger_nav';
  if (show) {
    burgerClasses = 'burger_nav open';
  }
  return (
    <nav className={burgerClasses}>
      <ul>
        <li><Link to="/">About</Link></li>
      </ul>
    </nav>
  );
};

export default burgerNav;
