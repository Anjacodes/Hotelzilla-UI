import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Home = () => {
  return (
    <div className='flex w-screen'>
      <div className="w-1/5 sm:block hidden">
        <NavBar />
      </div>
      <div className="md:w-4/5 w-full">
        <Outlet />
      </div>
    </div>
  )
};

export default Home;
