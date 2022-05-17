import { FormatAlignCenter } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import getToday from '../modules/getToday';
import { getAllCities } from '../redux/city/city';
import { getHotelsByCity } from '../redux/hotel/hotel-helper';
import {
  createReservation,
  resetCreateReservationStatus,
} from '../redux/reservations/reservationsSlice';
import { getRoomTypes } from '../redux/roomTypes/roomTypesSlice';

const Reserve = ({ token }) => {
  const dispatch = useDispatch();
  // Values holders for API fetched data
  const [cities, setCities] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [rooms, setRooms] = useState([]);
  // Form controllers
  const [cityId, setCityId] = useState(null);
  // API request parameters
  const [reservationDate, setReservationDate] = useState(getToday());
  const [hotelId, setHotelId] = useState(null);
  const [roomTypeId, setRoomTypeId] = useState(null);

  const navigate = useNavigate();

  // Get cities and room types from API on component mount => load them to form
  useEffect(() => {
    dispatch(getAllCities());
    dispatch(getRoomTypes(token));
  }, []);
  const { all: fetchedCities } = useSelector((state) => state.city);
  useEffect(() => {
    setCities(fetchedCities);
  }, [fetchedCities]);
  const { types } = useSelector((state) => state.roomTypes);
  useEffect(() => {
    setRooms(types);
  }, [types]);

  // Get hotels from API after choosing a city => load them to form
  useEffect(() => {
    dispatch(getHotelsByCity({ token, id: cityId }));
  }, [cityId]);
  const { hotelsByCity } = useSelector((state) => state.hotel);
  useEffect(() => {
    setHotels(hotelsByCity);
  }, [hotelsByCity]);

  const handleConfirmation = () => {
    if (hotelId && roomTypeId) {
      const reservationData = {
        date: reservationDate,
        hotel_id: hotelId,
        room_type_id: roomTypeId,
      };
      console.log(reservationData);
      dispatch(createReservation({ token, reservationData }));
    }
  };

  const { createReservationStatus } = useSelector(
    (state) => state.reservations
  );
  useEffect(() => {
    if (
      createReservationStatus === 'fulfilled' ||
      createReservationStatus === 'rejected'
    ) {
      setTimeout(() => {
        dispatch(resetCreateReservationStatus());
      }, 3000);
    }
  }, [createReservationStatus]);

  return (
    <section className="flex h-screen w-full flex-col px-6 py-4 justify-center items-center pt-[22vh]">
      {createReservationStatus === 'fulfilled' && (
        <div className="absolute bottom-4 right-4 z-10 rounded  bg-green-200 px-4 py-2 text-green-700">
          Reservation succesfully created!
          {window.location.reload()}
        </div>
      )}
      {createReservationStatus === 'rejected' && (
        <div className="absolute bottom-4 right-4 z-10 rounded bg-red-200 px-4 py-2 text-red-700">
          Ups! Something went wrong
        </div>
      )}
      <img
          className="md:hidden self-center w-4/12 w-sm-6/12"
          src="Hotelzilla-logo.png"
          alt=""
        />
      <header>
        <h2 className="font-Taxicab text-3xl text-gray-800 capitalize">Add Reservation</h2>
      </header>
      <div className="flex h-full flex-col mt-10 gap-6 items-center w-min">
        <article>
          <table cellPadding={4}>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="city">Country:</label>
                </td>
                <td>
                  <select
                    className="w-48"
                    name="city"
                    id="city"
                    value={cityId}
                    onChange={(e) => setCityId(e.target.value)}
                    defaultValue={'defaultSelect'}
                  >
                    <option value="defaultSelect" disabled>
                      Select a country:
                    </option>
                    {cities.map((city) => (
                      <option key={city.key} value={city.id}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              {cityId && (
                <tr>
                  <td>
                    <label htmlFor="hotel">Hotel:</label>
                  </td>
                  <td>
                    <select
                      className="w-48"
                      name="hotel"
                      id="hotel"
                      value={hotelId}
                      onChange={(e) => setHotelId(e.target.value)}
                      defaultValue={'defaultSelect'}
                    >
                      <option value="defaultSelect" disabled>
                        Select a hotel:
                      </option>
                      {hotels.map((hotel) => (
                        <option key={hotel.key} value={hotel.id}>
                          {hotel.name}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              )}
              {hotelId && (
                <tr>
                  <td>
                    <label htmlFor="room">Room:</label>
                  </td>
                  <td>
                    <select
                      className="w-48"
                      name="roomType"
                      id="roomType"
                      value={roomTypeId}
                      onChange={(e) => setRoomTypeId(e.target.value)}
                      defaultValue={'defaultSelect'}
                    >
                      <option value="defaultSelect" disabled>
                        Select a room:
                      </option>
                      {rooms.map((room) => (
                        <option key={room.key} value={room.id}>
                          {room.name}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              )}
              <tr>
                <td>
                  <label htmlFor="date">Reservation date:</label>
                </td>
                <td>
                  <input
                    className="w-48"
                    name="date"
                    id="date"
                    type="date"
                    value={reservationDate}
                    onChange={(e) => setReservationDate(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </article>
        <article>
          {roomTypeId && (
            <>
              <h4 className="font-Taxicab text-2xl">
                {rooms[roomTypeId - 1].name}
              </h4>
              <p>{rooms[roomTypeId - 1].description}</p>
              <div className="flex gap-4">
                <p>
                  <strong>Price:</strong>
                </p>
                <p>${rooms[roomTypeId - 1].price} USD</p>
              </div>
            </>
          )}
        </article>
          <button
            type="button"
            className="self-start mt-6 rounded-md bg-lime-400 hover:bg-gray-200 px-4 py-2 font-semibold text-white"
            onClick={handleConfirmation}
          >
            Confirm reservation
          </button>
      </div>
      <i
        className="fa-solid fa-caret-left absolute left-0 bottom-4 rounded-r-full bg-lime-400 py-4 px-6 text-slate-50 hover:bg-lime-500 sm:hidden"
        onClick={() => navigate(-1)}
      />
    </section>
  );
};

export default Reserve;
