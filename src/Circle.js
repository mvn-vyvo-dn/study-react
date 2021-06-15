import React, { Component } from 'react';

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.number,
      isStart: this.props.isStart,
    }
    this.toggleCountdown = this.toggleCountdown.bind(this);
    this.circle = React.createRef();
    this.interval = null;
  }

  toggleCountdown() {
    // console.log(this.state);
    const {isStart, number} = this.state;
    this.setState({isStart : !isStart});
    if (!isStart) {
      clearInterval(this.interval);
    } else {
      if (number !== undefined) {
        this.interval = setInterval(() => {
          this.setState((prevState) => ({
            number: prevState.number - 1 > 0 ? prevState.number - 1 : clearInterval(this.interval)
          }));
          // console.log('loop');
      }, 1000);
      }
    }
  }

  componentDidMount() {
    this.toggleCountdown();
  }

  componentWillUnmount() {
    // console.log('componentWillUnmount');
    clearInterval(this.interval);
  }

  render() {
    const { widthCircle, heightCircle } = this.props;
    const { number, isStart } = this.state;
    const styles = {
      width: widthCircle,
      height: heightCircle,
      borderRadius: '50%',
      backgroundColor: '#FFD700',
    };
    return (
      <div className="circle-group">
        <button onClick={this.toggleCountdown}>{isStart ? 'START': 'STOP'}</button>
        <div ref={this.circle} style={styles}>
          <span className="text-circle"> { number || 0 } </span>
        </div>
      </div>
    );
  }
}

export default Circle;
