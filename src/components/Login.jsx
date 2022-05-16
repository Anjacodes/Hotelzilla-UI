import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/login/login';
import LoginBackButton from './navigation/LoginBackButton';

const Login = () => {
  const navigate = useNavigate();
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

    dispatch(login(loginData));
  };

  const { isLoggedIn, error } = useSelector((state) => state.login);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/', { replace: true });
    }
  }, [isLoggedIn]);

  if (error) {
    document.querySelector('#login-error').classList.remove('hidden');
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-100">
      <LoginBackButton />
      <form
        onSubmit={submitHandler}
        className="w-sm-3/4 flex flex-col items-end gap-2 p-9"
      >
        <img
          className="w-sm-6/12 w-4/12 self-center"
          src="Hotelzilla-logo.png"
          alt=""
        />
        <h2 className="w-full text-center text-3xl">Login</h2>
        <div className="w-full">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            autoComplete="off"
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
            required
          />
        </div>
        <div className="w-full">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            autoComplete="off"
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
            required
          />
        </div>
        <p id="login-error" className="hidden w-full text-red-600">
          Please enter a valid name or password
        </p>
        <button
          type="submit"
          className="focus:shadow-outline appearance-none rounded border bg-blue-500 py-2 px-3 leading-tight text-white focus:outline-none"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
