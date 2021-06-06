import logo from './logo.svg';
import React from 'react';

class Main extends React.Component {
  render() {
    return (
        <main>
            <img src={logo} className="App-logo" alt="logo" />
            <p class="text">Hello React!</p>
        </main>
    )
  }
}
export default Main;
