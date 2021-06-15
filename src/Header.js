import React from 'react';
import Menu from './Menu';

class Header extends React.Component {
  render() {
    return (
      <header className="header-page">
        <div className="header-left">
          <div className="circle-large"></div>
        </div>
        <Menu />
        <div className="header-right">
          <div className="circle-small"></div>
          <div className="circle-small"></div>
          <div className="circle-small"></div>
        </div>
      </header>
    )
  }
}
export default Header;
