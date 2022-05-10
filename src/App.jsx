import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SignUp from './components/SignUp';
import Home from './components/Home';
import ProtectedRoute from './components/Details/ProtectedRoute';
import Index from './components/Index';
import Reservations from './components/Reservations/Reservations';
import Reserve from './components/Reserve';
import Login from './components/Login';
import { login } from './redux/login/login';
import { getAllRoomsAsync } from './redux/room/room';

const tokenKey = 'token';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem(tokenKey)) {
      dispatch(login(JSON.parse(localStorage.getItem(tokenKey))));
    }

    dispatch(getAllRoomsAsync());
  }, []);

  const loggedIn = useSelector(state => state.login.isLoggedIn)

  // const loggedIn = true

  return (
    <>
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}>
          <Route index element={< Index />}/>
          <Route path=":roomId" element={<ProtectedRoute loggedIn={loggedIn} />}/>
          <Route path='reservations' element={loggedIn? <Reservations /> : <Navigate to="/login" />} />
          <Route path="reserve" element={<Reserve />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
