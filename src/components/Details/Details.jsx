import React from 'react'
import NavBar from '../NavBar'
import DetailsView from './DetailsView'

function Details() {
  return (
    <section className='flex'>
      <NavBar />
      <DetailsView/>
    </section>
  )
}

export default Details