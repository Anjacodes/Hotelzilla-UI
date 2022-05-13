import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import handleImage from '../../modules/handleImage';
import printStars from '../../modules/printStars';
import { fetchDetails } from '../../redux/details/detailsSlice';
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
  const handleOk = () => {
    setModalVisible(false);
  };
  const handleCancel = () => {
    setModalVisible(false);
  };
  const { getRoomStatus, types } = useSelector((state) => state.roomTypes);
  if (loading && !getRoomStatus === 'fulfilled')
    return (
      <p className="mt-[15%] ml-[35%] font-Taxicab text-2xl text-gray-600">
        LOADING...
      </p>
    );

  if (roomDetails.length !== 0) {
    return (
      <section className="ml-[6vw] mr-[5vw] flex w-[80vw] justify-evenly overflow-y-hidden pt-[25vh] pb-[10vh]">
        <img
          src={handleImage(roomDetails.image)}
          className="aspect-{1/1.8} ml-6 w-[40vw]"
          alt="placeholder"
        />
        <div className="ml-auto flex flex-col items-end">
          <h2 className="mb-3 text-3xl font-bold">
            {roomDetails.name.toUpperCase()}
          </h2>
          <p className="mb-10 text-right">{roomDetails.description}</p>
          <table>
            <tbody className="text-right">
              <tr>
                <td className="py-1 px-4 text-left">Rating:</td>
                <td className="py-1 px-4">{printStars(roomDetails.rating)}</td>
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
        <i
          className="fa-solid fa-caret-left fixed left-[18vw] top-[85vh] rounded-r-full bg-lime-400 py-4 px-6 text-slate-50 hover:bg-lime-500"
          onClick={() => navigateTo('/')}
        />
      </section>
    );
  }
}

export default DetailsView;
