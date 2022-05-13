import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Index from './components/Index';
import Reservations from './components/Reservations/Reservations';
import Reserve from './components/Reserve';
import Login from './components/Login';
import AddHotel from './components/AddHotel';
import { loginActions } from './redux/login/login';
import LogedUsers from './components/accessibility/LogedUsers';
import DetailsView from './components/Details/DetailsView';
import IsAdmin from './components/accessibility/isAdmin';

const App = () => {
  console.log('Start App code');
  const dispatch = useDispatch();
  const tokenKey = 'token';
  if (localStorage.getItem(tokenKey)) {
    dispatch(loginActions.login(JSON.parse(localStorage.getItem(tokenKey))));
  }

  const {isLoggedIn, role } = useSelector(state => state.login)

  console.log('End App code');

  return (
    <>
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}>
          <Route index element={<Index />} />
          <Route path=":roomId" element={<DetailsView />} />
          <Route element={<IsAdmin role={role} loggedIn={isLoggedIn} />}>
            <Route path="add-hotel" element={<AddHotel />} />
            <Route path="delete-hotel" />
          </Route>
          {/* Conditional mounting should be fixed!! */}
          <Route element={<LogedUsers logged={isLoggedIn} />}>
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
