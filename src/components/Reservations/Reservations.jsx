import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import printStars from '../../modules/printStars';
import { fetchUserReservations } from '../../redux/reservations/reservationsSlice';
import BackButton from '../navigation/BackButton';

function Reservations() {
  const navigate = useNavigate();
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
          className="w-sm-6/12 w-4/12 self-center md:hidden"
          src="Hotelzilla-logo.png"
          alt=""
          onClick={() => navigate("/")}
        />
        <h2 className="mb-10 font-Taxicab text-3xl capitalize text-gray-800">
          my reservations
        </h2>

          <div className="bg-gray-500 w-[80%] flex justify-between font-Taxicab text-lg uppercase py-2 px-2">
                <h3 className='text-slate-50'>ROOM</h3>
                <h3 className='text-slate-50'>HOTEL</h3>
                <h3 className='text-slate-50 md:mr-12'>RATING</h3>
                <h3 className='text-slate-50 hidden sm:block'>DATE</h3>
                <h3 className='text-slate-50'>PRICE</h3>
          </div>

          <div className='h-[calc(100vh-400px)] overflow-y-auto w-[80%]'>
              {reservationsArr &&
                reservationsArr.map((reservation) => {
                  return (
                    <tr key={reservation.id} className="even:bg-white w-full flex justify-between items-center">
                      <p className="font-bold text-gray-400 flex-auto w-10">
                        {reservation.room_type.name}
                      </p>
                      <p className="py-4 flex-auto w-0 sm:mr-12">
                        {reservation.hotel.name}
                      </p>
                      <p className="py-4 flex-auto w-0">
                        <>
                          <div className="hidden md:block">
                            {printStars(reservation.hotel.rating)}
                          </div>
                          <div className="block text-center md:hidden">
                            {reservation.hotel.rating}
                          </div>
                        </>
                      </p>
                      <p className="hidden py-4 sm:block flex-auto w-0 text-right">
                        {reservation.date}
                      </p>
                      <p className="py-4 sm:pl-8 flex-auto w-0 text-right">${reservation.room_type.price}</p>
                    </tr>
                  );
                })}
          </div>

      </section>
      <BackButton />
    </div>
  );
}

export default Reservations;
