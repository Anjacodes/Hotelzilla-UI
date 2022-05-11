import React from "react"
import { NavLink } from "react-router-dom"

export const renderSignUpButton = (loggedIn) => {
    if (!loggedIn) {
      return <NavLink to="/register" className={({ isActive }) =>
            isActive ? 'bg-lime-400 text-slate-50' : '' + 'py-2 font-Taxicab text-xl font-bold'
          }>SIGN UP</NavLink>
    }
  }

export const renderReserve = (loggedIn) => {
    if (loggedIn) {
      return (
        <React.Fragment>
          <NavLink to="/hotels/reserve" className="py-2 font-bold hover:bg-lime-400 hover:text-slate-50 text-xl font-[Taxicab]">RESERVE</NavLink>
          <NavLink to="/reservations" className="py-2 font-bold hover:bg-lime-400 hover:text-slate-50  text-xl font-[Taxicab]">MY RESERVATIONS</NavLink>

        </React.Fragment>
      )
    }
}

export const renderAddDeleteHotel = (role) => {
    if (role === "admin") {
      return (
        <React.Fragment>

          <NavLink to="/hotels/add" className="py-2 font-bold hover:bg-lime-400 hover:text-slate-50  text-xl font-[Taxicab]">ADD HOTEL</NavLink>
          <NavLink to="/hotels/delete" className="py-2 font-bold hover:bg-lime-400 hover:text-slate-50  text-xl font-[Taxicab]">DELETE HOTEL</NavLink>

        </React.Fragment>
      )
    }
}