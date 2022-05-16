import React, { useEffect, useState } from 'react';
import HotelItem from './HotelItem';
import { useDispatch, useSelector } from 'react-redux';
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
    if (indexOfLastHotel < hotels.length) {
      setCurrentPage((page) => page +1);
    }
  }

  const handlePageDown = () => {
    if (currentPage > 1) {
      setCurrentPage((page) => page -1)
    }
  }

  return (
    <div className="h-screen flex items-center">
      <div className="flex justify-center items-center">
        <i className={`h-[50px] py-4 px-6 bg-gray-200 rounded-r-full fa-solid fa-caret-left text-slate-50 ${inactiveDown ? "hover:not" : "hover:bg-lime-400"}`} onClick={handlePageDown}/>
        <div className="grid md:grid-cols-3 md:grid-rows-1 grid-cols-1 gap-3 p-5">
          {currentHotels.map((hotel) => (
            <HotelItem key={hotel.id} hotel={hotel} />
          ))}
        </div>
        <i className={`h-[50px] py-4 px-6 bg-lime-400 rounded-l-full fa-solid fa-caret-right text-slate-50 ${inactiveUp ? "hover:not" : "hover:bg-gray-200"}`} onClick={handlePageUp}/>
      </div>
    </div>
  );
}

export default Index;
