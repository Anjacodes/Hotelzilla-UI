import React from "react"
import { NavLink } from "react-router-dom"

export const renderSignUpButton = (loggedIn) => {
    if (!loggedIn) {
      return <NavLink to="/register" className={({ isActive }) =>
            isActive ? 'bg-lime-400' : '' + 'py-2 font-Taxicab text-xl font-bold hover:bg-lime-400'
          }>SIGN UP</NavLink>
    }
  }

export const renderReserve = (loggedIn) => {
    if (loggedIn) {
      return (
        <React.Fragment>
          <NavLink to="/hotels/reserve" className="py-2 font-bold hover:bg-lime-400 text-xl font-[Taxicab]">Reserve</NavLink>
          <NavLink to="/reservations" className="py-2 font-bold hover:bg-lime-400 text-xl font-[Taxicab]">My reservations</NavLink>

        </React.Fragment>
      )
    }
}

export const renderAddDeleteHotel = (role) => {
    if (role === "admin") {
      return (
        <React.Fragment>

          <NavLink to="/hotels/add" className="py-2 font-bold hover:bg-lime-400 text-xl font-[Taxicab]">Add Hotel</NavLink>
          <NavLink to="/hotels/delete" className="py-2 font-bold hover:bg-lime-400 text-xl font-[Taxicab]">Delete Hotel</NavLink>

        </React.Fragment>
      )
    }
}