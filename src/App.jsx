import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Details from './components/Details/Details';

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={< NavBar/>}/>
          <Route path=":roomId" element={<Details/>}/>
        </Route>
        <Route path="/details" element={<Details />}>
          <Route path="/details" element={<NavBar />}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
