import React from 'react';
import logo from '../logo.svg';

const Header = () => {
  return (
    <div class="ui fixed inverted menu">
      <div class="ui container">
        <a href="#" class="header item">
          <img src={logo} />
          Mod 4 Code Challenge
        </a>
        <a href="/" class="item">Home</a>
      </div>
    </div>
  );
}

export default Header;