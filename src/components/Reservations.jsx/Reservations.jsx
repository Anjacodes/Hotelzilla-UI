import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserReservations } from '../../redux/reservations/reservationsSlice';


function Reservations() {
  const {reservations, loading} = useSelector(state => state.reservations)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserReservations())
  }, [])

  const reservationsArr = reservations.products

  if (loading) return <p>Loading...</p>

  return (
    <section className='bg-slate-200 w-[80vw] flex flex-col items-center overflow-x-auto'>
      <h2 className='mt-[25vh] font-[Taxicab] text-2xl mb-10'>MY RESERVATIONS</h2>
      <table className='w-[90%] table-fixed text-left text-gray-500 md:table-auto'>
        <thead className="text-s text-gray-700 uppercase bg-lime-300 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className='py-3'>ROOM</th>
            <th scope="col" className='px-6 py-3'>HOTEL</th>
            <th scope="col" className='px-6 py-3'>CITY</th>
            <th scope="col" className='px-6 py-3'>RATING</th>
            <th scope="col" className='px-6 py-3'>DATE</th>
            <th scope="col" className='px-6 py-3'>PRICE</th>
          </tr>
        </thead>
        <tbody className=''>
          { reservationsArr && reservationsArr.map(reservation => {
              return (
                <tr key={reservation.id} className="even:bg-slate-100">
                  <td className='font-bold'>{reservation.title}</td>
                  <td className='px-6 py-4'>{reservation.brand}</td>
                  <td className='px-6 py-4'>{reservation.category}</td>
                  <td className='px-6 py-4'>{reservation.rating}</td>
                  <td className='px-6 py-4'>01.01.2023</td>
                  <td className='px-6 py-4'>{reservation.price}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </section>
  )
}

export default Reservations