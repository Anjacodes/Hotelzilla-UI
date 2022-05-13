import React from 'react';
import { NavLink } from 'react-router-dom';

export const renderSignUpButton = (loggedIn) => {
  if (!loggedIn) {
    return (
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive
            ? 'bg-lime-400 text-slate-50'
            : '' + 'py-2 font-Taxicab text-xl font-bold'
        }>
        SIGN UP
      </NavLink>
    );
  }
};

export const renderReserve = (loggedIn) => {
  if (loggedIn) {
    return (
      <React.Fragment>
        <NavLink
          to="/reserve"
          className={({ isActive }) =>
            (isActive ? 'bg-lime-400 text-slate-50' : '') +
            ' py-2 font-[Taxicab] text-xl font-bold  hover:bg-lime-400 hover:text-slate-50'
          }>
          RESERVE
        </NavLink>
        <NavLink
          to="/reservations"
          className={({ isActive }) =>
            (isActive ? 'bg-lime-400 text-slate-50' : '') +
            ' py-2 font-[Taxicab] text-xl font-bold  hover:bg-lime-400 hover:text-slate-50'
          }>
          MY RESERVATIONS
        </NavLink>
        {/* Add the LOGOUT button here!!! */}
      </React.Fragment>
    );
  }
};

export const renderAddDeleteHotel = (role, loggedIn) => {
  if (role === 'Admin' && loggedIn) {
    return (
      <React.Fragment>
        <NavLink
          to="/add-hotel"
          className={({ isActive }) =>
            (isActive ? 'bg-lime-400 text-slate-50' : '') +
            ' py-2 font-[Taxicab] text-xl font-bold  hover:bg-lime-400 hover:text-slate-50'
          }>
          ADD HOTEL
        </NavLink>
        <NavLink
          to="/delete-hotel"
          className={({ isActive }) =>
            (isActive ? 'bg-lime-400 text-slate-50' : '') +
            ' py-2 font-[Taxicab] text-xl font-bold  hover:bg-lime-400 hover:text-slate-50'
          }>
          DELETE HOTEL
        </NavLink>
      </React.Fragment>
    );
  }
};
