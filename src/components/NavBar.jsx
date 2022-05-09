import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { isLoggedIn, getRole } from '../modules/auth-module'
import { renderSignUpButton, renderAddHotel, renderDeleteHotel, renderMyReservations, renderReserve } from '../modules/conditionalRendering'

function NavBar() {

const token = useSelector(state => state.login.token)
const loggedIn = isLoggedIn(token)
const role = getRole(token)

  return (
    <nav className='w-[20vw] h-[100vh] flex flex-col items-center justify-evenly py-4 border-r'>
      <a href='/'><img src="Hotelzilla-logo.png" alt="Hotelzilla Logo" className='h-[25vh]'/></a>
      <ul className='flex flex-col mt-12'>
         { renderAddHotel(role) }
         { renderDeleteHotel(role) }
         { renderReserve(loggedIn) }
         { renderMyReservations(loggedIn) }
         <NavLink to="/login" className="py-2 font-bold hover:bg-lime-400 text-xl font-[Taxicab]">{loggedIn ? "LOG OUT" : "LOG IN"}</NavLink>
         { renderSignUpButton(loggedIn) }
      </ul>
      <footer className='mt-auto flex flex-col items-center'>
        <div className='flex w-full justify-around mb-2'>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-google-plus-g"></i>
        <i className="fa-brands fa-vimeo-v"></i>
        <i className="fa-brands fa-pinterest-p"></i>
        </div>
        <p>©2022 Hotelzilla</p>
      </footer>
    </nav>
  )
}

export default NavBar