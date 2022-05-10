import React from 'react'
import { Navigate } from 'react-router-dom'
import DetailsView from './DetailsView'

const ProtectedRoute = ({loggedIn} = loggedIn) => {
  return (
    loggedIn === true ? <DetailsView/> : <Navigate to="/login" />
  )
}

export default ProtectedRoute