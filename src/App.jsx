import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Index from './components/Index';
import Reservations from './components/Reservations/Reservations';
import Reserve from './components/Reserve';
import Login from './components/Login';
import AddHotel from './components/AddHotel';
import { login } from './redux/login/login';
import { getAllHotelsAsync } from './redux/hotel/hotel';
import { getAllCitiesAsync } from './redux/city/city';
import LogedUsers from './components/accessibility/LogedUsers';
import DetailsView from './components/Details/DetailsView';

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
          <Route index element={<Index />} />
          <Route path=":roomId" element={<DetailsView />} />
          <Route element={<LogedUsers logged={loggedIn} />}>
            <Route path="reserve" element={<Reserve />} />
            <Route path="reservations" element={<Reservations />} />
            {/* Add additional protected routes here! */}
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
