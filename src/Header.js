import React from 'react';
import Menu from './Menu';

class Header extends React.Component {
  render() {
    return (
      <header>
          <div class="container">
            <div class="header-left">
                <div class="circle-large"></div>
            </div>
            <Menu />
            <div class="header-right container">
                <div class="circle-small"></div>
                <div class="circle-small"></div>
                <div class="circle-small"></div>
            </div>
          </div>
      </header>
    )
  }
}
export default Header;
