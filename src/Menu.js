import React from 'react';

class Menu extends React.Component {
  render() {
    return (
      <nav>
          <a href="http://menu1.com" className="menu" >Menu 1</a>
          <a href="http://menu2.com" className="menu" >Menu 2</a>
          <a href="http://menu3.com" className="menu" >Menu 3</a>
      </nav>
    )
  }
}
export default Menu;
