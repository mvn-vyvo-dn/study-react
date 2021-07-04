import React from 'react';

const UserRowHook = (props) => {

  const data = props.data;

  function onRemove(id) {
    // console.log(props.remove);
    props.remove(id);
  }

  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.email}</td>
      <td>{data.country}</td>
      <td>{data.gender === 0 ? 'Male' : 'Female'}</td>
      <td>{data.info}</td>
      <td>
        <button onClick={() => onRemove(data.id)}>Remove</button>
      </td>
    </tr>
  );
}

export default UserRowHook;
