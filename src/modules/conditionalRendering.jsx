import React from "react"
import { NavLink } from "react-router-dom"

export const renderSignUpButton = (loggedIn) => {
  if (!loggedIn) {
    return <NavLink to="/register" className={
      ({ isActive }) => isActive? 'bg-lime-400' : '' + 'py-2 font-Taxicab text-xl font-bold hover:bg-lime-400'
    }>SIGN UP</NavLink>
  }
}

export const renderReserve = (loggedIn) => {
  if (loggedIn) {
    return (
      <React.Fragment>
        <NavLink to="/hotels/reserve" className={
          ({ isActive }) => isActive ? 'bg-lime-400' : '' + 'py-2 font-Taxicab text-xl font-bold hover:bg-lime-400'
        }>Reserve</NavLink>
        <NavLink to="/reservations" className={
          ({ isActive }) => isActive ? 'bg-lime-400' : '' + 'py-2 font-Taxicab text-xl font-bold hover:bg-lime-400'
        }>My reservations</NavLink>
      </React.Fragment>
    )
  }
}

export const renderAddDeleteHotel = (role) => {
  if (role === "admin") {
    return (
      <React.Fragment>
        <NavLink to="/hotels/add" className={({ isActive }) =>
          isActive ? 'bg-lime-400' : '' + 'py-2 font-Taxicab text-xl font-bold hover:bg-lime-400'
        }>Add Hotel</NavLink>
        <NavLink to="/hotels/delete" className={({ isActive }) =>
          isActive ? 'bg-lime-400' : '' + 'py-2 font-Taxicab text-xl font-bold hover:bg-lime-400'
        }>Delete Hotel</NavLink>
      </React.Fragment>
    )
  }
}