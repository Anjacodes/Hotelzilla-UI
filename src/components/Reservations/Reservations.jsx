import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import printStars from '../../modules/printStars';
import { fetchUserReservations } from '../../redux/reservations/reservationsSlice';

function Reservations() {
  let navigateTo = useNavigate();

  const { reservations, loading, rejected } = useSelector(
    (state) => state.reservations
  );
  const token = useSelector((state) => state.login.token);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserReservations(token));
  }, []);

  const reservationsArr = reservations;

  if (loading)
    return (
      <p className="mt-[15%] ml-[35%] font-Taxicab text-2xl text-gray-600">
        LOADING...
      </p>
    );

  if (rejected) return <p>Oops...Something went wrong here!</p>;

  return (
    <div className="h-screen w-full">
      <section className="flex flex-col items-center pt-[10vh] md:pt-[22vh]">
      <img
          className="md:hidden self-center w-4/12 w-sm-6/12"
          src="Hotelzilla-logo.png"
          alt=""
        />
        <h2 className="mb-10 font-Taxicab text-3xl capitalize text-gray-800">
          my reservations
        </h2>
        <table className="table-fixed text-left text-gray-500 md:table-auto">
          <thead className="bg-gray-500 w-full table font-Taxicab text-lg uppercase text-slate-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 md:pl-6">
                ROOM
              </th>
              <th scope="col" className="md:px-6 py-3">
                HOTEL
              </th>
              <th scope="col" className="md:px-6 py-3">
                RATING
              </th>
              <th scope="col" className="hidden px-6 py-3 sm:block">
                DATE
              </th>
              <th scope="col" className="md:px-6 py-3">
                PRICE
              </th>
            </tr>
          </thead>
          <tbody className="font-Metrophobic block table-fixed h-[calc(100vh-400px)] overflow-y-auto w-full">
            {reservationsArr &&
              reservationsArr.map((reservation) => {
                return (
                  <tr key={reservation.id} className="even:bg-white w-[100%]">
                    <td className="w-[10%] md:pl-6 font-bold text-gray-400">
                      {reservation.room_type.name}
                    </td>
                    <td className="pl-0 py-4">
                      {reservation.hotel.name}
                    </td>
                    <td className="py-4">
                      <>
                        <div className="hidden md:block">
                          {printStars(reservation.hotel.rating)}
                        </div>
                        <div className="pr-8 block text-center md:hidden">
                          {reservation.hotel.rating}
                        </div>
                      </>
                    </td>
                    <td className="hidden py-4 sm:block">
                      {reservation.date}
                    </td>
                    <td className="py-4 sm:pl-8">${reservation.room_type.price}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </section>
      <i
        className="fa-solid fa-caret-left absolute left-0 bottom-4 rounded-r-full bg-lime-400 py-4 px-6 text-slate-50 hover:bg-lime-500 sm:hidden"
        onClick={() => navigateTo(-1)}
      />
    </div>
  );
}

export default Reservations;
