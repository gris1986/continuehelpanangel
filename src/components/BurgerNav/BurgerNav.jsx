import React from 'react';

import './BurgerNav.css';

const burgerNav = (props) => {
  let burgerClasses = 'burger_nav';
  if (props.show) {
    burgerClasses = 'burger_nav open';
  }
  return (
    <nav className={burgerClasses}>
      <ul>
        <li><a href="/">Sponsor a pet</a></li>
        <li><a href="/">About</a></li>
      </ul>
    </nav>
  );
};

export default burgerNav;
