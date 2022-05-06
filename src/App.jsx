import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ProtectedRoute from './components/Details/ProtectedRoute';
import Index from './components/Index';

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
        </Route>
      </Routes>
    </>
  );
};

export default App;
