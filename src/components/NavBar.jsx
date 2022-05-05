import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='w-[20vw] h-[100vh] flex flex-col items-center justify-evenly py-4'>
      <a href='/'><img src="Hotelzilla-logo.png" alt="Hotelzilla Logo"/></a>
      <ul className='flex flex-col mt-12'>
         <NavLink to="/hotels/add" className="py-2 font-bold hover:bg-lime-400">ADD HOTEL</NavLink>
         <NavLink to="/hotels/delete" className="py-2 font-bold hover:bg-lime-400">DELETE HOTEL</NavLink>
         <NavLink to="/hotels/reserve" className="py-2 font-bold hover:bg-lime-400">RESERVE</NavLink>
         <NavLink to="/reservations" className="py-2 font-bold hover:bg-lime-400">MY RESERVATIONS</NavLink>
         <NavLink to="/register" className="py-2 font-bold hover:bg-lime-400">SIGN UP</NavLink>
         <NavLink to="/login" className="py-2 font-bold hover:bg-lime-400">LOG IN</NavLink>
      </ul>
      <footer className='mt-auto flex flex-col items-center'>
        <div className='flex w-full justify-around mb-2'>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-google-plus-g"></i>
        <i class="fa-brands fa-vimeo-v"></i>
        <i class="fa-brands fa-pinterest-p"></i>
        </div>
        <p>©2022 Hotelzilla</p>
      </footer>
    </nav>
  )
}

export default NavBar