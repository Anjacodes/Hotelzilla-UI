import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function IsAdmin({role, loggedIn}) {
  if (role !== "admin" && !loggedIn) return <Navigate to="/" />;
  return <Outlet />;
}

export default IsAdmin;