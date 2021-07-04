import React, { useState } from 'react';
import UserRowHook from './UserRowHook';

let id = 0;

const RegisterFormHook = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    country: '',
    gender: '0',
    info: ''
  });

  const [users, setListUser] = useState([]);

  function handleSubmit(e) {
    // console.log(e);
    e.preventDefault();
    id = id + 1;
    const newUser = { ...form, id };
    setListUser([...users, newUser]);
  }

  function handleChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setForm({ ...form, [name]: value });
  }

  function handleRemove(id) {
    const newUsers = users.filter(e => e.id != id);
    setListUser(newUsers);
  }

  return (
    <div>
        <h3>Register Form</h3>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Your Country</label>
            <select name="country" onChange={handleChange}>
              <option value="">Please Choose</option>
              <option value="Viet Nam">Viet Nam</option>
              <option value="England">England</option>
            </select>
          </div>
          <div className="form-group">
            <label>Gender</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  value="0"
                  name="gender"
                  defaultChecked={form.gender === '0'}
                  onChange={handleChange}
                />
                    Male
                  </label>
              <label>
                <input
                  type="radio"
                  value="1"
                  name="gender"
                  defaultChecked={form.gender === '1'}
                  onChange={handleChange}
                />
                    Female
                  </label>
            </div>
          </div>
          <div className="form-group">
            <label>Other information</label>
            <textarea name="info" onChange={handleChange}></textarea>
          </div>
          <div className="buttons-set">
            <button className="btn">Submit</button>
          </div>
        </form>

        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Email Address</th>
              <th>Your country</th>
              <th>Gender</th>
              <th>Info</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(e => (
                <UserRowHook key={e.id} data={e} remove={handleRemove} />
              ))
            }
          </tbody>
        </table>
      </div>
  )
}

export default RegisterFormHook;
