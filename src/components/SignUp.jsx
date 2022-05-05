import React, { useState } from 'react';
import signup from '../logic/signup';

const SignUp = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(form);
  };

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <div className="-mt-10">
        <img src="Hotelzilla-logo.png" alt="" width="200" />
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="name">Name:</label>
            <input
              className="border rounded px-2 py-1"
              name="name"
              id="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <input
              className="border rounded px-2 py-1"
              name="email"
              id="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">Password:</label>
            <input
              className="border rounded px-2 py-1"
              name="password"
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <label htmlFor="show-password">Show password?</label>
            <input
              type="checkbox"
              name="show-password"
              id="show-password"
              checked={showPassword}
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          <button className="bg-green-500 w-full rounded-md py-1" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
