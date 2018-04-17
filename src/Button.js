import React from 'react';
import { Consumer } from './App';

const Button = ({ color }) => (
  <Consumer>
    {({ actions: { changeTheme } }) => (
      <button onClick={() => changeTheme(color)}> {color}</button>
    )}
  </Consumer>
);

export default Button;
