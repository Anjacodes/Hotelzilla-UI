import React from 'react'

function Reservations() {
  return (
    <section className='w-[80vw] flex flex-col items-center'>
      <h2>My reservations</h2>
      <table>
        <thead>
          <tr>
            <th>Room name</th>
            <th>Hotel</th>
            <th>City</th>
            <th>Date</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody className='text-right'>
          <tr>
            <td className='text-left'>Presidential suite</td>
            <td>4 Seasons</td>
            <td>Paris</td>
            <td>25.11.2022</td>
            <td>$250</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default Reservations