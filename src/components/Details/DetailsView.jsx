import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import handleImage from '../../modules/handleImage';
import printStars from '../../modules/printStars';
import { fetchDetails } from '../../redux/details/detailsSlice';
import {
  createReservation,
  resetCreateReservationStatus,
} from '../../redux/reservations/reservationsSlice';
import { getRoomTypes } from '../../redux/roomTypes/roomTypesSlice';
import ReservationModal from './ReservationModal';

function DetailsView({ token }) {
  const dispatch = useDispatch();
  let params = useParams();
  const roomId = params.roomId;

  useEffect(() => {
    dispatch(getRoomTypes(token));
    dispatch(fetchDetails(roomId));
  }, []);

  let navigateTo = useNavigate();

  const { roomDetails, loading } = useSelector((state) => state.details);

  // Modal controllers
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const handleOk = (date, room) => {
    const reservationData = {
      date,
      hotel_id: roomDetails.id,
      room_type_id: parseInt(room),
    };
    dispatch(createReservation({ token, reservationData }));
    setModalVisible(false);
  };
  const handleCancel = () => {
    setModalVisible(false);
  };
  const { getRoomStatus, types } = useSelector((state) => state.roomTypes);

  // handle alert after reservation creation
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

  if (loading && !getRoomStatus === 'fulfilled')
    return (
      <p className="mt-[15%] ml-[35%] font-Taxicab text-2xl text-gray-600">
        LOADING...
      </p>
    );

  if (roomDetails.length !== 0) {
    return (
      <div className="h-screen w-full bg-slate-100">
        <section className="flex justify-evenly items-center h-4/5">
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
          <img
            src={handleImage(roomDetails.image)}
            className="w-2/5"
            alt="placeholder"
          />
          <div className="flex flex-col items-end">
            <h2 className="mb-3 text-3xl font-bold">
              {roomDetails.name.toUpperCase()}
            </h2>
            <p className="mb-10 text-right">{roomDetails.description}</p>
            <table>
              <tbody className="text-right">
                <tr>
                  <td className="py-1 px-4 text-left">Rating:</td>
                  <td className="py-1 px-4">                     
                    <div className='hidden sm:block'>
                      {printStars(roomDetails.rating)}
                    </div>
                    <div className='block sm:hidden text-center'>
                      {roomDetails.rating}
                    </div>
                  </td>
                </tr>
                <tr className="bg-gray-200">
                  <td className="py-1 px-4 text-left">City:</td>
                  <td className="py-1 px-4">{roomDetails.city.name}</td>
                </tr>
              </tbody>
            </table>
            {token && (
              <>
                <button
                  className="mt-12 rounded-full bg-lime-400 py-3 px-4 text-slate-50 hover:bg-lime-500"
                  onClick={openModal}>
                  <i className="fa-solid fa-calendar-check mr-2"></i>Reserve
                  <i className="fa-solid fa-circle-chevron-right ml-4"></i>
                </button>
                <ReservationModal
                  visible={modalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  hotelInfo={roomDetails}
                  roomTypes={types}
                />
              </>
            )}
          </div>
        </section>
        <i
          className="fa-solid fa-caret-left fixed rounded-r-full bg-lime-400 py-4 px-6 text-slate-50 hover:bg-lime-500"
          onClick={() => navigateTo('/')}
        />
      </div>
    );
  }
}

export default DetailsView;
