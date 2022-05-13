import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  renderSignUpButton,
  renderAddDeleteHotel,
  renderReserve,
} from '../modules/conditionalRendering';

function NavBar() {
  const { isLoggedIn: loggedIn, role } = useSelector((state) => state.login);

  return (
    <nav className="flex h-screen w-[20vw] flex-col items-center justify-evenly overflow-hidden border-r py-4">
      <a href="/">
        <img
          src="Hotelzilla-logo.png"
          alt="Hotelzilla Logo"
          className="h-[25vh]"
        />
      </a>
      <div className="mt-12 ml-[50%] flex w-full flex-col text-gray-600">
        {renderAddDeleteHotel(role, loggedIn)}
        {renderReserve(loggedIn)}
        {!loggedIn && (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? 'bg-lime-400'
                : '' +
                  'mt-8 py-2 font-Taxicab text-xl font-bold hover:bg-lime-400 hover:text-white'
            }>
            LOG IN
          </NavLink>
        )}
        {renderSignUpButton(loggedIn)}
      </div>
      <footer className="mt-auto flex flex-col items-center">
        <div className="mb-2 flex w-full justify-around">
          <i className="fa-brands fa-twitter text-gray-600"></i>
          <i className="fa-brands fa-facebook-f text-gray-600"></i>
          <i className="fa-brands fa-google-plus-g text-gray-600"></i>
          <i className="fa-brands fa-vimeo-v text-gray-600"></i>
          <i className="fa-brands fa-pinterest-p text-gray-600"></i>
        </div>
        <p className="text-xs text-gray-600">©2022 Hotelzilla</p>
      </footer>
    </nav>
  );
}

export default NavBar;
