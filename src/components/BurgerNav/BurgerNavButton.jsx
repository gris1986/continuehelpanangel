import React from 'react';

import './BurgerNavButton.css';

const burgerNavButton = props => (
  <button className="burger_button" onClick={props.click}>
    <div className="burger_button_line" />
    <div className="burger_button_line" />
    <div className="burger_button_line" />
  </button>
);

export default burgerNavButton;
