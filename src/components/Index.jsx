import React, { useEffect, useState } from 'react';
import HotelItem from './HotelItem';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllHotels } from '../redux/hotel/hotel';

function Index() {
  const role = useSelector((state) => state.login.role);
  const hotels = useSelector((state) => state.hotel.all);
  const dispatch = useDispatch();

  let [currentPage, setCurrentPage] = useState(1);
  let [ hotelsPerPage ] = useState(3);
  const [inactiveUp, setInactiveUp] = useState(true);
  const [inactiveDown, setInactiveDown] = useState(false);

  useEffect(() => {
    dispatch(getAllHotels());
  }, []);

  // Get current post
  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const currentHotels = hotels.slice(indexOfFirstHotel, indexOfLastHotel);

  useEffect(() => {
    if (currentPage === 1) {
      setInactiveDown(true)
    } else {
      setInactiveDown(false)
    }
    if (indexOfLastHotel < hotels.length-1) {
      setInactiveUp(false)
    } else {
      setInactiveUp(true)
    }
  }, [currentHotels])

  // Change pages
  const handlePageUp = () => {
    if (indexOfLastHotel < hotels.length-1) {
      setCurrentPage((page) => page +1);
    }
  }

  const handlePageDown = () => {
    if (currentPage > 1) {
      setCurrentPage((page) => page -1)
    }
  }

  return (
    <>
      <div className="flex flex-col w-[80vw] justify-center">
        <div className="flex justify-end p-5 pb-12">
          {role === 'Admin' && (
            <NavLink
              to="/add-hotel"
              className="bg-lime-400 px-3 py-2 text-white"
            >
              Add Hotel
            </NavLink>
          )}
        </div>
        <div className="grid grid-cols-3 grid-rows-1 gap-3 p-5">
          {currentHotels.map((hotel) => (
            <HotelItem key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
      <i className={`fixed left-[20vw] top-[50vh] py-4 px-6 bg-gray-200 rounded-r-full fa-solid fa-caret-left text-slate-50 ${inactiveDown ? "hover:not" : "hover:bg-lime-400"}`} onClick={handlePageDown}/>
      <i className={`fixed right-0 top-[50vh] py-4 px-6 bg-lime-400 rounded-l-full fa-solid fa-caret-right text-slate-50 ${inactiveUp ? "hover:not" : "hover:bg-gray-200"}`} onClick={handlePageUp}/>
    </>
  );
}

export default Index;
