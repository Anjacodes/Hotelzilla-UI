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

    console.log(loginData);

    dispatch(getToken(loginData));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          autoComplete="off"
        />
        <input
          type="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
          autoComplete="off"
        />
        <button type="submit" className="bg-blue-500 text-white">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
