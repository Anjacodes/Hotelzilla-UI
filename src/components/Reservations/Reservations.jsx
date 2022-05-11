import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUserReservations } from '../../redux/reservations/reservationsSlice';


function Reservations() {
  let navigateTo = useNavigate();

  const {reservations, loading} = useSelector(state => state.reservations)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserReservations())
  }, [])

  const reservationsArr = reservations.products

  if (loading) return <p className='font-Taxicab text-2xl mt-[15%] ml-[35%] text-gray-600'>LOADING...</p>

  return (
    <section className='bg-slate-100 w-[80vw] flex flex-col items-center overflow-x-auto'>
      <h2 className='mt-[25vh] font-Taxicab text-3xl text-gray-800 mb-10'>MY RESERVATIONS</h2>
      <table className='w-[80%] table-fixed text-left text-gray-500 md:table-auto'>
        <thead className="text-lg text-slate-50 uppercase bg-gray-500 dark:bg-gray-700 dark:text-gray-400 font-Taxicab">
          <tr>
            <th scope="col" className='py-3'>ROOM</th>
            <th scope="col" className='px-6 py-3'>HOTEL</th>
            <th scope="col" className='px-6 py-3'>CITY</th>
            <th scope="col" className='px-6 py-3'>RATING</th>
            <th scope="col" className='px-6 py-3'>DATE</th>
            <th scope="col" className='px-6 py-3'>PRICE</th>
          </tr>
        </thead>
        <tbody className='font-Metrophobic'>
          { reservationsArr && reservationsArr.map(reservation => {
              return (
                <tr key={reservation.id} className="even:bg-white">
                  <td className='font-bold text-gray-400'>{reservation.title}</td>
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
      <i className="fixed left-[20vw] top-[85vh] py-4 px-6 bg-lime-400 hover:bg-lime-500 rounded-r-full fa-solid fa-caret-left text-slate-50" onClick={()=> navigateTo("/")}/>
    </section>
  )
}

export default Reservations