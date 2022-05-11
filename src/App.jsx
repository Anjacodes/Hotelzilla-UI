import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Index from './components/Index';
import Reservations from './components/Reservations/Reservations';
import Reserve from './components/Reserve';
import Login from './components/Login';
import { login } from './redux/login/login';
import { getAllRoomsAsync } from './redux/room/room';
import LogedUsers from './components/accessibility/LogedUsers';
import DetailsView from './components/Details/DetailsView';
import IsAdmin from './components/accessibility/isAdmin';

const tokenKey = 'token';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem(tokenKey)) {
      dispatch(login(JSON.parse(localStorage.getItem(tokenKey))));
    }

    dispatch(getAllRoomsAsync());
  }, []);

  const loggedIn = useSelector((state) => state.login.isLoggedIn);
  const role = useSelector((state) => state.login.role)

  return (
    <>
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}>
          <Route index element={<Index />} />
          <Route path=":roomId" element={<DetailsView />} />
          <Route element={<IsAdmin role={role} logged={loggedIn}/>}>
            <Route path="add-hotel" />
            <Route path="delete-hotel" />
          </Route>
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
