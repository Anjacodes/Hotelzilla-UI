import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllHotels } from '../../redux/hotel/hotel';
import { deleteHotel } from '../../redux/hotel/hotel-helper';

const RemoveHotel = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHotels());
  }, []);

  // todo: Connect to API and fetch hotels
  const { all: hotels, deleteStatus } = useSelector((state) => state.hotel);
  return (
    <section>
      <header>
        <h2>Delete Hotel</h2>
      </header>
      <table>
        <tbody>
          {hotels.map((hotel, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{hotel.name}</td>
              <td>
                <button onClick={() => dispatch(deleteHotel(hotel.id))}>
                  Delete button
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default RemoveHotel;
