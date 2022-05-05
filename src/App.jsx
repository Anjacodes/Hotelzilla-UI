import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={< NavBar/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
