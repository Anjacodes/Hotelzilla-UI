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
  const [inactive, setInactive] = useState(true);

  useEffect(() => {
    dispatch(getAllHotels());
  }, []);

  // Get current post
  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const currentHotels = hotels.slice(indexOfFirstHotel, indexOfLastHotel);

  // Change pages
  const handlePageUp = () => {
    if (currentHotels.length < hotelsPerPage) {
      setInactive(true);
      return
    }
    setInactive(false);
    setCurrentPage((page) => page +1);
  }

  const handlePageDown = () => {
    if (currentPage === 1) {
      setInactive(true)
      return
    }
    setInactive(false)
    setCurrentPage((page) => page -1)
  }

  return (
    <>
      <div className="flex flex-col w-[80vw]">
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
          {currentHotels.map((hotel) => (
            <HotelItem key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
      <i className={inactive ? "not:hover fixed left-[20vw] top-[50vh] py-4 px-6 bg-gray-200 rounded-r-full fa-solid fa-caret-left text-slate-50" : "fixed left-[20vw] top-[50vh] py-4 px-6 bg-gray-200 hover:bg-lime-500 rounded-r-full fa-solid fa-caret-left text-slate-50"} onClick={handlePageDown}/>
      <i className={inactive ? "not:hover fixed right-0 top-[50vh] py-4 px-6 bg-lime-400 rounded-l-full fa-solid fa-caret-right text-slate-50" : "fixed right-0 top-[50vh] py-4 px-6 bg-lime-400 hover:bg-gray-200 rounded-l-full fa-solid fa-caret-right text-slate-50"}
       onClick={handlePageUp}/>
    </>
  );
}

export default Index;
