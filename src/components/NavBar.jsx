import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { isLoggedIn } from '../modules/auth-module'

function NavBar() {

const token = useSelector(state => state.login.token)

const loggedIn = isLoggedIn(token)

const renderSignUpButton = () => {
  if (!loggedIn) {
    return <NavLink to="/register" className="py-2 font-bold hover:bg-lime-400 text-xl font-[Taxicab]">SIGN UP</NavLink>
  }
}
  return (
    <nav className='w-[20vw] h-[100vh] flex flex-col items-center justify-evenly py-4 border-r'>
      <a href='/'><img src="Hotelzilla-logo.png" alt="Hotelzilla Logo" className='h-[25vh]'/></a>
      <ul className='flex flex-col mt-12'>
         <NavLink to="/hotels/add" className="py-2 font-bold hover:bg-lime-400 text-xl font-[Taxicab]">Add Hotel</NavLink>
         <NavLink to="/hotels/delete" className="py-2 font-bold hover:bg-lime-400 text-xl font-[Taxicab]">Delete Hotel</NavLink>
         <NavLink to="/hotels/reserve" className="py-2 font-bold hover:bg-lime-400 text-xl font-[Taxicab]">Reserve</NavLink>
         <NavLink to="/reservations" className="py-2 font-bold hover:bg-lime-400 text-xl font-[Taxicab]">My reservations</NavLink>
         <NavLink to="/login" className="py-2 font-bold hover:bg-lime-400 text-xl font-[Taxicab]">{loggedIn ? "LOG OUT" : "LOG IN"}</NavLink>
         { renderSignUpButton() }
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