import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProtectedRoute from './components/Details/ProtectedRoute';
import Index from './components/Index';
import Reservations from './components/Reservations.jsx/Reservations';

const App = () => {

  const state = {
    loggedIn: true
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={< Index />}/>
          <Route path=":roomId" element={<ProtectedRoute loggedIn={state.loggedIn} />}/>
          <Route path='reservations' element={<Reservations />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
