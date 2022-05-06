import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Test from './components/Test';
import Login from './components/Login';
import { login } from './redux/login/login';
import {
  isLoggedIn,
  isLoggedOut,
  getRole,
  getUserId,
} from './modules/auth-module';

const tokenKey = 'token';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem(tokenKey)) {
      dispatch(login(JSON.parse(localStorage.getItem(tokenKey))));
    }
  }, []);

  const token = useSelector((state) => state.login.token);

  useEffect(() => {
    console.log(token);
    console.log(isLoggedIn(token));
    console.log(isLoggedOut(token));
    console.log(getRole(token));
    console.log(getUserId(token));
  }, [token]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
