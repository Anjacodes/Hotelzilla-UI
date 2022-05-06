import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
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
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />}>
          <Route index element={< Index />}/>
          <Route path=":roomId" element={<ProtectedRoute loggedIn={state.loggedIn} />}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
