import React, { useEffect } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SignUp from './components/SignUp';
import Home from './components/Home';
import ProtectedRoute from './components/Details/ProtectedRoute';
import Index from './components/Index';
import Reservations from './components/Reservations/Reservations';
import Reserve from './components/Reserve';
import Login from './components/Login';
import AddHotel from './components/AddHotel';
import { login } from './redux/login/login';
import { getAllHotelsAsync } from './redux/hotel/hotel';
import { getAllCitiesAsync } from './redux/city/city';

const tokenKey = 'token';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loggedIn = useSelector((state) => state.login.isLoggedIn);

  useEffect(() => {
    if (localStorage.getItem(tokenKey)) {
      dispatch(login(JSON.parse(localStorage.getItem(tokenKey))));
    }

    dispatch(getAllHotelsAsync());
    dispatch(getAllCitiesAsync());
  }, []);

  useEffect(() => {
    if (loggedIn) {
      navigate('/', { replace: true });
    }
  }, [loggedIn]);

  return (
    <>
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-hotel" element={<AddHotel />} />
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
