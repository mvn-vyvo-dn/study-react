import React, { Component } from 'react';
const listData = [
  {
    id: 1,
    title: 'This is title 1',
    description: 'Lorem 1',
    bgColor: '#e62e00',
  },
  {
    id: 2,
    title: 'This is title 2',
    description: 'Lorem 2',
    bgColor: '#ffdb4d',
  },
  {
    id: 3,
    title: 'This is title 3',
    description: 'Lorem 3',
    bgColor: '#00802b',
  },
  {
    id: 4,
    title: 'This is title 4',
    description: 'Lorem 4',
    bgColor: '#0000cc',
  },
  {
    id: 5,
    title: 'This is title 5',
    description: 'Lorem 5',
    bgColor: '#1a75ff',
  },
]
class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: listData,
    }
  }

  handleRemove = (id) => {
    const newItems = this.state.items.filter(item => item.id !== Number(id));
    this.setState({ items: newItems });
  }

  render() {
    let listItem = this.state.items.map((item) =>
        <li className="group-item" key={item.id}>
          <div className="square-icon" style={{ background: item.bgColor }}></div>
          <div className="item">
            <h4> {item.title} </h4>
            <p> {item.description} </p>
          </div>
          <span className="delete-icon" onClick={() => this.handleRemove(item.id)} > x </span>
        </li>);
    if (this.state.items.length === 0) {
      listItem = <h3>All off items!</h3>;
    }
    return (
      <ul>
      {listItem}
      </ul>
    )
  }
}

export default ListItems;
