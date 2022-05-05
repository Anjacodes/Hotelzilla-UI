import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Test from './components/Test';
import Login from './components/Login';

const App = () => {
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
