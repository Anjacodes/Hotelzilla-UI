import { NavLink } from "react-router-dom"

export const renderSignUpButton = (loggedIn) => {
    if (!loggedIn) {
      return <NavLink to="/register" className="py-2 font-bold hover:bg-lime-400 text-xl font-[Taxicab]">SIGN UP</NavLink>
    }
  }

export const renderReserve = (loggedIn) => {
    if (loggedIn) {
      return <NavLink to="/hotels/reserve" className="py-2 font-bold hover:bg-lime-400 text-xl font-[Taxicab]">Reserve</NavLink>
    }
  }

export const renderMyReservations = (loggedIn) => {
    if (loggedIn) {
      return <NavLink to="/reservations" className="py-2 font-bold hover:bg-lime-400 text-xl font-[Taxicab]">My reservations</NavLink>
    }
  }

export const renderAddHotel = (role) => {
    if (role !== "No Role") {
      <NavLink to="/hotels/add" className="py-2 font-bold hover:bg-lime-400 text-xl font-[Taxicab]">Add Hotel</NavLink>
    }
    return
  }

export const renderDeleteHotel = (role) => {
    if (role !== "No Role") {
      <NavLink to="/hotels/delete" className="py-2 font-bold hover:bg-lime-400 text-xl font-[Taxicab]">Delete Hotel</NavLink>
    }
    return
  }