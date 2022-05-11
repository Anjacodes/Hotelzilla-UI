import React from 'react';
import { hotels } from '../../modules/mockupData';

const RemoveHotel = () => {
  // todo: Connect to API and fetch hotels
  const fetchedHotels = hotels;
  return (
    <section>
      <header>
        <h2>Delete Hotel</h2>
      </header>
      <table>
        <tbody>
          {fetchedHotels.map((hotel, index) => (
            <tr key={index + 1}>
              <td>{hotel.id}</td>
              <td>{hotel.name}</td>
              <td>Delete button</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default RemoveHotel;
