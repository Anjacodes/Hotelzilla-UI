import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  renderSignUpButton,
  renderAddDeleteHotel,
  renderReserve,
} from '../modules/conditionalRendering';
import { logout } from '../modules/auth-module';
import { loginActions } from '../redux/login/login';

function NavBar() {
  const { isLoggedIn: loggedIn, role } = useSelector((state) => state.login);
  const [loggedOut, setLoggedOut] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    logout();
    dispatch(loginActions.resetState());
    setLoggedOut(true);
  };

  useEffect(() => {
    if (loggedOut) {
      navigate('/', { replace: true });
    }
  }, [loggedOut]);

  return (
    <nav className="hidden h-screen w-1/5 flex-col items-center justify-evenly overflow-hidden border-r py-4 md:flex">
      <Link className="px-4 md:px-6 lg:px-8" to="/">
        <img src="Hotelzilla-logo.png" alt="Hotelzilla Logo" />
      </Link>
      <div className="flex w-full flex-col px-2 pt-12 text-gray-600">
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
            }
          >
            LOG IN
          </NavLink>
        )}
        {loggedIn && (
          <a
            onClick={logoutHandler}
            className="mt-8 py-2 font-Taxicab text-xl font-bold hover:cursor-pointer hover:bg-lime-400 hover:text-white"
          >
            LOG OUT
          </a>
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
