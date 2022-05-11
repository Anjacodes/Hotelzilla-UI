import React from 'react';
import HotelItem from './HotelItem';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Index() {
  const role = useSelector((state) => state.login.role);
  const hotels = useSelector((state) => state.hotel.all);

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex justify-end p-5">
          {role === 'Admin' && (
            <NavLink
              to="/add-hotel"
              className="bg-lime-400 px-3 py-2 text-white"
            >
              Add Hotel
            </NavLink>
          )}
        </div>
        <div className="grid grid-cols-3 grid-rows-3 gap-6 p-5">
          {hotels.map((hotel) => (
            <HotelItem key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Index;
