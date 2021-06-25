import React from 'react';
import Circle from './Circle';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
    };
  }

  handleChangePage(page) {
    this.setState({
      page
    });
  }

  render() {
    const { page }  = this.state;
    const sizeCircle = 60;
    const status = false;
    return (
      <main className="page-main">
        <button onClick={() => this.handleChangePage('home')}>Page Home</button>
        <button onClick={() => this.handleChangePage('about')}>Page About</button>
        {(page === 'home')
          && <div className="circles">
              <Circle number={50} widthCircle={sizeCircle} heightCircle={sizeCircle} isStart={status} />
              <Circle number={40} widthCircle={sizeCircle} heightCircle={sizeCircle} isStart={status} />
              <Circle number={30} widthCircle={sizeCircle} heightCircle={sizeCircle} isStart={status} />
            </div>
        }
        {(page === 'about') && <div className="circles">About page</div>}
      </main>
    );
  }
}
export default Main;
