import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getToken } from '../redux/login/login';

const Login = () => {
  const dispatch = useDispatch();
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const loginData = {
      email: enteredEmail,
      password: enteredPassword,
    };

    dispatch(getToken(loginData));
  };

  return (
    <div className="flex w-screen h-screen bg-gray-200 justify-center items-center">
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-2 items-end p-9 w-sm-3/4"
      >
        <img
          className="self-center w-4/12 w-sm-6/12"
          src="Hotelzilla-logo.png"
          alt=""
        />
        <input
          type="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          autoComplete="off"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input
          type="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
          autoComplete="off"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 appearance-none border rounded px-3 leading-tight focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
