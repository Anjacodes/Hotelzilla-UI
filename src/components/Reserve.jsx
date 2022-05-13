import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    (state) => state.reservations,
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
    <section className="flex h-screen w-full flex-col px-6 py-4">
      {createReservationStatus === 'fulfilled' && (
        <div className="absolute bottom-4 right-4 z-10 rounded  bg-green-200 px-4 py-2 text-green-700">
          Reservation succesfully created!
        </div>
      )}
      {createReservationStatus === 'rejected' && (
        <div className="absolute bottom-4 right-4 z-10 rounded bg-red-200 px-4 py-2 text-red-700">
          Ups! Something went wrong
        </div>
      )}
      <header className="ml-6 mt-6">
        <h2 className="font-Obscura-regular text-3xl">Add Reservation</h2>
      </header>
      <div className="flex h-full flex-col place-items-center items-center justify-center gap-6 md:grid md:grid-cols-2">
        <article>
          <table cellPadding={4}>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="city">City:</label>
                </td>
                <td>
                  <select
                    className="w-48"
                    name="city"
                    id="city"
                    value={cityId}
                    onChange={(e) => setCityId(e.target.value)}
                    defaultValue={'defaultSelect'}>
                    <option value="defaultSelect" disabled>
                      Select a city:
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
                      defaultValue={'defaultSelect'}>
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
                      defaultValue={'defaultSelect'}>
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
          <button type="button" onClick={handleConfirmation}>
            Confirm reservation
          </button>
        </article>
        <article>
          <h4 className="font-Taxicab text-2xl">Room name</h4>
          <p>
            description: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quis saepe numquam, incidunt alias vitae quod dolore deserunt
            animi libero tempora.
          </p>
          <table cellPadding={4}>
            <tbody>
              <tr>
                <td>
                  <strong>Capacity:</strong>
                </td>
                <td>5</td>
              </tr>
              <tr>
                <td>
                  <strong>Price:</strong>
                </td>
                <td>$5 USD</td>
              </tr>
            </tbody>
          </table>
          {/* Convert to a link with the endpoint */}
          <button type="button">See room</button>
        </article>
      </div>
    </section>
  );
};

export default Reserve;
