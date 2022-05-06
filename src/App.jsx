import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Index from './components/Index';

const App = () => {
  return (
    <>
      <Routes>
       <Route path="/" element={<Home />}>
          <Route index element={< Index />}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
