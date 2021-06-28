import React, { Component } from 'react';

class UserRow extends Component {

  onRemove(id) {
    this.props.remove(id);
  }

  render() {
    const { data } = this.props;
    return (
      <tr>
        <td>{data.id}</td>
        <td>{data.email}</td>
        <td>{data.country}</td>
        <td>{data.gender === 0 ? 'Male' : 'Female'}</td>
        <td>{data.info}</td>
        <td>
          <button onClick={() => this.onRemove(data.id)}>Remove</button>
        </td>
      </tr>
    );
  }
}

export default UserRow;