import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { renderSignUpButton, renderAddDeleteHotel, renderReserve } from '../modules/conditionalRendering'

function NavBar() {

const loggedIn = useSelector(state => state.login.isLoggedIn)
const role = useSelector(state => state.login.getRole)

  return (
    <nav className='w-[20vw] h-screen flex flex-col items-center justify-evenly py-4 border-r overflow-hidden'>
      <a href="/">
        <img
          src="Hotelzilla-logo.png"
          alt="Hotelzilla Logo"
          className="h-[25vh]"
        />
      </a>
      <div className='flex flex-col mt-12 text-gray-600 w-full ml-[50%]'>
         { renderAddDeleteHotel(role) }
         { renderReserve(loggedIn) }
         <NavLink to="/login"  className={({ isActive }) =>
            isActive ? 'bg-lime-400' : '' + 'py-2 mt-8 font-Taxicab text-xl font-bold hover:bg-lime-400 hover:text-white'
          }>{loggedIn ? "LOG IN" : "LOG OUT"}</NavLink>
         { renderSignUpButton(loggedIn) }
      </div>
      <footer className='mt-auto flex flex-col items-center'>
        <div className='flex w-full justify-around mb-2'>
        <i className="fa-brands fa-twitter text-gray-600"></i>
        <i className="fa-brands fa-facebook-f text-gray-600"></i>
        <i className="fa-brands fa-google-plus-g text-gray-600"></i>
        <i className="fa-brands fa-vimeo-v text-gray-600"></i>
        <i className="fa-brands fa-pinterest-p text-gray-600"></i>
        </div>
        <p className='text-gray-600 text-xs'>©2022 Hotelzilla</p>
      </footer>
    </nav>
  );
}

export default NavBar;
